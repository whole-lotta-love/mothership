import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { UserAuthController } from './application/ports/user-authentication.http.controller';
import { RegisterService } from './domain/service/register.service';
import { CqrsModule } from '@nestjs/cqrs';
import User from '../user/domain/entities/user.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User]), UserModule],
  providers: [RegisterService],
  controllers: [UserAuthController],
})
export class AuthModule {}
