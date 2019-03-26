import { defaultTheme } from 'prestyled';
export const fonts = {
  headline: `'Lato', sans-serif`,
  text: `'Lato', sans-serif`,
  mono: `Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
};

const colors = {
  primaryDarkest: '#012949',
  primaryDarker: '#024376',
  primaryDark: '#035CA3',
  primary: '#0476D0',
  primaryLight: '#088FFA',
  primaryLighter: '#35A4FB',
  primaryLightest: '#62B8FC',
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
  textStyles: {
    ...defaultTheme.textStyles,
    h1: {
      ...defaultTheme.textStyles.h1,
      fontFamily: fonts.headline,
    },
    h2: {
      ...defaultTheme.textStyles.h2,
      fontFamily: fonts.headline,
    },
    h3: {
      ...defaultTheme.textStyles.h3,
      fontFamily: fonts.headline,
    },
    h4: {
      ...defaultTheme.textStyles.h4,
      fontFamily: fonts.headline,
    },
    h5: {
      ...defaultTheme.textStyles.h5,
      fontFamily: fonts.headline,
    },
    h6: {
      ...defaultTheme.textStyles.h6,
      fontFamily: fonts.headline,
    },
  },
};
