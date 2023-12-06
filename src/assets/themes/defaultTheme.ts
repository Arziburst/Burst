// Colors
import { green } from '../colors/green';

export interface ITheme {
    name: string
    button: {
        primary: string
        secondary: string
        error: string
    }
    palette: {
        primary?: Partial<typeof green>
        secondary?: Partial<typeof green>
        background?: {
            default: string
        }
    },
}

export const defaultTheme: ITheme = {
    name:   'defaultTheme',
    button: {
        primary:   '#000',
        secondary: '#fff',
        error:     '#FF0000',
    },
    palette: {
        primary: {
            ...green,
        },
        background: {
            default: '#FFFFFF',
        },
    },
};
