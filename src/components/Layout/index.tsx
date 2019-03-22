import * as React from 'react';
import Link from 'gatsby-link';
import { ThemeProvider } from 'emotion-theming';

import 'typeface-lato';
import 'modern-normalize';
import HtmlHead from '../HtmlHead';
import { theme, GlobalStyle } from '../../styles';

const Header = () => (
  <div
    style={{
      background: '#355645',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Andreas Sahle &nbsp;
        </Link>
        <a
          href="https://twitter.com/pixelmord"
          target="_blank"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          @pixelmord
        </a>
      </h1>
    </div>
  </div>
);

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
}

const Layout: React.FC = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HtmlHead />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
