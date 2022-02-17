import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Record<string, any>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Record<string, any>> {
    /**
     * Transform class(constructor) object to plain object,
     * also exclude field from object returned by a controller
     */
    return next.handle().pipe(map((data) => instanceToPlain(data)));
  }
}
