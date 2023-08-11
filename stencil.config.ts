import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pixelrabbit',
  globalStyle: './src/global/global.scss',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      footer: 'A pixelrabbit project.',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
