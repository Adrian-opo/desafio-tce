import { PessoaRequisicao } from '../../models/PessoaRequisicao';
import { CadastroPessoaApiService } from './../../services/cadastro-pessoa-api.service';
import { CepServiceService } from './cep-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css'],
})
export class ElementDialogComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    private cepService: CepServiceService,
    private construtorFormulario: FormBuilder,
    private cadastroService: CadastroPessoaApiService,
  ) {
    this.cadastroForm = this.construtorFormulario.group({
      id : '',
      nome: '',
      dataNascimento: '',
      rg: '',
      orgaoExpRg: '',
      pai: '',
      mae: '',
      email: '',
      telefone: '',
      cpf: '',
      estaAtivo: '',
      cep: '',
      numero: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      uf: '',
      complemento: '',
    });
  }

  ngOnInit(): void {
    this.cadastroForm.patchValue(this.data);
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  consultarCep(event: any) {
    this.cepService.buscarCep(event.target.value).subscribe({
      next: (dados: any) => {
        this.cadastroForm.patchValue({
          logradouro: dados.logradouro ? dados.logradouro : '-',
          bairro: dados.bairro ? dados.bairro : '-',
          cidade: dados.localidade ? dados.localidade : '-',
          uf: dados.uf ? dados.uf : '-',
          complemento: dados.complemento,
        });
      },
      error: (erro: any) => {
        this.cadastroForm.patchValue({
          logradouro: '-',
          bairro: '-',
          cidade: '-',
          uf: '-',
        });
      },
    });
  }
  
  async submeterFormulario() {
    console.log(this.cadastroForm.value);
    if (this.data) {
      const id = this.data.id;
      const novaPessoa = this.converterCamposDoFormularioParaPessoaRequisicao(
        this.cadastroForm.value
      );
      this.cadastroService.editarPessoa(await novaPessoa,id).subscribe();
      alert(`Informações Atualizadas com Sucesso`);
    } else {
      const novaPessoa = this.converterCamposDoFormularioParaPessoaRequisicao(
        this.cadastroForm.value
      );
      this.cadastroService.cadastrarPessoa(await novaPessoa).subscribe();
      alert(`Pessoa Cadastrada com Sucesso`);
    }
    this.dialogRef.close(true);
  }

  async converterCamposDoFormularioParaPessoaRequisicao(
    camposFormulario: any
  ): Promise<PessoaRequisicao> {
    console.log(camposFormulario)
    let a = camposFormulario.dataNascimento;
    const dia = a.substring(0, 2); // extrai os 4 primeiros caracteres (ano)
    const mes = a.substring(2, 4); // extrai os caracteres 5 e 6 (mês)
    const ano = a.substring(4, 8); // extrai os caracteres 7 e 8 (dia)
    const dataFormatada = `${ano}-${mes}-${dia}`;
    const city = camposFormulario.cidade;
    const parte1 = camposFormulario.cep.substring(0, 5); // extrai os 5 primeiros caracteres
    const parte2 = camposFormulario.cep.substring(5, 8); // extrai os caracteres restantes
    const cepFormatado = `${parte1}-${parte2}`;
    async function minhaFuncao() {
      const response = await fetch(`api/base/cidades/${city}`);
      const data = await response.json();
      if(data.statusCode != 404){
        return data;
      }else{
        return "";
      }
  
      // fazer algo com camposFormulario
    }
    let aux = await minhaFuncao();
    return {
      id: camposFormulario.id,
      nome: camposFormulario.nome,
      cpf: camposFormulario.cpf,
      rg: camposFormulario.rg,
      orgaoExpRg: camposFormulario.orgaoExpRg,
      dataNascimento: dataFormatada,
      pai: camposFormulario.pai,
      mae: camposFormulario.mae,
      endereco: {
        complemento: camposFormulario.complemento,
        cep: cepFormatado,
        numero: parseInt(camposFormulario.numero),
        logradouro: camposFormulario.logradouro,
        bairro: camposFormulario.bairro,
        cidade: {
          id: aux,
        },
        uf: camposFormulario.uf
      },
      contato: {
        telefones: [
          {
            numero: camposFormulario.telefone,
            tipo: 'Celular',
            principal: true
          }
        ],
        emails: [
          {
            email: camposFormulario.email,
            principal: true
          }
        ]
      }
    };

  }

  getFormularioInvalido(): boolean {
    console.log(this.cadastroForm.invalid);
    return this.cadastroForm.invalid;
  }

  getErrorMessage() {
    return 'Valor Inválido';
  }
}
