import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import User from 'src/modules/user/domain/entities/user.entity';
import { FindUserService } from 'src/modules/user/domain/services/find-user.service';
import { SearchUserCommand } from './search-user.command';

@CommandHandler(SearchUserCommand)
export class SearchUserHandler implements ICommandHandler<SearchUserCommand> {
  constructor(private readonly findUserService: FindUserService) {}

  execute(command: SearchUserCommand): Promise<User> {
    return this.findUserService.handler(command);
  }
}
