// Core
import { Configuration } from 'webpack';

// Tools
// import { nodeModulePath } from '../constants';


export const loadBabel = (): Configuration => ({
    module: {
        rules: [
            {
                test:    /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use:     [
                    {
                        loader:  'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            plugins: [
                                [
                                    'babel-plugin-styled-components',
                                    {
                                        displayName: true,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
        ],
    },
});

