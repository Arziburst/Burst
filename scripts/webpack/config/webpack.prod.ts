// Core
import merge from 'webpack-merge';

// Configurations
import { getCommonConfig } from './webpack.common';

// Modules
import * as modules from '../modules';

export const getProdConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'production',
            devtool: false,
        },
        modules.cleanDirectories(),
        modules.loadImagesProd(),
        modules.loadProdCss(),
        modules.loadFontsProd(),
        modules.filterMomentLocales(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
        modules.connectBundleAnalyzer(),
    );
};
