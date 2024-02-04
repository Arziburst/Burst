// Core
import 'styled-components';

// Types
import { ITheme } from '../../assets';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
