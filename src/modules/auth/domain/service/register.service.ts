import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import {
  UserDto,
  CreateUserService,
  UserIdentification,
  UserStructure,
  SearchUserService,
} from '@user/shared';

@Injectable()
export class RegisterService {
  constructor(
    private readonly createUser: CreateUserService,
    private readonly searchUser: SearchUserService,
  ) {}

  async signup(user: UserDto): Promise<UserStructure> {
    return await this.createUser.handle(user);
  }

  async validateUser(credentials: UserIdentification): Promise<UserStructure> {
    const user: UserStructure = await this.searchUser.handler(credentials);

    if (await compare(credentials.password, user.password)) return user;
    throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
  }
}
