import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/shared';
import { RegisterService } from '../../domain/service/register.service';
import { UserCredentials } from '../../shared';

@Controller('auth')
export class UserAuthController {
  constructor(private readonly register: RegisterService) {}

  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    return this.register.signup(body);
  }

  @Post('login')
  signin(@Body() body: UserCredentials) {
    return this.register.validateUser(body);
  }
}
