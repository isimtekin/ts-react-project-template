import { createGlobalStyle } from 'styled-components';

/**
 * this css file includes core css rules fo the ant lib.
 * it shouldn't remove in order to run antd components stabile
 */
import 'antd/es/style/index.css';
import { fonts } from './font';
import { AppTheme } from './Theme';
import { getThemeColor } from './colors';

const fontFaceFamily = fonts.family;
const fontFacePath = '/assets/fonts/helvetica/';

export const GlobalStyle = createGlobalStyle<{}>`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      color: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      tborder-collapse: collapse;
      tborder-spacing: 0;
    }

    @font-face {
      font-family: '${fontFaceFamily}';
      src: url('${fontFacePath}${fontFaceFamily}.eot?#iefix') format('embedded-opentype'),  url('${fontFacePath}${fontFaceFamily}.woff') format('woff'), url('${fontFacePath}${fontFaceFamily}.ttf')  format('truetype'), url('${fontFacePath}${fontFaceFamily}.svg#${fontFaceFamily}') format('svg');
      font-weight: ${fonts.weight.normal};
      font-style: normal;
    }


    @font-face {
      font-family: '${fontFaceFamily}';
      src: url('${fontFacePath}${fontFaceFamily}-Bold.eot?#iefix') format('embedded-opentype'),
        url('${fontFacePath}${fontFaceFamily}-Bold.woff') format('woff'),
        url('${fontFacePath}${fontFaceFamily}-Bold.ttf')  format('truetype'),
         url('${fontFacePath}${fontFaceFamily}-Bold.svg#${fontFaceFamily}') format('svg');
         font-weight: ${fonts.weight.bold};
      font-style: normal;
    }


    @font-face {
      font-family: '${fontFaceFamily}';
      src: url('${fontFacePath}${fontFaceFamily}-Light.eot?#iefix') format('embedded-opentype'),
        url('${fontFacePath}${fontFaceFamily}-Light.woff') format('woff'),
         url('${fontFacePath}${fontFaceFamily}-Light.ttf')  format('truetype'), 
         url('${fontFacePath}${fontFaceFamily}-Light.svg#${fontFaceFamily}') format('svg');
         font-weight: ${fonts.weight.light};
      font-style: normal;
    }


    @font-face {
      font-family: '${fontFaceFamily}';
      src: url('${fontFacePath}${fontFaceFamily}-Oblique.eot?#iefix') format('embedded-opentype'),
        url('${fontFacePath}${fontFaceFamily}-Oblique.woff') format('woff'), 
        url('${fontFacePath}${fontFaceFamily}-Oblique.ttf')  format('truetype'), 
        url('${fontFacePath}${fontFaceFamily}-Oblique.svg#${fontFaceFamily}') format('svg');
        font-weight: ${fonts.weight.normal};
      font-style: italic;
    }

    body {
      font-family: "${fontFaceFamily}";
      font-size: ${fonts.size.normal};
      background-color:  ${(props: AppTheme) =>
          getThemeColor(props).bgColor.normal};
    
    }
  
`;
