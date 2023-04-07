import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CidadeController } from './controllers/cidade.controller';
import { CidadeService } from './services/cidade.service';
import { EnderecoService } from './services/endereco.service';
import { ContatoService } from './services/contato.service';
import { EntityExist } from '../../helpers/validators/entity-exist';
import { baseProvider } from './services/base.provider';
import { EstadoController } from './controllers/estado.controller';
import { EstadoService } from './services/estado.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    EstadoController,
    CidadeController,
  ],
  providers: [
    ...baseProvider,
    ContatoService,
    EnderecoService,
    EstadoService,
    CidadeService,
    EntityExist,
  ],
  exports: [ ContatoService ,EnderecoService],
})
export class BaseModule {}
