import { Body, Controller, Post } from '@nestjs/common';
import { UserIdentification } from '../../shared/dtos/find-user.dto';
import { SearchUserService } from '../use-case/search-user/search-user.service';

@Controller('users')
export class FindUserController {
  constructor(private readonly searchUser: SearchUserService) {}

  @Post()
  findUser(@Body() body: UserIdentification) {
    return this.searchUser.handler(body);
  }
}
