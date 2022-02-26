import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../../domain/service/register.service';
import { UserCredentials } from '../../shared';
import { UserDto } from '@user/shared';

@Controller('auth')
export class UserAuthController {
  constructor(private readonly register: RegisterService) {}

  @Post('signup')
  signup(@Body() body: UserDto) {
    return this.register.signup(body);
  }

  @Post('login')
  signin(@Body() body: UserCredentials) {
    return this.register.validateUser(body);
  }
}
