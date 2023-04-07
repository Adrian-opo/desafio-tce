import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CidadeDto {
  @ApiProperty()
  @IsInt()
  id: number;
}
