import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchUserCommand } from '@user/application/use-case/search-user/search-user.command';
import User from '../entities/user.entity';

@Injectable()
export class FindUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async handler({ email, username }: SearchUserCommand): Promise<User> {
    if (email) return await this.userRepository.findOne({ where: { email } });
    return await this.userRepository.findOne({ where: { username } });
  }
}
