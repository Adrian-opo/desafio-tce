import { PartialType } from '@nestjs/swagger';
import { EnderecoDto } from './endereco.dto';

export class UpdateEnderecoDto extends PartialType(EnderecoDto) {}
