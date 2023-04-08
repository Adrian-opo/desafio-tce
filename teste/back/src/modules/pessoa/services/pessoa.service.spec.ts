import { Pessoa } from '../entities/pessoa.entity';
import { Endereco } from '../../base/entities/endereco.entity';
import { Contato } from '../../base/entities/contato.entity';

describe('Pessoa entity', () => {
  it('should be defined', () => {
    expect(new Pessoa()).toBeDefined();
  });

  it('should have all required properties', () => {
    const pessoa = new Pessoa();
    pessoa.nome = 'João';
    pessoa.cpf = '111.111.111-11';
    pessoa.rg = '123456789';
    pessoa.orgaoExpRg = 'SSP';
    pessoa.dataNascimento = '2000-01-01';
    pessoa.pai = 'José';
    pessoa.mae = 'Maria';
    pessoa.enderecos = [new Endereco()];
    pessoa.contato = new Contato();
    pessoa.createdAt = new Date();
    pessoa.updatedAt = new Date();

    expect(pessoa.nome).toBeDefined();
    expect(pessoa.cpf).toBeDefined();
    expect(pessoa.rg).toBeDefined();
    expect(pessoa.orgaoExpRg).toBeDefined();
    expect(pessoa.dataNascimento).toBeDefined();
    expect(pessoa.pai).toBeDefined();
    expect(pessoa.mae).toBeDefined();
    expect(pessoa.enderecos).toBeDefined();
    expect(pessoa.contato).toBeDefined();
    expect(pessoa.createdAt).toBeDefined();
    expect(pessoa.updatedAt).toBeDefined();
  });
});
