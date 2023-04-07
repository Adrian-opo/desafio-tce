import { Controller, Get } from '@nestjs/common';
import { EstadoService } from '../services/estado.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Base')
@Controller('base/estados')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Get()
  findAll() {
    return this.estadoService.findAll();
  }
}
