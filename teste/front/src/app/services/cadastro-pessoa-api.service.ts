import { PessoaDadosCompletos, PessoaId } from './../models/PessoaDadosCompletos';
import { PessoaRequisicao } from '../models/PessoaRequisicao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroPessoaApiService {
  apiUrl = '/api/pessoa';
  constructor(private httpCliente: HttpClient) {}

  listarPessoas(): Observable<PessoaDadosCompletos[]> {
    return this.httpCliente.get<PessoaDadosCompletos[]>(this.apiUrl);
  }
  listarPessoas2(): Observable<PessoaId> {
    return this.httpCliente.get<PessoaId>(this.apiUrl);
  }
  cadastrarPessoa(dadosPessoa: PessoaRequisicao): Observable<PessoaRequisicao> {
    console.log(dadosPessoa);
    return this.httpCliente.post<PessoaRequisicao>(this.apiUrl, dadosPessoa);

  }

  editarPessoa(dadosPessoa: PessoaRequisicao, id : string): Observable<any> {
    delete dadosPessoa.cpf; 
    console.log(dadosPessoa);
    return this.httpCliente.patch(`${this.apiUrl}/${id}`, dadosPessoa);
  }

  excluirPessoa(id: string): Observable<any> {
    return this.httpCliente.delete(`${this.apiUrl}/${id}`);
  }
}

