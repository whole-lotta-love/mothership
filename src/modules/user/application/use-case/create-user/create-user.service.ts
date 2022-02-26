import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserDto } from '@user/shared';
import CreateUserCommand from './create-user.command';
import User from '@user/domain/entities/user.entity';

@Injectable()
export class CreateUserService {
  constructor(private readonly commandBus: CommandBus) {}

  async handle(body: UserDto): Promise<User> {
    return this.commandBus.execute(
      new CreateUserCommand(
        body.email,
        body.name,
        body.username,
        body.password,
      ),
    );
  }
}
