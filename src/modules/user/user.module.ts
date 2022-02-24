import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { FindUserController } from './application/ports/find.http.controller';
import {
  CreateUserService,
  DomainServices,
  SearchUserService,
  UsersCommandsHandlers,
} from './shared';
import User from './domain/entities/user.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  providers: [
    ...DomainServices,
    ...UsersCommandsHandlers,
    CreateUserService,
    SearchUserService,
  ],
  controllers: [FindUserController],
  exports: [CreateUserService],
})
export class UserModule {}
