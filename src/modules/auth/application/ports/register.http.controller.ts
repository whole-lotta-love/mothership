import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../../domain/service/register.service';

@Controller('auth')
export class RegisterController {
  constructor(private readonly register: RegisterService) {}

  @Post('sigin')
  signup(@Body() body: { username: string; password: string }) {
    return this.register.validateUser(body.username, body.password);
  }
}