import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { SearchUserCommand } from './search-user.command';
import { CommandBus } from '@nestjs/cqrs';
import { UserIdentification } from '@user/shared/dtos/';
import User from '@user/domain/entities/user.entity';

@Injectable()
export class SearchUserService {
  constructor(private readonly commandBus: CommandBus) {}

  async handler(user: UserIdentification): Promise<User> {
    const found = await this.commandBus.execute(new SearchUserCommand(user));

    if (!found) {
      return null;
    }
    return found;
  }
}
