import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePessoasTable1635986119363 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoa',
        columns: [
          {
            name: 'id',
            type: 'char',
            isUnique: true,
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'uuid',
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '14',
            isNullable: true,
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'orgao_exp_rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_nascimento',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'pai',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'mae',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'NOW()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pessoa');
  }
}
