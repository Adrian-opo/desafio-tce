import { PartialType } from '@nestjs/swagger';
import { ContatoDto } from './contato.dto';

export class UpdateContatoDto extends PartialType(ContatoDto) {}
