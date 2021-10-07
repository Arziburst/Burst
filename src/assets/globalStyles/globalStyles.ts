// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import Roboto from '../fonts/Roboto-Regular.ttf';
// import RobotoWoff2 from '../fonts/Roboto-Regular.woff2';         // TODO fonts conversion
import Gemunu from '../fonts/Gemunu-Regular.woff2';
import Montserrat from '../fonts/Montserrat-Regular.ttf';
// import MontserratWoff2 from '../fonts/Montserrat-Regular.woff2'; // TODO fonts conversion

export const GlobalStyles = createGlobalStyle`
    ${reset}
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gemunu Libre';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${Gemunu}) format('woff2');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url(${Montserrat}) format('truetype');
    }
`;
