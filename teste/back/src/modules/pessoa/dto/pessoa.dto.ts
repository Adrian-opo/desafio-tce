import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
  MaxDate,
  Validate,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { EnderecoDto } from '../../base/dto/endereco.dto';
import { ContatoDto } from '../../base/dto/contato.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Unique } from '../../../helpers/validators/unique';
import { Pessoa } from '../entities/pessoa.entity';
import { Nacionalidade, Raca, Sexo } from '../entities/enums/pessoa.enum';
import { IsCPF } from 'src/helpers/validators/cpf-cnpj.validator';

export class PessoaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5)
  nome: string;

  @ApiProperty()
  @IsCPF()
  @Validate(Unique, [Pessoa])
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(7)
  rg: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(3)
  orgaoExpRg: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @MaxDate(new Date())
  @Transform(({ value }) => new Date(value))
  dataNascimento: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Sexo)
  sexo: Sexo;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Raca)
  raca: Raca;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Nacionalidade)
  nacionalidade: Nacionalidade;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1)
  paisNascimento: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  @Transform(({ value }) => value.toUpperCase())
  ufNascimento: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5)
  @Transform(({ value }) => value.charAt(0).toUpperCase() + value.slice(1))
  municipioNascimento: string;

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
