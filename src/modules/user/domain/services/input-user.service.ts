import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '@user/shared';
import User from '../entities/user.entity';

@Injectable()
export class InputUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(input: UserDto): Promise<User> {
    const user = this.userRepository.create(input);

    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new HttpException('duplicate user', 409);
    }
  }

  async saveUser(user: User): Promise<void> {
    try {
      await this.userRepository.save(user);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
