import { DataSource } from 'typeorm';
import { Pessoa } from '../pessoa/entities/pessoa.entity';


export const pessoaProvider = [
  {
    provide: 'PESSOA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pessoa),
    inject: ['DATA_SOURCE'],
  },

];
