import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EstadoService } from '../services/estado.service';

@ApiTags('Base')
@Controller('base/estados')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Get()
  findAll() {
    return this.estadoService.findAll();
  }
}
