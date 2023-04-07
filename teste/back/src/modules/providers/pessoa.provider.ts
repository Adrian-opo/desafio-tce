import { DataSource } from 'typeorm';
import { Pessoa } from '../pessoa/entities/pessoa.entity';
import { Estado } from '../base/entities/estado.entity';
import { Cidade } from '../base/entities/cidade.entity';
import { Endereco } from '../base/entities/endereco.entity';
import { Contato } from '../base/entities/contato.entity';


export const pessoaProvider = [
  {
    provide: 'PESSOA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pessoa),
    inject: ['DATA_SOURCE'],
  },


];
