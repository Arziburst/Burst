// Core
import webpack from 'webpack';
import chalk from 'chalk';

// Config
import { getProdConfig } from './config';

const compiler = webpack(getProdConfig());

compiler.run((error, stats) => {
    if (error) {
        console.error(error.stack || error);

        if (error.message) {
            console.error(error.message);
        }

        return null;
    }

    const info = stats?.toString({
        colors:     true,
        hash:       true,
        version:    true,
        timings:    true,
        env:        true,
        chunks:     false,
        modules:    false,
        children:   false,
        publicPath: true,
        reasons:    true,
        source:     false,
    });

    console.log(chalk.greenBright('✓ Build completed'));
    console.log(info);

    if (stats?.hasErrors()) {
        console.log(chalk.redBright('→ Error!'));
        console.error(info);
    }

    if (stats?.hasWarnings()) {
        console.log(chalk.yellowBright('→ Warning!'));
        console.warn(info);
    }
});
