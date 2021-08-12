import { ToastContainer } from 'react-toastify';

import { AppProvider } from './hooks';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/global';

export function App(): JSX.Element {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
      <ToastContainer autoClose={2000} />
    </AppProvider>
  );
}
