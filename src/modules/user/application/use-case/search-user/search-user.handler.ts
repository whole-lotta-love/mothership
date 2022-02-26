import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FindUserService } from '@user/domain/services/find-user.service';
import { SearchUserCommand } from './search-user.command';
import User from '@user/domain/entities/user.entity';

@CommandHandler(SearchUserCommand)
export class SearchUserHandler implements ICommandHandler<SearchUserCommand> {
  constructor(private readonly findUserService: FindUserService) {}

  execute(command: SearchUserCommand): Promise<User> {
    return this.findUserService.handler(command);
  }
}
