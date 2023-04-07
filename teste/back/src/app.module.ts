import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BaseModule } from './modules/base/base.module';
import { PessoaModule } from './modules/pessoa/pessoa.module';

@Module({
  imports: [BaseModule, PessoaModule ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
