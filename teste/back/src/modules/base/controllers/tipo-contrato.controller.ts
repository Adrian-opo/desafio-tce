import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TipoContratoService } from '../services/tipo-contrato.service';

@ApiTags('Base')
@Controller('base/tipo-contrato')
export class TipoContratoController {
  constructor(private readonly tipoContratoService: TipoContratoService) {}

  @Get()
  findAll() {
    return this.tipoContratoService.findAll();
  }
}
