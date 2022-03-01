import { CreateUserHandle } from '@src/modules/user/application/use-case/create-user/create-user.handler';
import { InputUserService } from '@src/modules/user/domain/services/input-user.service';
import { SearchUserService, UserStructure } from '@src/modules/user/shared';
import { DuplicateUsernameException } from '@src/modules/user/infrastructure/errors/duplicate.exception';
import User from '@user/domain/entities/user.entity';

describe('create users - use case', () => {
  let searchUserService: SearchUserService;
  let commandHandler: CreateUserHandle;
  let inputUserService: InputUserService;

  const mockCredentials: UserStructure = {
    name: 'test',
    username: 'testing user',
    email: 'test@email.com',
    password: 'xbEmQ1hoIshz7OVdWxA',
  };

  beforeEach(() => {
    searchUserService = new SearchUserService(null);
    inputUserService = new InputUserService(null);

    commandHandler = new CreateUserHandle(searchUserService, inputUserService);
  });

  describe('create user', () => {
    test('Should return a new user', async () => {
      const result = new Promise<User>((resolve) => {
        resolve({
          id: '3674426f-f715-42be-8eb5-cff2b8107669',
          createAt: 0,
          updateAt: 0,
          email: 'test@email.com',
          username: 'test-user',
          name: 'test',
          password: '',
          hashPassword: jest.fn(),
        });
      });

      jest.spyOn(searchUserService, 'handler').mockImplementation(() => null);
      jest
        .spyOn(inputUserService, 'createUser')
        .mockImplementation(() => result);
      expect(await commandHandler.execute(mockCredentials)).toBe(await result);
    });

    test('Should throw Duplicate Username Error', async () => {
      jest
        .spyOn(searchUserService, 'handler')
        .mockImplementation(async ({ username, email }) => {
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
