// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

// https://webpack.js.org/configuration/
export const getCommonConfig = () => {
    const { NODE_ENV } = process.env;
    const IS_DEVELOPMENT = NODE_ENV === 'development';

    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:     BUILD_DIRECTORY,
                filename: IS_DEVELOPMENT                 // entry point bundle name
                    ? 'js/entrypoint.[fullhash].chunk.js'
                    : 'js/[chunkhash].bundle.js',
                chunkFilename: IS_DEVELOPMENT            // chunk name
                    ? 'js/[name].[fullhash].chunk.js'
                    : 'js/[chunkhash].bundle.js',
                publicPath:          '/',
                //hashDigestLength:    5,
                assetModuleFilename: IS_DEVELOPMENT      // asset name
                    ? 'assets/[name][ext]'
                    : 'assets/[hash][ext]',
                hashDigestLength: 5,
            },
            resolve: {
                extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
            },
        },
        modules.loadTypeScript(),
        modules.defineEnvVariables(),
        modules.loadAudio(),
        modules.connectHtml(),
        modules.provideGlobals(),
    );
};
