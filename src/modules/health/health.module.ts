import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthHttpController } from './health.controller';

const httpControllers = [HealthHttpController];

@Module({
  controllers: [...httpControllers],
  imports: [TerminusModule],
})
export class HealthModule {}
