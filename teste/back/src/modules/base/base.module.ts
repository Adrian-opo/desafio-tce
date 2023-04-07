import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { baseProvider } from '../secretaria-municipal/services/base.provider';
import { EstadoService } from './services/estado.service';
import { EstadoController } from './controllers/estado.controller';
import { CidadeController } from './controllers/cidade.controller';
import { CidadeService } from './services/cidade.service';
import { EnderecoOpcaoController } from './controllers/endereco-opcao.controller';
import { EnderecoService } from './services/endereco.service';
import { ContatoService } from './services/contato.service';
import { EntityExist } from '../../helpers/validators/entity-exist';
import { TipoContratoService } from './services/tipo-contrato.service';
import { TipoContratoController } from './controllers/tipo-contrato.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    EstadoController,
    CidadeController,
    EnderecoOpcaoController,
    TipoContratoController,
  ],
  providers: [
    ...baseProvider,
    EstadoService,
    CidadeService,
    EnderecoService,
    ContatoService,
    EntityExist,
    TipoContratoService,
  ],
  exports: [EnderecoService, ContatoService],
})
export class BaseModule {}
