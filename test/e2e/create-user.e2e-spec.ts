import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { mockCredentials } from './../mocks/User.mock';
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

  describe('POST auth/signup', () => {
    test('should return create', () => {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send(mockCredentials)
        .expect('Content-Type', /json/)
        .expect(HttpStatus.CREATED);
    });
  });
});
