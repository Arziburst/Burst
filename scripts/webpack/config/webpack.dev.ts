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
            mode:      'development',
            devtool:   'eval-cheap-module-source-map',
            stats:     'none',
            devServer: {
                hot: true,
            },
        },
        modules.loadImagesDev(),
        modules.loadDevCss(),
        // modules.connectHMR(), // TODO работать без этого плагина, тестировать
        modules.connectFriendlyErrors(),
        modules.loadFontsDev(),
    );
};
