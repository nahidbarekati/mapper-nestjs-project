import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/auto_mapper_entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  private readonly logger = new Logger(UserRepository.name);

  @InjectRepository(UserEntity)
  private userRepository: typeof UserEntity;

  public async findAll(): Promise<UserEntity[]> {
    return await this.find({});
  }

  public async findById(userId: any): Promise<UserEntity> {
    return await this.findOne(userId);
  }

  public async createResultMapped(userMapper): Promise<UserEntity> {
    const fullname = userMapper.fullname;
    const age = userMapper.age;
    const gender = userMapper.gender;
    const email = userMapper.email;
    const address = userMapper.address;
    const phone = userMapper.phone;
    const userSave = await this.userRepository.save({
      fullname,
      email,
      address,
      age,
      gender,
      phone,
    });
    return userSave;
  }
}
