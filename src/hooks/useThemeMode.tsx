import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { themes } from '../themes';

type ThemeOptions = 'light' | 'dark';

interface IThemeModeContextData {
  themeModeToggler: () => void;
  theme: ThemeOptions;
}

interface IThemeModeProviderProps {
  children: ReactNode;
}

const ThemeModeContext = createContext<IThemeModeContextData>(
  {} as IThemeModeContextData
);

export function ThemeModeProvider({
  children,
}: IThemeModeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<ThemeOptions>('light');

  const setMode = (mode: ThemeOptions): void => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeModeToggler = (): void => {
    if (theme === 'light') setMode('dark');
    else setMode('light');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as ThemeOptions;

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeModeContext.Provider value={{ theme, themeModeToggler }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode(): IThemeModeContextData {
  return useContext(ThemeModeContext);
}
