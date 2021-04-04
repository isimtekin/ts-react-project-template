import { DefaultTheme, CSSProp } from 'styled-components';

export type Breakpoints = {
    [name in 'mobile' | 'tablet' | 'desktop']: number | string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints?: Breakpoints;
    }
}

declare module 'react' {
    export interface Attributes {
        css?: CSSProp;
        // ref?: any;
    }
}
