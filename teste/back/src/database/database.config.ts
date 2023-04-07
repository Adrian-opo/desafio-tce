import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import 'dotenv/config';

//let rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';
//rootDir = 'src';

const DatabaseConfig = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  database: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
});

export default DatabaseConfig;
