import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserStruture } from '../../domain/entities/user.entity';

export class CreateUserDto implements UserStruture {
  @IsEmail()
  @MaxLength(244)
  email: string;

  @IsString()
  @MaxLength(44)
  @MinLength(4)
  name: string;

  @IsString()
  @MaxLength(44)
  @MinLength(4)
  username: string;

  @IsString()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, {
    message: 'password to weak',
  })
  password: string;
}
