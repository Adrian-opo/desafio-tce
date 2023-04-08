import { Pessoa } from './pessoa.entity';
import { Endereco } from '../../base/entities/endereco.entity';
import { Contato } from '../../base/entities/contato.entity';

describe('Pessoa Entity', () => {
  let pessoa: Pessoa;
  let endereco: Endereco;
  let contato: Contato;

  beforeEach(() => {
    pessoa = new Pessoa();
    pessoa.id = 'abc123';
    pessoa.nome = 'John Doe';
    pessoa.cpf = '123.456.789-00';
    pessoa.rg = '12345678';
    pessoa.orgaoExpRg = 'SSP/SP';
    pessoa.dataNascimento = '1990-01-01';
    pessoa.pai = 'John Sr.';
    pessoa.mae = 'Jane Doe';

    endereco = new Endereco();
    endereco.id = 'def456';
    endereco.logradouro = 'Rua A';
    endereco.numero = 123;
    endereco.complemento = 'Apto 1';
    endereco.bairro = 'Centro';
    endereco.cidade =  { id: 123, nome: 'São Paulo' , estado : { id: 1, nome: 'São Paulo', uf: 'SP' } };
    endereco.cep = '01000-000';

    contato = new Contato();
    contato.id = 'ghi789';
 


    pessoa.enderecos = [endereco];
    pessoa.contato = contato;
  });

  it('should have all properties set correctly', () => {
    expect(pessoa.id).toEqual('abc123');
    expect(pessoa.nome).toEqual('John Doe');
    expect(pessoa.cpf).toEqual('123.456.789-00');
    expect(pessoa.rg).toEqual('12345678');
    expect(pessoa.orgaoExpRg).toEqual('SSP/SP');
    expect(pessoa.dataNascimento).toEqual('1990-01-01');
    expect(pessoa.pai).toEqual('John Sr.');
    expect(pessoa.mae).toEqual('Jane Doe');
    expect(pessoa.enderecos).toContain(endereco);
    expect(pessoa.contato).toEqual(contato);
  });

  it('should add an Endereco to the enderecos array', () => {
    const newEndereco = new Endereco();
    newEndereco.id = 'jkl012';
    newEndereco.logradouro = 'Rua B';
    newEndereco.numero = 456;
    newEndereco.bairro = 'Jardim';
    newEndereco.cidade =  { id: 123, nome: 'São Paulo' , estado : { id: 1, nome: 'São Paulo', uf: 'SP' } };

    newEndereco.cep = '02000-000';

    pessoa.enderecos?.push(newEndereco);

    expect(pessoa.enderecos).toContain(newEndereco);
    expect(pessoa.enderecos).toHaveLength(2);
  });

  it('should remove an Endereco from the enderecos array', () => {
    pessoa.enderecos?.pop();

    expect(pessoa.enderecos).not.toContain(endereco);
    expect(pessoa.enderecos).toHaveLength(0);
  });

  it('should update the Contato property', () => {
    const newContato = new Contato();
    newContato.id = 'mno345';
 

    pessoa.contato = newContato;

    expect(pessoa.contato).toEqual(newContato);
  });
});
