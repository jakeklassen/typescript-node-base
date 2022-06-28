import esbuild from 'esbuild';
import path from 'node:path';
import glob from 'tiny-glob';

console.log(path.resolve(import.meta.url, '..'));

await esbuild
  .build({
    target: 'node18',
    platform: 'node',
    format: 'esm',
    write: true,
    bundle: false,
    outdir: 'dist',
    sourcemap: 'external',
    loader: {
      '.ts': 'ts',
    },
    entryPoints: await glob('./src/**/*.ts'),
    tsconfig: './tsconfig.json',
  })
  .catch(console.error);
