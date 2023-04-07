import { PessoaDadosCompletos } from './../../models/PessoaDadosCompletos';
import { CadastroPessoaApiService } from './../../services/cadastro-pessoa-api.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CadastroPessoaApiService],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'edicao',
    'nome',
    'dataNascimento',
    'rg',
    'orgaoExpRg',
    'pai',
    'mae',
    'email',
    'telefone',
    'cpf',
    'estaAtivo',
    'cep',
    'numero',
    'logradouro',
    'bairro',
    'cidade',
    'uf',
    'complemento',
    'criadoEm',
    'atualizadoEm',
  ];

  dataSource = new MatTableDataSource<PessoaDadosCompletos>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    public modal: MatDialog,
    public pessoaService: CadastroPessoaApiService
  ) {}

  ngOnInit() {
    this.listarPessoas();
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.nextPageLabel = 'Próxima Página';
    this.paginator._intl.previousPageLabel = 'Página Anterior';
    this.paginator._intl.firstPageLabel = 'Primeira Página';
    this.paginator._intl.lastPageLabel = 'Última Página';
    this.paginator._intl.getRangeLabel = (
      pagina: number,
      quantidadeItens: number,
      quantidadePaginas: number
    ) => {
      if (quantidadePaginas === 0 || quantidadeItens === 0) {
        return `0 de ${quantidadePaginas}`;
      }
      quantidadePaginas = Math.max(quantidadePaginas, 0);
      const indiceInicial = pagina * quantidadeItens;
      const indiceFinal =
        indiceInicial < quantidadePaginas
          ? Math.min(indiceInicial + quantidadeItens, quantidadePaginas)
          : indiceInicial + quantidadeItens;
      return `${indiceInicial + 1} - ${indiceFinal} de ${quantidadePaginas}`;
    };
  }

  iniciarNovoCadastro() {
    console.log('iniciarNovoCadastro');
    const modalCadastro = this.modal.open(ElementDialogComponent);
    modalCadastro.afterClosed().subscribe((valor) => {
      this.listarPessoas();
    });
  }

  iniciarEdicao(dadosFormulario: PessoaDadosCompletos) {
    const modalEdicao = this.modal.open(ElementDialogComponent, {
      data: this.converterPessoaParaCamposDoFormulario(dadosFormulario),
    });
    modalEdicao.afterClosed().subscribe((valor) => {
      this.listarPessoas();
    });
  }

  converterPessoaParaCamposDoFormulario(pessoa: PessoaDadosCompletos): any {
    console.log(pessoa);
    return {
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      rg: pessoa.rg,
      orgaoExpRg: pessoa.orgaoExpRg,
      dataNascimento: pessoa.dataNascimento,
      pai: pessoa.pai,
      mae: pessoa.mae,
      endereco: {
        complemento: pessoa.endereco.complemento,
        cep: pessoa.endereco.cep,
        numero: pessoa.endereco.numero,
        logradouro: pessoa.endereco.logradouro,
        bairro: pessoa.endereco.bairro,
        cidade: {
          id: pessoa.endereco.cidade.id
        },
        uf: pessoa.endereco.uf
      },
      contato: {
        telefones: [
          {
            numero: pessoa.telefone,
            tipo: 'Celular',
            principal: true
          }
        ],
        emails: [
          {
            email: pessoa.email,
            principal: true
          }
        ]
      }
    };
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listarPessoas() {
    this.pessoaService.listarPessoas().subscribe({
      next: (resposta) => {
        this.dataSource = new MatTableDataSource(resposta);
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  excluirPessoas(id: string) {
    this.pessoaService
      .excluirPessoa(id)
      .subscribe((valor) =>
        this.atualizarTabela('Pessoa Removida com Sucesso!')
      );
    this.listarPessoas();
  }

  atualizarTabela(mensagem: string) {
    alert(`${mensagem}`);
    this.listarPessoas();
  }
}
