import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiMapperController } from './api-mapper.controller';
import { ApiMapperService } from './api-mapper.service';
import { UserEntity } from './entities/auto_mapper_entity';
import { UserProfile } from '../../common/mappings/auto_mapper_profiles/user.profile';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, UserEntity]),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    HttpModule,
  ],
  controllers: [ApiMapperController],
  providers: [ApiMapperService, UserRepository, UserProfile],
})
export class ApiMapperModule {}
