const CracoAlias = require('craco-alias');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.resolve.plugins.push(
                        new TsconfigPathsPlugin({
                            configFile: './tsconfig.base.json',
                        })
                    );
                    return webpackConfig;
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src',
                aliases: {
                    '@ei-ui-lib/hooks/*': ['@lib/hooks/*'],
                    '@ei-ui-lib/hooks': ['@lib/hooks'],
                    '@ei-ui-lib/components/*': ['@lib/components/*'],
                    '@ei-ui-lib/components': ['@lib/components'],
                },
                tsConfigPath: './tsconfig.base.json',
            },
        },
    ],
};
