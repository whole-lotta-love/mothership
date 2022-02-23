import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { SearchUserCommand } from 'src/modules/user/application/use-case/search-user/search-user.command';
import { compare } from 'bcrypt';
import { CreateUserDto, CreateUserService } from 'src/modules/user/shared';
import User from 'src/modules/user/domain/entities/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly createUserService: CreateUserService,
  ) {}

  async signup(user: CreateUserDto): Promise<User> {
    return await this.createUserService.handle(user);
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user: User = await this.commandBus.execute(
      new SearchUserCommand({ username }),
    );
    if (await compare(password, user.password)) return user;
    throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
  }
}
