import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiProperty,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { PessoaUpdateDto } from '../dto/pessoa-update.dto';
import { PessoaDto } from '../dto/pessoa.dto';
import { PessoaService } from '../services/pessoa.service';

@ApiTags('Responsável')
@Controller('pessoa')
export class PessoaController {
  constructor(private readonly service: PessoaService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get()
  @ApiOkResponse({
    description: 'Retorna uma lista de pessoas',
    schema: {
      allOf: [
        {
          type: 'array',
          items: { $ref: getSchemaPath(PessoaDto) },
        },
      ],
    },
  })
  findAll() {
    return this.service.findAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Registro criado com sucesso',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiBadRequestResponse({
    description: 'Erros no envio do conteúdo',
    type: () => DefaultException,
  })
  create(@Body() data: PessoaDto) {
    data.cpf = data.cpf.replace(/[^\d]/g, '');
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: PessoaUpdateDto) {
    if(data.cpf)
    {
      data.cpf = data.cpf.replace(/[^\d]/g, '');
    }
   
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

}

export class DefaultException {
  @ApiProperty({ required: true, type: Number, default: 400 })
  statusCode: HttpStatus.BAD_REQUEST;
  @ApiProperty()
  message: [];
  @ApiProperty()
  error: string;
}
