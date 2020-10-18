/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');

module.exports = {
  getCacheKey() {
    // Forces to ignore Jest cache
    return Math.random().toString();
  },

  process(src, filename, config, options) {
    const build = esbuild.buildSync({
      target: 'node14',
      platform: 'node',
      bundle: false,
      sourcemap: 'inline',
      loader: {
        '.ts': 'ts',
      },
      write: false,
      entryPoints: [filename],
    });

    console.log(build);
    const ts = Buffer.from(build.outputFiles[0].contents).toString();
    return ts;
  },
};
