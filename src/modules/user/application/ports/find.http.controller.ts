import { Body, Controller, Post } from '@nestjs/common';
import { SearchUserService } from '../use-case/search-user/search-user.service';
import { UserIdentification } from '@user/shared/dtos';

@Controller('users')
export class FindUserController {
  constructor(private readonly searchUser: SearchUserService) {}

  @Post()
  findUser(@Body() body: UserIdentification) {
    return this.searchUser.handler(body);
  }
}
