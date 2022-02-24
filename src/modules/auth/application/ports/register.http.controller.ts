import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/shared';
import { RegisterService } from '../../domain/service/register.service';

@Controller('auth')
export class RegisterController {
  constructor(private readonly register: RegisterService) {}

  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    return this.register.signup(body);
  }

  @Post('login')
  signin(@Body() body: { username: string; password: string }) {
    return this.register.validateUser(body.username, body.password);
  }
}
