import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './infrastructure/config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: false, load: [configuration] })],
  controllers: [],
  providers: [],
})
export class AppModule {}
