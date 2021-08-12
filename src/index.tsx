import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { ThemeModeProvider } from './hooks/useThemeMode';

ReactDOM.render(
  <ThemeModeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeModeProvider>,
  document.getElementById('root')
);
