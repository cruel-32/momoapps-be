import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 3333;
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`server is running at http://localhost:${port}`);
}
bootstrap();
