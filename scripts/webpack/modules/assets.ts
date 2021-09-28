// Core
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

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
                use:  [
                    {
                        loader:  ImageMinimizerPlugin.loader,
                        options: {
                            deleteOriginalAssets: true,
                            minimizerOptions:     {
                                plugins: [
                                    [ 'optipng', { optimizationLevel: 7, interlaced: false }],
                                    [ 'mozjpeg', { progressive: true, quality: 65 }],
                                    [ 'gifsicle', { optimizationLevel: 7, interlaced: false }],
                                    [ 'webp', { quality: 75 }],
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
});

// export const loadImagesProd = (): Configuration => ({
//     module: {
//         rules: [
//             {
//                 test:    /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type:    'asset/resource',
//                 loader:  'image-webpack-loader',
//                 options: {
//                     mozjpeg: {
//                         progressive: true,
//                         quality:     65,
//                     },
//                     optipng: {
//                         enabled: true,
//                     },
//                     pngquant: {
//                         quality: [ 0.65, 0.90 ],
//                         speed:   4,
//                     },
//                     gifsicle: {
//                         interlaced: false,
//                     },
//                     webp: {
//                         quality: 75,
//                     },
//                 },
//             },
//         ],
//     },
// });

export const loadAudio = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(wav|mp3)$/,
                type: 'asset/resource',
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
