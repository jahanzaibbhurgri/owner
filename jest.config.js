module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testRegex: '(/tests/.*\\.(test|spec))\\.(ts|tsx|js)$',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.(ts|tsx)', '!src/**/*.d.ts'],
  };