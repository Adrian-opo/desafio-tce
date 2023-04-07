import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BaseTipoContratoDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  descricao: string;
}
