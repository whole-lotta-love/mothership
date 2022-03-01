import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateEmailException extends HttpException {
  constructor() {
    super('Request conflict, the email address is already registered', HttpStatus.CONFLICT);
  }
}

export class DuplicateUsernameException extends HttpException {
  constructor() {
    super('Request conflict, the username is already registerede', HttpStatus.CONFLICT);
  }
}
