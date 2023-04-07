import { Endereco } from '../entities/endereco.entity';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EnderecoDto } from '../dto/endereco.dto';
import { UpdateEnderecoDto } from '../dto/update-endereco.dto';
import { Validator } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private repository: Repository<Endereco>,
  ) {}

  async createOrUpdate(data: any, id?: string): Promise<Endereco> | null {
    const _data = this.checkPropriety(data);

    if (_data === null) return null;

    // eslint-disable-next-line prefer-const
    let { novo, ...endereco } = _data;

    if (!novo && typeof id !== 'undefined' && id !== null)
      endereco = await this.repository.preload({
        id: id,
        ...endereco,
      });

    endereco = await this.isValid(endereco);

    return await this.repository.save(endereco);
  }

  private async isValid(
    data: EnderecoDto | UpdateEnderecoDto,
  ): Promise<EnderecoDto> {
    const entity = plainToClass(EnderecoDto, data);

    const validator = new Validator();
    const errors = await validator.validate(entity, {
      validationError: {
        target: false,
        value: false,
      },
    });

    if (errors.length !== 0) throw new BadRequestException(errors);

    return entity;
  }

  private checkPropriety(data: any): EnderecoDto | UpdateEnderecoDto | null {
    if (data.endereco !== undefined) return data.endereco;

    return null;
  }
}
