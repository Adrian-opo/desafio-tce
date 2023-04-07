import { Controller, Get, Inject } from '@nestjs/common';
import {
  Nacionalidade,
  Parentesco,
  Raca,
  Sexo,
  TransporteAquaviario,
} from '../entities/enums/pessoa.enum';
import { ApiTags } from '@nestjs/swagger';
import { CursoFormacao } from '../entities/curso-formacao.entity';
import { Repository } from 'typeorm';

@ApiTags('Pessoa')
@Controller('pessoa')
export class PessoaController {
  constructor(
    @Inject('CURSO_FORMACAO_REPOSITORY')
    private repository: Repository<CursoFormacao>,
  ) {}

  @Get('opcoes')
  findAllOpcoes() {
    return {
      sexo: Object.values(Sexo),
      raca: Object.values(Raca),
      nacionalidade: Object.values(Nacionalidade),
      parentesco: Object.values(Parentesco),
      transporteAquaviario: Object.values(TransporteAquaviario),
    };
  }

  @Get('cursos-formacao')
  findAllFormacoes() {
    return this.repository.find();
  }
}
