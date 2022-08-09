// Core
import { ContextReplacementPlugin, Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const optimizeBuild = (): Configuration => ({
    optimization: {
        nodeEnv:                'production',
        minimize:               true,
        minimizer:              [ new TerserPlugin() ],
        emitOnErrors:           true,
        removeEmptyChunks:      true,
        mergeDuplicateChunks:   true,
        removeAvailableModules: true,
        concatenateModules:     true,
        providedExports:        true,
        usedExports:            true,
        sideEffects:            true,
        moduleIds:              'size',
        chunkIds:               'total-size',
        splitChunks:            {
            chunks:                 'all',
            minSize:                30000,
            maxSize:                500000,
            minChunks:              1,
            maxAsyncRequests:       5,
            maxInitialRequests:     3,
            automaticNameDelimiter: '~',
            name:                   false,
            cacheGroups:            {
                vendors: {
                    test:     /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks:          2,
                    priority:           -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: true,
    },
});

export const cleanDirectories = (): Configuration => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
});

export const filterMomentLocales = (): Configuration => ({
    plugins: [ new ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb|ru/) ],
});
