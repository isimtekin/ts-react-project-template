import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext<Partial<any>>({});

const themeTypes = {
    default: 'default',
};

interface IThemeProviderProps {
    children: JSX.Element;
}

export default function ThemeProvider({ children }: IThemeProviderProps) {
    const [themeType, setThemeType] = useState(themeTypes.default);

    const getTheme = () => {
        return {};
    };
    const handleChange = () => {
        setThemeType(themeTypes.default);
    };

    const theme = getTheme();

    return (
        <ThemeContext.Provider value={{ theme, themeType, handleChange }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const { theme } = useContext(ThemeContext);
    const [projectTheme, setProjectTheme] = useState(theme);
    useEffect(() => {
        setProjectTheme(theme);
    }, [theme]);
    return { theme: projectTheme };
}
