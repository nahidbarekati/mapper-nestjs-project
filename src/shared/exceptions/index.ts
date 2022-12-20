import { ExceptionBase } from './exception.base';
import { ExceptionCodes } from './exception.codes';

export class NotFoundException extends ExceptionBase {
  constructor(message = 'Not found') {
    super(message);
  }

  readonly code = ExceptionCodes.notFound;
}

export class ConflictException extends ExceptionBase {
  readonly code = ExceptionCodes.tooManyRequests;
}

export class ForbiddenException extends ExceptionBase {
  readonly code = ExceptionCodes.forbiddenException;
}
