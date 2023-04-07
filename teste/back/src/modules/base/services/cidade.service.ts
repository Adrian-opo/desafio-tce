import { Repository } from 'typeorm';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cidade } from '../entities/cidade.entity';
import { CidadeDto } from '../dto/cidade.dto';

@Injectable()
export class CidadeService {
  constructor(
    @Inject('CIDADE_REPOSITORY')
    private repository: Repository<Cidade>,
  ) {}

  async findOne(data: CidadeDto): Promise<Cidade> {
    const cidade = await this.repository.findOneBy(data);

    if (!cidade) {
      throw new NotFoundException(`Cidade ${data.id} not found`);
    }

    return cidade;
  }

  async findByUf(uf: string): Promise<Cidade[]> {
    return this.repository.find({
      where: {
        estado: { uf: uf },
      },
      relations: ['estado'],
    });
  }
}
