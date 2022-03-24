import { UserStructure } from '@src/modules/user/shared';

export const mockUser = {
  id: '3674426f-f715-42be-8eb5-cff2b8107669',
  createAt: 0,
  updateAt: 0,
  email: 'test@email.com',
  username: 'test-user',
  name: 'test',
  password: '',
  hashPassword: jest.fn(),
};

export const mockCredentials: UserStructure = {
  name: 'test',
  username: 'testing user',
  email: 'test@email.com',
  password: 'xbEmQ1hoIshz7OVdWxA',
};
