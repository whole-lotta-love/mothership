import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../shared';
import { CreateUserService } from '../use-case/create-user/create-user.service';
import User from '../../domain/entities/user.entity';

@Controller('register')
export class RegisterController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('sigin')
  async sigup(@Body() body: CreateUserDto): Promise<User> {
    return this.createUserService.handle(body);
  }
}
