import { Contato } from './Contato';
import { Endereco } from './Endereco';
export interface PessoaRequisicao {
  nome: string;
  dataNascimento: string;
  rg: string;
  orgaoExpRg: string;
  pai: string;
  mae: string;
  cpf: string;
  endereco: Endereco;
  contato: Contato;
}
