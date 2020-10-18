import * as tsConfigPaths from 'tsconfig-paths';
import { parse } from 'comment-json';
import fs from 'fs';

const tsConfig = parse(fs.readFileSync('./tsconfig.json').toString());

tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.outDir,
  paths: tsConfig.compilerOptions.paths,
});
