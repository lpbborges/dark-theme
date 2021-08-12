import { ITheme } from '../interfaces/ITheme';

interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const themes: IThemes = {
  light: {
    primary: '#e6770b',
    body: '#fff',
    text: '#c2c2c2',
    border: '#c8c8c8',
    placeholder: '#dfdfdf',
  },

  dark: {
    primary: '#765898',
    body: '#000',
    text: '#c2c2c2',
    border: '#e7e6e68a',
    placeholder: '#dfdfdf50',
  },
};
