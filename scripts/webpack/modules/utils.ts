// Core
import {
    Configuration,
    DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { GenerateSW  } from 'workbox-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import dotenv from 'dotenv';
import { resolve, extname } from 'path';
import fs from 'fs';
import ttf2woff2 from 'ttf2woff2';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';

// Constants
import { BUILD_ASSETS_DIRECTORY, SOURCE_DIRECTORY } from '../constants';

export const connectBuildProgressIndicator = (): Configuration => ({
    plugins: [ new WebpackBar({ basic: true }) ],
});

export const connectFriendlyErrors = (): Configuration => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = (): Configuration => ({
    plugins: [ new HotModuleReplacementPlugin() ],
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

export const generateServiceWorker = (): Configuration => {
    const workbox = new GenerateSW({
        clientsClaim:     true,
        skipWaiting:      true,
        navigateFallback: '/index.html',
        mode:             'production',
    });

    return {
        plugins: [ workbox ],
    };
};

export const generateManifest = (): Configuration => {
    const manifest = new WebpackPwaManifest({
        name:             process.env.APP_NAME || 'Awesome app',
        short_name:       process.env.APP_NAME || 'Awesome app',
        background_color: '#ffffff',
        crossorigin:      'use-credentials',
        display:          'standalone',
        inject:           true,
        ios:              true,
        icons:            [
            {
                src:   resolve(SOURCE_DIRECTORY, './assets/images/logo.png'),
                sizes: [ 96, 128, 192, 256, 384, 512 ],
                ios:   true,
            },
        ],
    });

    return {
        // @ts-ignore
        plugins: [ manifest ],
    };
};

export const webpackShellProd = (): Configuration => {
    const convertFonts = () => {
        fs.stat(BUILD_ASSETS_DIRECTORY, (error) => {
            if (!error) {
                const files = fs.readdirSync(BUILD_ASSETS_DIRECTORY);

                files.forEach((file) => {
                    if (extname(file) === '.ttf') {
                        const fullFilename = `${BUILD_ASSETS_DIRECTORY}/${file}`;
                        const buffer = fs.readFileSync(fullFilename);

                        fs.writeFileSync(fullFilename, ttf2woff2(buffer));
                    }
                });
            }
        });
    };

    return {
        plugins: [
            new WebpackShellPluginNext({
                onAfterDone: () => convertFonts(),
            }),
        ],
    };
};
