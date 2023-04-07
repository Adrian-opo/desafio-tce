import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Contato } from '../entities/contato.entity';
import { ContatoDto } from '../dto/contato.dto';

@Injectable()
export class ContatoService {
  constructor(
    @Inject('CONTATO_REPOSITORY')
    private repository: Repository<Contato>,
  ) {}

  async createOrUpdate(data: any, id?: string): Promise<Contato> | null {
    let _data = this.checkPropriety(data);

    if (_data === null) return null;

    if (id !== undefined)
      _data = await this.repository.preload({
        id: id,
        ..._data,
      });

    return this.repository.save(_data);
  }

  private checkPropriety(data: any): ContatoDto | null {
    if (data.contato !== undefined) return data.contato;

    return null;
  }
}
