import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

interface IThemeContext {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function ThemeProviderComponent({children}: ThemeProviderProps) {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    function toggleTheme() {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <ThemeProvider theme={themes[theme]}>
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
    )

}