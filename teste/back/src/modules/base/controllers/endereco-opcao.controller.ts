import { Controller, Get } from '@nestjs/common';
import { LocalizacaoDiferencia, Zona } from '../entities/enums/endereco.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Base')
@Controller('base/endereco-opcoes')
export class EnderecoOpcaoController {
  @Get()
  findAll() {
    return {
      zona: Object.values(Zona),
      localizacaoDiferenciada: Object.values(LocalizacaoDiferencia),
    };
  }
}
