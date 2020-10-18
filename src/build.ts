import esbuild from 'esbuild';

esbuild
  .build({
    target: 'node14',
    platform: 'node',
    format: 'cjs',
    write: true,
    bundle: false,
    outdir: 'dist',
    sourcemap: 'external',
    loader: {
      '.ts': 'ts',
    },
    entryPoints: ['./src/index.ts'],
    tsconfig: './tsconfig.json',
  })
  .catch(console.error);
