import {Theme, defaultTheme} from 'prestyled';

export const theme: Theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    headline: `'Lato', sans-serif`,
    text: `'Lato', sans-serif`,
  }
}