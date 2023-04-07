export interface Contato {
  telefones: Telefone[];
  emails: Email[];
}

export interface Telefone {
  numero: string;
  tipo: string;
  principal: boolean;
}

export interface Email {
  email: string;
  principal: boolean;
}