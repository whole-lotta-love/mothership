import { CreateUserDto } from 'src/modules/user/shared';

export default class CreateUserCommand implements CreateUserDto {
  constructor(
    readonly email: string,
    readonly name: string,
    readonly username: string,
    readonly password: string,
  ) {}
}
