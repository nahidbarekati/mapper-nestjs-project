import { Logger } from '@nestjs/common';
import { NestFactory, NestApplication } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import swaggerInit from './swagger';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  new Logger(bootstrap.name);

  app.use(helmet());
  
  // -- Cors setup
  app.enableCors();

  // Swagger
  await swaggerInit(app);

  // -- Start listening
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
