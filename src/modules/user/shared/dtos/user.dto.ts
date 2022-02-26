import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export type UserStructure = {
  email: string;
  username: string;
  name: string;
  password: string;
};


export class UserDto implements UserStructure {
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
