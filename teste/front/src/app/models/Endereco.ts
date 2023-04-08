import { Cidade } from "./Cidade";

export interface Endereco {
  cep: string;
  numero: GLfloat;
  logradouro: string;
  bairro: string;
  uf: string;
  complemento: string;
  cidade: Cidade;
 
}
