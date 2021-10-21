// Core
import { Compiler } from 'webpack';

declare module 'fontmin-webpack' {
    export default class FontminPlugin {
        constructor(options: FontminPluginOptions);
        apply(compiler: Compiler): void;
    }

    interface FontminPluginOptions {
        autodetect: boolean
        glyphs: string[]
        allowedFilesRegex: RegExp | null
        skippedFilesRegex: RegExp | null
    }
}
