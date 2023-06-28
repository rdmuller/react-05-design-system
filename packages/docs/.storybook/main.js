// /** @type { import('@storybook/react-vite').StorybookConfig } */

//import { mergeConfig } from 'vite';

const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
//const config = {
  stories: [
    "../src/pages/**/*.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    //"storybook-dark-mode"
  ],
  framework: {
    name: "@storybook/react-vite",
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  docs: {
    autodocs: true,
  },

  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      ...config,
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: '@ignite-ui/tokens',
            replacement: path.resolve(__dirname, '../../tokens'),
          },
          {
            find: '@ignite-ui/react',
            replacement: path.resolve(__dirname, '../../react'),
          },
          {
            find: '@ignite-ui/css',
            replacement: path.resolve(__dirname, '../../react/dist/index.css'),
          },
        ],
      },
    });
  }, 
};

//export default config;


//https://github.com/jackmccloy/vanilla-extract-monorepo-issue/blob/main/apps/docs/.storybook/main.ts
//https://github.com/vanilla-extract-css/vanilla-extract/issues/1037
//https://github.com/vanilla-extract-css/vanilla-extract/issues/727