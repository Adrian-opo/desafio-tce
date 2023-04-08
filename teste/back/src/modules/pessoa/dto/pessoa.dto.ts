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
  public formatarCpf() {
    if(this.cpf)
    {
      this.cpf = this.cpf.replace(/[^\d]/g, '');
    }
  }

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rg: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pai : string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mae : string;

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
  @ValidateNested()
  @Type(() => EnderecoDto)
  endereco: EnderecoDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ContatoDto)
  contato: ContatoDto;
}
