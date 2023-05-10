// Core
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
// @ts-ignore
import FontminPlugin from 'fontmin-webpack';

// Constants
import { STATIC_DIRECTORY } from '../constants';

export const connectHtml = (): Configuration => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: `${STATIC_DIRECTORY}/template.html`,
            title:    process.env.APP_NAME || 'burst-template',
            favicon:  `${STATIC_DIRECTORY}/favicon.ico`,
        }),
    ],
});

export const loadImagesDev = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
});

export const loadImagesProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                },
            }),
        ],
    },
});


export const loadFontsDev = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
});

export const loadFontsProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new FontminPlugin({
            autodetect:        true,
            glyphs:            [],
            allowedFilesRegex: null,
            skippedFilesRegex: null,
        }),
    ],
});
