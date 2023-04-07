import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BaseModule } from '../base/base.module';
import { pessoaProvider } from '../providers/pessoa.provider';
import { PessoaService } from './services/pessoa.service';
import { PessoaController } from './controllers/pessoa.controller';
import { ValidatorModule } from '../../helpers/validators/validator.module';


@Module({
  imports: [
    DatabaseModule,
    BaseModule,
    ValidatorModule,
    ,
  ],
  controllers: [
    PessoaController,
    ,
  ],
  providers: [
    ...pessoaProvider,
    PessoaService,
  ],
})
export class PessoaModule {}
