import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { config } from 'dotenv';
import * as path from 'path';

const envPath = path.join(__dirname, '../config/env');
config({
  path: path.join(`${envPath}/.${process.env.NODE_ENV}.env`),
});

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  autoLoadEntities: true,
  logging: true,
  synchronize: process.env.NODE_ENV === 'development',
};

export const EmailConfig = registerAs('email', () => ({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASSWORD,
  },
  baseUrl: process.env.EMAIL_BASE_URL,
  host: process.env.EMAIL_HOST,
}));

export const AuthConfig = registerAs('auth', () => ({
  secret: process.env.SECRET,
}));

export const validationSchema = Joi.object({
  EMAIL_SERVICE: Joi.string().required(),
  EMAIL_AUTH_USER: Joi.string().required(),
  EMAIL_AUTH_PASSWORD: Joi.string().required(),
  EMAIL_BASE_URL: Joi.string().required().uri(),
});
