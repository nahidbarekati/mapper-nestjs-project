import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAM || 'admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_DATABASE || 'assesment',
  ssl: process.env.DB_SSL || false,
  // Only enable this option if your application is in development,
  // otherwise use TypeORM migrations to sync entity schemas:
  // https://typeorm.io/#/migrations
  synchronize: process.env.DB_SYNCHRONIZE || true,
  autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES || true,
  connectTimeoutMS: process.env.DB_CONNECTION_TIMEOUT_MS || 4000,
}));
