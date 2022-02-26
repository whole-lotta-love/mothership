import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  DuplicateEmail,
  DuplicateUsername,
} from '@user/infrastructure/errors/duplicate.exception';
import { UserDto } from '@user/shared';
import User from '../entities/user.entity';

@Injectable()
export class InputUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(input: UserDto): Promise<User> {
    const user = this.userRepository.create(input);
    /**
     * refactoring needed
     */
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      if (/email/.test(error['detail'])) {
        throw new DuplicateEmail();
      }
      if (/username/.test(error['detail'])) {
        throw new DuplicateUsername();
      }
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
