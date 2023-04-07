import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Estado } from './estado.entity';

@Entity('cidade')
export class Cidade {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @ManyToOne(() => Estado, { eager: true })
  @JoinColumn({ name: 'estado_id', referencedColumnName: 'id' })
  estado!: Estado;
}
