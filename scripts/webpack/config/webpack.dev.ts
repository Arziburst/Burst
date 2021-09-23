// Core
import merge from 'webpack-merge';

// Configurations
import { getCommonConfig } from './webpack.common';

// Modules
import * as modules from '../modules';

export const getDevConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'development',
            devtool: 'eval-cheap-module-source-map',
            //entry:     [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        },
        modules.loadImagesDev(),
        modules.loadDevCss(),
        modules.connectHMR(),
        modules.connectFriendlyErrors(),
    );
};
