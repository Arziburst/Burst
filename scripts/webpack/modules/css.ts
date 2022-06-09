// Core
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const loadCss = ({ sourceMap }: { sourceMap: boolean }) => ({
    loader:  'css-loader',
    options: {
        sourceMap,
    },
});

const loadSass = ({ sourceMap }: { sourceMap: boolean }) => ({
    loader:  'sass-loader',
    options: {
        sourceMap,
    },
});

export const loadDevCss = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.css|.scss|.sass$/,
                use:  [
                    'style-loader',
                    loadCss({ sourceMap: false }),
                    'resolve-url-loader',
                    loadSass({ sourceMap: true }),
                ],
            },
        ],
    },
});

export const loadProdCss = (): Configuration => ({
    module: {
        rules: [
            {
                test: /.s?css$/,
                use:  [
                    MiniCssExtractPlugin.loader,
                    loadCss({ sourceMap: false }),
                    'resolve-url-loader',
                    loadSass({ sourceMap: true }),
                ],
            },
        ],
    },
    optimization: {
        minimizer: [ new CssMinimizerPlugin() ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      '[name].[contenthash:5].css',
            chunkFilename: '[name].[contenthash:3].css',
        }),
    ],
});
