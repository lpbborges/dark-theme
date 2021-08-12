import { ReactNode } from 'react';

import { RepositoriesProvider } from './useRepositories';
import { ThemeModeProvider } from './useThemeMode';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <ThemeModeProvider>
      <RepositoriesProvider>{children}</RepositoriesProvider>
    </ThemeModeProvider>
  );
}
