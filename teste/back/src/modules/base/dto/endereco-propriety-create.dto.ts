import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContatoDto } from './contato.dto';
import { EnderecoDto } from './endereco.dto';

export class EnderecoProprietyCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco: EnderecoDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ContatoDto)
  contato: ContatoDto;
}
