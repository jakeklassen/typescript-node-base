/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { parse } = require('comment-json');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = parse(
  fs.readFileSync('./tsconfig.json').toString(),
);

module.exports = {
  // This must be set for `pathsToModuleNameMapper` to work in our setup
  modulePaths: [`<rootDir>/${compilerOptions.baseUrl}`],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules/', 'dist/'],
  verbose: true,
};
