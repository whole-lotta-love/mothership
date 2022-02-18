import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateEmail extends HttpException {
  constructor() {
    super('Request conflict, email duplicate', HttpStatus.CONFLICT);
  }
}

export class DuplicateUsername extends HttpException {
  constructor() {
    super('Request conflict, username duplicate', HttpStatus.CONFLICT);
  }
}
