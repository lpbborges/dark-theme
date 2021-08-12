import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { ITheme } from '../interfaces/ITheme';

interface GlobalStylesProps {
  theme: ITheme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }


  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    -webkit-font-smoothing: antialiased;
  }

  body,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: ${({ theme }) => theme.primary}
  }
`;
