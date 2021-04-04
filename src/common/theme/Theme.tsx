import { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createBreakpoint, createMap } from 'styled-components-breakpoint';
import { Breakpoints } from 'types/styled';

import { fonts } from './font';
import { getColors, Colors } from './colors';

export enum ThemeType {
    Light = 'light',
    Dark = 'dark',
}

export type AppTheme = {
    theme: {
        fonts?: any;
        colors: Colors;
        breakpoints?: Breakpoints;
        selectedTheme?: ThemeType;
    };
    handleChangeTheme: (theme: ThemeType) => void;
};
const breakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1200,
};

export const ThemeContext = createContext<AppTheme>({
    theme: {
        breakpoints,
        colors: getColors(),
    },
    handleChangeTheme: () => {},
});

interface IThemeProviderProps {
    children: JSX.Element;
}

// https://www.npmjs.com/package/styled-components-breakpoint
export const responsive = createBreakpoint(breakpoints);
export const responsiveMap = createMap(breakpoints);

export default function ThemeProvider({ children }: IThemeProviderProps) {
    const [selectedTheme, setSelectedTheme] = useState<ThemeType>(
        ThemeType.Light
    );

    const handleChangeTheme = (theme: ThemeType) => {
        setSelectedTheme(theme);
    };

    const theme = useMemo(
        () => ({
            fonts,
            colors: getColors(selectedTheme),
            breakpoints,
            selectedTheme,
        }),
        [selectedTheme]
    );

    return (
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const { theme, handleChangeTheme: changeTheme } = useContext(ThemeContext);

    return { theme, changeTheme };
}
