import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {},
  },
  "staticDirs": [
    "../public",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    if (config.module?.rules) {
      config.module.rules = [
        ...config.module.rules.map((rule) => {
          if (/svg/.test(rule.test)) {
            // Silence the Storybook loaders for SVG files
            return { ...rule, exclude: /\.svg$/i };
          }
          return rule;
        }),
        // Add your custom SVG loader
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        },
      ];
    }

    // Return the altered config
    return config;
  },
};
export default config;
