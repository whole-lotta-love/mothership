import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserIdentification } from 'src/modules/user/shared';

export class UserCredentials implements UserIdentification {
  @IsEmail()
  email?: string;

  @IsString()
  username?: string;

  @IsNotEmpty()
  password: string;
}
