// https://maketintsandshades.com/
import { AppTheme, ThemeType } from './Theme';

export interface ColorTone {
    dark?: string;
    medium?: string;
    normal?: string;
    light?: string;
    thin?: string;
}

export enum BaseColor {
    black = 'black',
    white = 'white',
    grey = 'grey',
    green = 'green',
    red = 'red',
    blue = 'blue',
    orange = 'orange',
    purple = 'purple',
}

// export type Palette = PartialRecord<BaseColor, ColorTone>;
export interface Palette {
    [BaseColor.black]: ColorTone;
    [BaseColor.white]: ColorTone;
    [BaseColor.blue]: ColorTone;
    [BaseColor.grey]: ColorTone;
    [BaseColor.red]: ColorTone;
    [BaseColor.green]: ColorTone;
    [BaseColor.orange]: ColorTone;
    [BaseColor.purple]: ColorTone;
}

const mainColors: Palette = {
    black: {
        dark: '#080808',
        medium: '#222',
        normal: '#3B3B3B',
        light: '#555',
        thin: '#545353',
    },
    white: {
        dark: '#f5f5f5',
        medium: '#F8F8FF',
        normal: '#fdfcfa', // wista
        light: 'fffafa', // Snow White
        thin: '#ffffff', // natural white
    },
    grey: {
        dark: '#6e6e6e',
        medium: '#6d6d6d',
        normal: '#878686',
        light: '#a0a0a0',
        thin: '#bab9b9',
    },
    red: {
        dark: '#a2352a',
        medium: '#b93d30',
        normal: '#e74c3c',
        light: '#e95e50',
        thin: '#ee8277',
    },
    green: {
        dark: '#1c7a44',
        medium: '#25a35a',
        normal: '#2ecc71',
        light: '#58d68d',
        thin: '#97e6b8',
    },
    blue: {
        dark: '#1f5b83',
        medium: '#2a7aaf',
        normal: '#3498db',
        light: '#5dade2',
        thin: '#85c1e9',
    },
    orange: {
        dark: '#925e0b',
        medium: '#c27d0e',
        normal: '#f39c12',
        light: '#f7ba59',
        thin: '#f8c471',
    },
    purple: {
        dark: '#8b16a2',
        medium: '#9d18b7',
        normal: '#ae1bcb',
        light: '#b632d0',
        thin: '#ce76e0',
    },
};

export interface Colors {
    primaryColor: ColorTone;
    secondaryColor: ColorTone;
    theme: ThemeColors;
    status: {
        error: ColorTone;
        success: ColorTone;
        info: ColorTone;
        warning: ColorTone;
    };
    palette: Palette;
}

interface ThemeColors {
    textColor: ColorTone;
    bgColor: ColorTone;
    headerBg: string;
    headerBorder: string;
    headerMenuItem: string;
}

const defaultTheme = {
    textColor: mainColors.black,
    bgColor: mainColors.grey,
    headerBg: mainColors.grey.thin || '',
    headerBorder: mainColors.grey.thin || '',
    headerMenuItem: mainColors.black.normal || '',
};

const themes: PartialRecord<ThemeType, ThemeColors> = {
    light: {
        textColor: mainColors.black,
        bgColor: {
            ...mainColors.grey,
            normal: 'white',
        },
        headerBg: mainColors.white?.thin || '',
        headerBorder: mainColors.grey.thin || '',
        headerMenuItem: mainColors.black.normal || '',
    },
    dark: {
        textColor: mainColors.black,
        bgColor: mainColors.grey,
        headerBg: mainColors.grey.dark || '',
        headerBorder: mainColors.grey.dark || '',
        headerMenuItem: mainColors.white.normal || '',
    },
};

export const getColors: (theme?: ThemeType) => Colors = (
    theme = ThemeType.Light
) => ({
    primaryColor: mainColors.purple,
    secondaryColor: mainColors.blue,
    theme: themes[theme] || defaultTheme,
    status: {
        error: mainColors.red,
        success: mainColors.green,
        info: mainColors.blue,
        warning: mainColors.orange,
    },
    palette: mainColors,
});

export function getThemeColor(props: AppTheme): ThemeColors {
    return props.theme?.colors.theme;
}
