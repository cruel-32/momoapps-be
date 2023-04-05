import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';

const envPath = path.join(__dirname, '../config/env');
config({
  path: path.join(`${envPath}/.${process.env.NODE_ENV}.env`),
});

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  synchronize: false,
  migrationsRun: false,
  migrations: [path.join(__dirname, '../**/migrations/*.js')],
  migrationsTableName: 'migrations',
  entities: [path.join(__dirname, '/**/*.entity{.ts, .js}')],
});
