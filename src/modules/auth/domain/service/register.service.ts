import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { SearchUserCommand } from '@user/application/use-case/search-user/search-user.command';
import { compare } from 'bcrypt';
import {
  UserDto,
  CreateUserService,
  UserIdentification,
} from '@user/shared';
import User from '@user/domain/entities/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly createUserService: CreateUserService,
  ) {}

  async signup(user: UserDto): Promise<User> {
    return await this.createUserService.handle(user);
  }

  async validateUser(credentials: UserIdentification): Promise<User> {
    const user: User = await this.commandBus.execute(
      new SearchUserCommand(credentials),
    );
    if (await compare(credentials.password, user.password)) return user;
    throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
  }
}
