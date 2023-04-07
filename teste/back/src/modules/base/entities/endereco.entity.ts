import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cidade } from './cidade.entity';
import { Allow } from 'class-validator';
import { LocalizacaoDiferencia, Zona } from './enums/endereco.enum';

@Entity('base_endereco')
export class Endereco {
  @PrimaryGeneratedColumn('uuid')
  @Allow()
  id: string;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  pontoReferencia: string;

  @Column()
  cep: string;

  @Column({ type: 'enum', enum: LocalizacaoDiferencia })
  localizacaoDiferenciada: LocalizacaoDiferencia;

  @Column({ type: 'enum', enum: Zona })
  zona: Zona;

  @ManyToOne(() => Cidade, { eager: true })
  @JoinColumn({ name: 'cidade_id', referencedColumnName: 'id' })
  cidade: Cidade;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
