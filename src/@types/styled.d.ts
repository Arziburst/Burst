// Core
import 'styled-components';

// Types
import { defaultTheme } from '../assets';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
