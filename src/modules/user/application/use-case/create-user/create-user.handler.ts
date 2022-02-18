import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InputUserService } from 'src/modules/user/domain/services/inputUser.service';
import CreateUserCommand from './create-user.command';
import User from 'src/modules/user/domain/entities/user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserHandle implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly inputUser: InputUserService) {}

  async execute(command: CreateUserCommand): Promise<User> {
    const user = await this.inputUser.createUser(command);
    return user;
  }
}
