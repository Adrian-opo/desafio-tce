import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estado')
export class Estado {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  uf!: string;
}
