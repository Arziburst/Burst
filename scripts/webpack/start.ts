// Core
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import chalk from 'chalk';
import openBrowser from 'react-dev-utils/openBrowser';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Config
import { getDevConfig } from './config';

// Constants
import { HOST, PORT } from './constants';

const compiler = webpack(getDevConfig());

(async () => {
    try {
        const choosenPort = await choosePort(HOST, PORT);

        if (!choosenPort) {
            console.log(
                chalk.yellowBright('→ It\'s impossible to run the app :('),
            );

            return null;
        }

        const server = new DevServer({
            port:               choosenPort,
            historyApiFallback: true,
            hot:                false,
            onListening:        () => {
                openBrowser(`http://${HOST}:${choosenPort}`);
            },
        }, compiler);

        server.start();
    } catch (error) {
        console.log(chalk.redBright('→ Error!'));
        console.error(error ?? 'No error data.');
    }
})();
