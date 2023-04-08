import { Controller, Get, Param } from '@nestjs/common';
import { CidadeService } from '../services/cidade.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Base')
@Controller('base/cidades')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}


  @Get(':name')
  async getCityIdByName(@Param('name') name: string): Promise<number> {
    return this.cidadeService.getCityIdByName(name);
}
}