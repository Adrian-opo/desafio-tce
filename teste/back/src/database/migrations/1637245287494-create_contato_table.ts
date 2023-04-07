import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContatoTable1637245287496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'base_contato',
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
            name: 'telefones',
            type: 'varchar',
            isNullable: true,
            default: '"[]"',
          },
          {
            name: 'emails',
            type: 'varchar',
            isNullable: true,
            default: '"[]"',
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
    await queryRunner.dropTable('base_contato');
  }
}
