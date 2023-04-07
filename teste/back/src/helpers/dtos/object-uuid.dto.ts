import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ObjectUUIDDto {
  @ApiProperty({
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @IsString()
  id: string;
}
