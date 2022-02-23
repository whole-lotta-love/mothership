import { CreateUserHandle } from '../application/use-case/create-user/create-user.handler';
import { SearchUserHandler } from '../application/use-case/search-user/search-user.handler';
import { FindUserService } from '../domain/services/find-user.service';
import { InputUserService } from '../domain/services/inputUser.service';

export * from './dtos';
export * from '../application/use-case/create-user/create-user.service';
export * from '../application/use-case/search-user/search-user.service';

export const DomainServices = [FindUserService, InputUserService];
export const UsersCommandsHandlers = [SearchUserHandler, CreateUserHandle];
