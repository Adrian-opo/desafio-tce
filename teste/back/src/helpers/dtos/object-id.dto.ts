import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ObjectIDDto {
  @ApiProperty({
    example: 10,
  })
  @IsInt()
  id: number;
}
