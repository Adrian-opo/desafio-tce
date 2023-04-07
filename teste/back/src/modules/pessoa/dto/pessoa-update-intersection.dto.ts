import { IntersectionType } from '@nestjs/swagger';
import { PessoaDto } from './pessoa.dto';
import { EnderecoProprietyUpdateDto } from '../../base/dto/endereco-propriety-update.dto';

export class PessoaUpdateIntersectionDto extends IntersectionType(
  PessoaDto,
  EnderecoProprietyUpdateDto,
) {}
