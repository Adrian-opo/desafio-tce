import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContatoDto } from './contato.dto';
import { UpdateEnderecoDto } from './update-endereco.dto';

export class EnderecoProprietyUpdateDto {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateEnderecoDto)
  endereco: UpdateEnderecoDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ContatoDto)
  contato: ContatoDto;
}
