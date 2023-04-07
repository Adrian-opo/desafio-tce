import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Telefones, Emails } from '../entities/enums/contato.enum';

export class ContatoDto {
  id: string;

  @ApiPropertyOptional()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Telefones)
  telefones!: Telefones[];

  @ApiPropertyOptional()
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Emails)
  emails!: Emails[];
}
