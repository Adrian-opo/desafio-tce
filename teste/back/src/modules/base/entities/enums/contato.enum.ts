import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

enum TipoContato {
  Casa = 'Casa',
  Trabalho = 'Trabalho',
  Celular = 'Celular',
}

export class Telefones {
  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  numero: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TipoContato, { each: true })
  tipo: TipoContato[];

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  principal: boolean;
}

export class Emails {
  @ApiProperty({
    isArray: true,
    example: ['eu@teste.com.br', 'eu@teste.com.br'],
  })
  @IsNotEmpty()
  @IsEmail({}, { each: true })
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  principal: boolean;
}
