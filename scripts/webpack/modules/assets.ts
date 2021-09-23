// Core
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Constants
import { STATIC_DIRECTORY, APP_NAME } from '../constants';

export const connectHtml = (): Configuration => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: `${STATIC_DIRECTORY}/template.html`,
            title:    APP_NAME,
            favicon:  `${STATIC_DIRECTORY}/favicon.ico`,
        }),
    ],
});

export const loadImagesDev = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:  [
                    'file-loader',
                    {
                        loader:  'image-webpack-loader',
                        // Disable optimizations
                        options: {
                            bypassOnDebug: true,
                            disable:       true,
                        },
                    },
                    // FIXME Refactor
                ],
            },
        ],
    },
});

export const loadImagesProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // FIXME OPTIONS
            },
        ],
    },
});

export const loadAudio = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(wav|mp3)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'audio/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});

export const loadFonts = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                // FIXME OPTIONS
            },
        ],
    },
});
