import { AutoMap } from '@automapper/classes';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Geo {
  lat: string;
  lng: string;
}

export class AddressEntity {
  // @AutoMap()
  // street: string;
  @AutoMap()
  postalCode_state: string;

  @AutoMap()
  city: string;

  @AutoMap()
  address: string;
}

@Entity('Users')
export class UserEntity extends BaseEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @AutoMap()
  fullname: string;

  @Column()
  @AutoMap()
  email: string;

  @AutoMap(() => AddressEntity)
  @Column({ type: 'json' })
  address: { postalCode_state: string; city: string; address: string };

  @Column()
  @AutoMap()
  phone: string;

  @Column()
  @AutoMap()
  gender: string;

  @Column()
  @AutoMap()
  age: number;
}
