import { CreateUserHandle } from '@src/modules/user/application/use-case/create-user/create-user.handler';
import { InputUserService } from '@src/modules/user/domain/services/input-user.service';
import { SearchUserService } from '@src/modules/user/shared';
import { DuplicateUsernameException } from '@src/modules/user/infrastructure/errors/duplicate.exception';
import { mockCredentials } from '../../mocks/User.mock';
import User from '@user/domain/entities/user.entity';

describe('create users - use case', () => {
  let searchUserService: SearchUserService;
  let commandHandler: CreateUserHandle;
  let inputUserService: InputUserService;

  beforeEach(() => {
    searchUserService = new SearchUserService(null);
    inputUserService = new InputUserService(null);
    commandHandler = new CreateUserHandle(searchUserService, inputUserService);
  });

  describe('create user', () => {
    test('Should return a new user', async () => {
      jest.spyOn(searchUserService, 'handler').mockImplementation(() => null);
      jest
        .spyOn(inputUserService, 'createUser')
        .mockImplementation(async () => new User());

      expect(await commandHandler.execute(mockCredentials)).toBeInstanceOf(
        User,
      );
    });

    test('Should throw Duplicate Username Error', async () => {
      jest
        .spyOn(searchUserService, 'handler')
        .mockImplementation(async ({ username }) => {
          if (username == mockCredentials.username) {
            return new User();
          } else return null;
        });

      await expect(commandHandler.execute(mockCredentials)).rejects.toThrow(
        DuplicateUsernameException,
      );
    });
  });
});
