import {
  createMap,
  forMember,
  mapFrom,
  MappingProfile,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable, Logger } from '@nestjs/common';
import { UserDto } from '../../../modules/api-mapper/auto_mapper_dto';
import {
  UserEntity,
  AddressEntity,
} from '../../../modules/api-mapper/entities/auto_mapper_entity';
import { AddressDto } from '../../../modules/api-mapper/auto_mapper_dto/address.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  private readonly logger = new Logger(UserProfile.name);

  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
        UserDto,
        UserEntity,
        forMember(
          (destination) => destination.fullname,
          mapFrom((source) =>
            source.firstName.concat(' ').concat(source.lastName, ''),
          ),
        ),
      );
      createMap(
        mapper,
        AddressDto,
        AddressEntity,
        forMember(
          (destination) => destination.postalCode_state,
          mapFrom((source) =>
            source.postalCode.concat(' ').concat(source.state, ''),
          ),
        ),
        forMember(
          (destination) => destination.city,
          mapFrom((source) => source.city),
        ),
        forMember(
          (destination) => destination.address,
          mapFrom((source) => source.address),
        ),
      );
    };
  }
}
