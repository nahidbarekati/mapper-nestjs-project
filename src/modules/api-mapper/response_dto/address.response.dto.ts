import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class AddressResponseDto {
  @AutoMap()
  @ApiProperty({
    example: '21.JK CD',
    description: 'postalCode_state of address',
  })
  postalCode_state: string;

  @ApiProperty({
    example: 'tehran',
    description: 'city of address',
  })
  city: string;

  @ApiProperty({
    example: '92998-3874',
    description: 'address of address',
  })
  address: string;
}

export class AddressResponsesDto {
  @ApiProperty({
    description: 'set address info',
  })
  address: AddressResponseDto;
}
