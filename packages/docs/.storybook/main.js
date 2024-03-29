// /** @type { import('@storybook/react-vite').StorybookConfig } */

//import { mergeConfig } from 'vite';

const {
  mergeConfig
} = require('vite');
const path = require('path');
module.exports = {
  //const config = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"
  //"storybook-dark-mode"
  , "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: true
  },
  viteFinal: async (config, {
    configType
  }) => {
    if (configType === "PRODUCTION") {
      config.base = "/react-05-design-system/";
    }
    return mergeConfig(config, {
      ...config,
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
      resolve: {
        alias: [{
          find: '@rdmuller-ignite-ui/tokens',
          replacement: path.resolve(__dirname, '../../tokens')
        }, {
          find: '@rdmuller-ignite-ui/react',
          replacement: path.resolve(__dirname, '../../react')
        }, {
          find: '@rdmuller-ignite-ui/css',
          replacement: path.resolve(__dirname, '../../react/dist/index.css')
        }]
      }
    });
  }
};

//export default config;

//https://github.com/jackmccloy/vanilla-extract-monorepo-issue/blob/main/apps/docs/.storybook/main.ts
//https://github.com/vanilla-extract-css/vanilla-extract/issues/1037
//https://github.com/vanilla-extract-css/vanilla-extract/issues/727