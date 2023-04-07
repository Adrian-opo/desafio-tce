import { Cidade } from "./Cidade";

export interface Endereco {
  cep: string;
  numero: string;
  logradouro: string;
  bairro: string;
  uf: string;
  complemento: string;
  cidade: Cidade;
 
}
