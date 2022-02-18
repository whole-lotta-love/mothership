import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './application/ports/register.controller';
import { CreateUserService } from './application/use-case/create-user/create-user.service';
import { InputUserService } from './domain/services/inputUser.service';
import { CreateUserHandle } from './application/use-case/create-user/create-user.handler';
import User from './domain/entities/user.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  providers: [CreateUserService, InputUserService, CreateUserHandle],
  controllers: [RegisterController],
  exports: [],
})
export class UserModule {}
