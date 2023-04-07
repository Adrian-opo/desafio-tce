import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createPessoaEnderecoTable1674422189387
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoa_endereco',
        columns: [
          {
            name: 'id',
            type: 'int',
            isUnique: true,
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'increment',
          },
          {
            name: 'pessoa_id',
            type: 'char',
            length: '36',
            isNullable: false,
          },
          {
            name: 'endereco_id',
            type: 'char',
            length: '36',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['pessoa_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pessoa',
          },
          {
            columnNames: ['endereco_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'base_endereco',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pessoa_endereco');
  }
}
