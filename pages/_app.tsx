import React from 'react';
import { ThemeProvider } from 'theme-ui';
import 'typeface-lato';
import theme from '../styles';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
