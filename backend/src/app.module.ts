import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmConfig, EmailConfig, validationSchema } from './config';
import { CategoriesModule } from './modules/categories/categories.module';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/env/.${process.env.NODE_ENV}.env`],
      load: [EmailConfig],
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    CategoriesModule,
    UsersModule,
    PostsModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}
