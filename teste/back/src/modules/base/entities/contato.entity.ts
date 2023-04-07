import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsPhoneNumber } from 'class-validator';
import { Telefones, Emails } from './enums/contato.enum';

@Entity('base_contato')
export class Contato {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('json')
  telefones!: Telefones[];

  @Column('json')
  emails: Emails[];
}
