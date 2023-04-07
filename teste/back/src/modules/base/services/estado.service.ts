import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Estado } from '../entities/estado.entity';

@Injectable()
export class EstadoService {
  constructor(
    @Inject('ESTADO_REPOSITORY')
    private repository: Repository<Estado>,
  ) {}

  findAll(): Promise<Estado[]> {
    return this.repository.find();
  }
}
