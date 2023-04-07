import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length,
  Min,
  Validate,
  ValidateNested,
  Matches,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Cidade } from '../entities/cidade.entity';
import { EntityExist } from '../../../helpers/validators/entity-exist';
import { CidadeDto } from './cidade.dto';
import { ObjectIDDto } from '../../../helpers/dtos/object-id.dto';
import { Type } from 'class-transformer';

// import { IsCEP } from 'brazilian-class-validator';

export class EnderecoDto {
  @ApiProperty({
    minLength: 3,
  })
  @IsNotEmpty()
  @IsString()
  @Length(3)
  logradouro: string;

  @ApiProperty({
    minimum: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  numero: number;

  @ApiProperty({
    minLength: 3,
  })
  @IsNotEmpty()
  @IsString()
  @Length(3)
  bairro: string;

  @ApiPropertyOptional({
    minLength: 3,
  })
  @IsOptional()
  @IsString()
  @Length(3)
  complemento: string;

  @ApiPropertyOptional({
    minLength: 3,
  })
  @IsOptional()
  @IsString()
  @Length(3)
  pontoReferencia: string;

  @ApiProperty({
    minLength: 9,
    maxLength: 9,
  })
  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  @Matches(RegExp('^[0-9]{5}[-][0-9]{3}$'), {
    message: 'CEP com formato inválido. Formato válido: 99999-999',
  })
  cep: string;


  @ApiProperty({ type: ObjectIDDto })
  @Validate(EntityExist, [Cidade, 'id', 'id'])
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => ObjectIDDto)
  cidade: CidadeDto;

  @ApiPropertyOptional({
    nullable: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  novo?: boolean;
}
