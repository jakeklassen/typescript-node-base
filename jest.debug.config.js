/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { parse } = require('comment-json');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = parse(
  fs.readFileSync('./tsconfig.json').toString(),
);

const config = {
  automock: false,
  bail: false,
  rootDir: '.',
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // This must be set for `pathsToModuleNameMapper` to work in our setup
  modulePaths: ['<rootDir>/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  preset: 'ts-jest/presets/js-with-ts',
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  verbose: true,
};

module.exports = config;
