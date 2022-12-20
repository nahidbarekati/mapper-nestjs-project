import { AutoMap } from '@automapper/classes';
import { AddressDto } from './address.dto';

export class UserDto {
  @AutoMap()
  id: number;

  firstName: string;

  lastName: string;

  @AutoMap()
  username: string;

  @AutoMap()
  age: number;

  @AutoMap()
  email: string;

  @AutoMap()
  address: AddressDto;

  @AutoMap()
  phone: string;

  @AutoMap()
  gender: string;
}
