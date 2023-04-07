import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Endereco } from '../../base/entities/endereco.entity';
import { Contato } from '../../base/entities/contato.entity';

@Entity('pessoa')
export class Pessoa {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nome!: string;

  @Column()
  cpf!: string;
 

  @Column()
  rg!: string;

  @Column()
  orgaoExpRg!: string;

  @Column({ type: 'date' })
  dataNascimento!: string;

  @Column()
  pai!: string;

  @Column()
  mae!: string;

  @ManyToMany(() => Endereco, { cascade: ['remove'] })
  @JoinTable({
    name: 'pessoa_endereco',
    joinColumn: { name: 'pessoa_id', referencedColumnName: 'id' },
    inverseJoinColumn: {
      name: 'endereco_id',
      referencedColumnName: 'id',
    },
  })
  enderecos?: Endereco[];

  @OneToOne(() => Contato)
  @JoinColumn({ name: 'contato_id', referencedColumnName: 'id' })
  contato?: Contato;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
