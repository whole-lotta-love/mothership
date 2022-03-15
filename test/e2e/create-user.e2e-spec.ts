import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { HttpStatus } from '@nestjs/common';
import { mockUser } from '../mocks/users.mock';
import * as request from 'supertest';

describe('Register users Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Create User', () => {
    it('/auth/signup (should be created)', () => {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .set('Accept', 'application/json')
        .send(mockUser)
        .expect(HttpStatus.CREATED);
    });

    it('/auth/singup (should be conflict )', () => {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send(mockUser)
        .expect(HttpStatus.CONFLICT);
    });
  });
});
