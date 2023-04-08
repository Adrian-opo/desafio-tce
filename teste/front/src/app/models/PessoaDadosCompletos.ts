import { Cidade } from './Cidade';
import { Contato } from './Contato';
import { Endereco } from './Endereco';
export interface PessoaDadosCompletos {
  id: string;
  nome: string;
  dataNascimento: string;
  rg: string;
  orgaoExpRg: string;
  pai: string;
  mae: string;
  cpf: string;
  estaAtivo: string;
  criadoEm: string;
  atualizadoEm: string;
  enderecos: [Endereco];
  contato: Contato;
  cidade: Cidade;
}
export interface PessoaId {
  id: number;
}
