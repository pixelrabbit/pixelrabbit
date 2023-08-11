// loader for stencil components
import {defineCustomElements} from '../loader';
defineCustomElements();

// global stencil styles
import "./../www/build/pixelrabbit.css";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
