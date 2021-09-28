// Core
import { Compiler } from 'webpack';

export = WebpackPwaManifest

// eslint-disable-next-line no-redeclare
declare class WebpackPwaManifest extends Plugin {
    constructor(options: WebpackPwaManifest.ManifestOptions);
    apply(compiler: Compiler): void;
}

// eslint-disable-next-line no-redeclare
declare namespace WebpackPwaManifest {
    type Direction = 'ltr' | 'rtl' | 'auto';
    type Display = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
    type Orientation = 'any' | 'natural' | 'landscape' | 'landscape-primary' | 'landscape-secondary' | 'portrait' | 'portrait-primary' | 'portrait-secondary';
    type CrossOrigin = 'use-credentials' | 'anonymous';
    interface ManifestOptions {
        background_color?: string;
        description?: string;
        dir?: Direction;
        display?: Display;
        fingerprints?: boolean;
        filename?: string;
        icons?: Icon | Icon[];
        inject?: boolean;
        lang?: string;
        name: string;
        orientation?: Orientation;
        publicPath?: string;
        prefer_related_applications?: boolean;
        related_applications?: RelatedApplications[];
        scope?: string;
        short_name?: string;
        start_url?: string;
        theme_color?: string;
        'theme-color'?: string;
        ios?: boolean | IosOptions;
        crossorigin?: CrossOrigin;
    }
    interface RelatedApplications {
        platform?: string;
        url: string;
        id?: string;
    }
    interface IosOptions {
        'apple-touch-icon'?: string | IosAppleTouchIcon;
        'apple-touch-startup-image'?: string;
        'apple-mobile-web-app-title'?: string;
        'apple-mobile-web-app-capable'?: 'yes' | 'no' | boolean;
        'apple-mobile-web-app-status-bar-style'?: 'default' | 'black' | 'black-translucent';
    }
    interface IosAppleTouchIcon {
        sizes?: string | number;
        href: string;
    }
    interface Icon {
        src: string;
        size?: string | number;
        sizes?: number[];
        destination?: string;
        ios?: boolean | 'default' | 'startup';
        purpose?: string;
        type?: string;
    }
}
