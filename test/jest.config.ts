/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: process.cwd(),
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  globalSetup: '<rootDir>/test/jest.globalsetup.ts',
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>src/$1',
  },
};
