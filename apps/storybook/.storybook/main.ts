import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

module.exports = {
  stories: [
    "../../../packages/core/**/__stories__/*.stories.mdx",
    "../../../packages/core/**/__stories__/*.stories.tsx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      plugins: [...config.plugins, vanillaExtractPlugin()],
    };
  },
};
