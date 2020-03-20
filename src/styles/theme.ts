import defaultTheme from './defaultTheme';

export const fonts = {
  heading: `'Lato', sans-serif`,
  body: `'Lato', sans-serif`,
};

const colors = {
  primaryDarkest: '#012949',
  primaryDarker: '#024376',
  primaryDark: '#035CA3',
  primary: '#0476D0',
  primaryLight: '#088FFA',
  primaryLighter: '#35A4FB',
  primaryLightest: '#62B8FC',
  msAppTileColor: '#0476D0',
};

export const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    ...fonts,
  },
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
  styles: {
    ...defaultTheme.styles,
    h1: {
      ...defaultTheme.styles?.h1,
      fontFamily: fonts.heading,
    },
    h2: {
      ...defaultTheme.styles?.h2,
      fontFamily: fonts.heading,
    },
    h3: {
      ...defaultTheme.styles?.h3,
      fontFamily: fonts.heading,
    },
    h4: {
      ...defaultTheme.styles?.h4,
      fontFamily: fonts.heading,
    },
    h5: {
      ...defaultTheme.styles?.h5,
      fontFamily: fonts.heading,
    },
    h6: {
      ...defaultTheme.styles?.h6,
      fontFamily: fonts.heading,
    },
  },
};
