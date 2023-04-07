import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from '../entities/pessoa.entity';
import { PessoaDto } from '../dto/pessoa.dto';
import { EnderecoService } from '../../base/services/endereco.service';
import { ContatoService } from '../../base/services/contato.service';
import { PessoaUpdateDto } from '../dto/pessoa-update.dto';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private repository: Repository<Pessoa>,
    private readonly enderecoService: EnderecoService,
    private readonly contatoService: ContatoService,
  ) {}

  async findOne(id: string): Promise<Pessoa> {
    const entity = await this.repository.findOne({
      where: { id },
      relations: { enderecos: true, contato: true },
      order: { enderecos: { createdAt: 'DESC' } },
    });

    if (!entity) {
      throw new NotFoundException(`Pessoa not found`);
    }

    return entity;
  }
  findAll(): Promise<Pessoa[]> {
    return this.repository.find();
  }


  async create(data: PessoaDto): Promise<Pessoa> {
    const endereco = await this.enderecoService.createOrUpdate(data);
    const contato = await this.contatoService.createOrUpdate(data);

    delete data.endereco;
    delete data.contato;

    return this.repository.save({
      ...data,
      contato: contato,
      enderecos: [endereco],
    });
  }

  async update(id: string, data: PessoaUpdateDto) {
    // eslint-disable-next-line prefer-const
    let { enderecos, contato, ...pessoa } = await this.findOne(id);

    const entity = await this.repository.preload({
      id: pessoa.id,
      ...data,
      updatedAt: new Date(),
    });
   
    if (enderecos !== null) {
      enderecos.push(
        await this.enderecoService.createOrUpdate(data, enderecos[0].id),
      );

      entity.enderecos = enderecos;
    }

    if (data.contato !== undefined && data.contato !== null)
      entity.contato = await this.contatoService.createOrUpdate(
        data,
        contato.id,
      );

    return this.repository.save(entity);
  }

  remove(id: number) {
    return `This action removes a #${id} pessoa`;
  }
}
