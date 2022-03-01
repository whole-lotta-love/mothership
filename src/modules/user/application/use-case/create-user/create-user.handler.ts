import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InputUserService } from '@src/modules/user/domain/services/input-user.service';
import CreateUserCommand from './create-user.command';
import { SearchUserService } from '../search-user/search-user.service';
import {
  DuplicateEmailException,
  DuplicateUsernameException,
} from '@src/modules/user/infrastructure/errors/duplicate.exception';
import User from '@user/domain/entities/user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserHandle implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly searchUser: SearchUserService,
    private readonly inputUser: InputUserService,
  ) {}

  async execute(command: CreateUserCommand): Promise<User> {
    const emailFound = await this.searchUser.handler({ email: command.email });
    if (emailFound) {
      throw new DuplicateEmailException();
    } else if (await this.searchUser.handler({ username: command.username })) {
      throw new DuplicateUsernameException();
    }
    return this.inputUser.createUser(command);
  }
}
