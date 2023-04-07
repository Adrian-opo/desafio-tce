import { Endereco } from './Endereco';
export interface PessoaDadosCompletos {
  nome: string;
  dataNascimento: string;
  rg: string;
  orgaoExpRg: string;
  pai: string;
  mae: string;
  email: string;
  telefone: string;
  cpf: string;
  estaAtivo: string;
  criadoEm: string;
  atualizadoEm: string;
  endereco: Endereco;
}
