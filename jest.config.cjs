// eslint-disable-next-line @typescript-eslint/no-var-requires
const { parse } = require('comment-json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('node:fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):

// TODO: fix this type
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const { compilerOptions } = parse(fs.readFileSync('tsconfig.json').toString());

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths);

/** @type {import('ts-jest').JestConfigWithTsJest } */
module.exports = {
  modulePaths: ['<rootDir>/'],
  moduleNameMapper,
  preset: 'ts-jest/presets/default-esm',
  rootDir: './',
  setupFiles: ['<rootDir>config.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  verbose: true,
};
