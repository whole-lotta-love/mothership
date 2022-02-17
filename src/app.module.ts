import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './infrastructure/interceptors/transform.interceptor';
import configuration from './infrastructure/config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: false, load: [configuration] })],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
