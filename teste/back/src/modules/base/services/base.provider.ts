import { DataSource } from 'typeorm';
import { Estado } from '../../base/entities/estado.entity';
import { Cidade } from '../../base/entities/cidade.entity';
import { Endereco } from '../../base/entities/endereco.entity';
import { Contato } from '../../base/entities/contato.entity';

export const baseProvider = [
  {
    provide: 'ESTADO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Estado),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CIDADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cidade),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Endereco),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CONTATO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Contato),
    inject: ['DATA_SOURCE'],
  },
  
];
