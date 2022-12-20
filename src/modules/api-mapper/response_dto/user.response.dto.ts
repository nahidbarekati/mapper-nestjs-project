import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { AddressResponseDto } from './address.response.dto';

export class UserResponseDto {
  @ApiProperty({
    example: 1,
    description: 'id of user',
  })
  @AutoMap()
  readonly id: number;

  @ApiProperty({
    example: 'nahid',
    description: 'name of user',
  })
  readonly fullname: string;

  @ApiProperty({
    example: 'koa@gmail',
    description: 'email of user',
  })
  readonly email: string;

  @ApiProperty({
    description: 'address of user',
  })
  address: AddressResponseDto;

  @ApiProperty({
    example: '+12540025',
    description: 'phone of user',
  })
  phone: string;

  @ApiProperty({
    example: 26,
    description: 'age of user',
  })
  age: number;

  @ApiProperty({
    example: 'male',
    description: 'gender of user',
  })
  gender: string;
}
