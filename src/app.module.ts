import { Module } from '@nestjs/common';
import { ApiMapperModule } from './modules/api-mapper/api-mapper.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
import database from './config/database.config';
import app from './config/app.config';
import rate from './config/rate.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './modules/health/health.module';
import { APP_GUARD } from '@nestjs/core';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app, database, rate],
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get('rate');
        return {
          ttl: config.rate_ttl,
          limit: config.rate_limit,
        };
      },
      inject: [ConfigService],
    }),
    ApiMapperModule,
    HealthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
