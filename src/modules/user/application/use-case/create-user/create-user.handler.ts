import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InputUserService } from 'src/modules/user/domain/services/inputUser.service';
import CreateUserCommand from './create-user.command';
import User from 'src/modules/user/domain/entities/user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserHandle implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly inputUser: InputUserService) {}

  execute(command: CreateUserCommand): Promise<User> {
    return this.inputUser.createUser(command);
  }
}
