// Core
import dotenv from 'dotenv';
import WebpackBar from 'webpackbar';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration, DefinePlugin, ProvidePlugin } from 'webpack';
// @ts-ignore
import FriendlyErrorsWebpackPlugin from '@soda/friendly-errors-webpack-plugin';

export const connectBuildProgressIndicator = (): Configuration => ({
    plugins: [ new WebpackBar({ basic: true }) ],
});

export const connectFriendlyErrors = (): Configuration => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectBundleAnalyzer = (): Configuration => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const defineEnvVariables = (): Configuration => {
    const envFileFinder = (path: string): string => {
        return JSON.stringify(dotenv.config({ path }).parsed) ?? envFileFinder('.env.example');
    };

    const environmentHandler = () => {
        switch (process?.env?.NODE_ENV) {
            case 'development': return envFileFinder('.env.development');
            case 'production': return envFileFinder('.env.production');
            default: return envFileFinder('.env.example');
        }
    };

    return {
        plugins: [
            new DefinePlugin({
                'process.env': environmentHandler(),
            }),
        ],
    };
};

export const provideGlobals = (): Configuration => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});
