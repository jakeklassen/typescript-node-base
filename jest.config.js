// @ts-check

const { parse, stringify } = require('comment-json');
const fs = require('node:fs');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):

const { compilerOptions } = parse(fs.readFileSync('tsconfig.json').toString());

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths);

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>config.ts'],
  testPathIgnorePatterns: ['dist'],
  rootDir: './',
  modulePaths: ['<rootDir>/'],
  moduleNameMapper,
  verbose: true,
};
