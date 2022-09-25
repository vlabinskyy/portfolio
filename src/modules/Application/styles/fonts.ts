import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  /* Gilroy semi-bold */
  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Semibold.eot');
    src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
    url('/fonts/Gilroy-Semibold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Gilroy-Semibold.woff2') format('woff2'),
    url('/fonts/Gilroy-Semibold.woff') format('woff'),
    url('/fonts/Gilroy-Semibold.ttf') format('true+type');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-SemiboldItalic.eot');
    src: local('Gilroy Semibold Italic'), local('Gilroy-SemiboldItalic'),
    url('/fonts/Gilroy-SemiboldItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Gilroy-SemiboldItalic.woff2') format('woff2'),
    url('/fonts/Gilroy-SemiboldItalic.woff') format('woff'),
    url('/fonts/Gilroy-SemiboldItalic.ttf') format('truetype');
    font-display: swap;
    font-weight: 600;
    font-style: italic;
  }

  /* Gilroy bold */

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Bold.eot');
    src: local('Gilroy Bold'), local('Gilroy-Bold'),
    url('/fonts/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Gilroy-Bold.woff2') format('woff2'),
    url('/fonts/Gilroy-Bold.woff') format('woff'),
    url('/fonts/Gilroy-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-BoldItalic.eot');
    src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),
    url('/fonts/Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Gilroy-BoldItalic.woff2') format('woff2'),
    url('/fonts/Gilroy-BoldItalic.woff') format('woff'),
    url('/fonts/Gilroy-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }
`;
