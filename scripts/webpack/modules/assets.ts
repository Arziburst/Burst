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
                ],
            },
        ],
    },
});

export const loadImagesProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:  [
                    'file-loader',
                    {
                        loader:  'image-webpack-loader',
                        // https://github.com/tcoopman/image-webpack-loader
                        // options and links
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality:     65,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [ 0.65, 0.90 ],
                                speed:   4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
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
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'fonts/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});
