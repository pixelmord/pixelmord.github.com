import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import { Theme } from 'prestyled';

export const GlobalStyle: React.FC<{}> = withTheme(props => {
  const styles = (theme: Theme) => css`
    body {
      color: ${theme.colors.text};
      font-family: ${theme.fonts.text};
      line-height: ${theme.lineHeights.standard};
      background: ${theme.colors.white};
    }
    a {
      color: ${theme.colors.primary};
      transition: color 0.3s ease;
      :hover {
        color: ${theme.colors.primaryDark};
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    p {
      margin-top: 0;
      margin-bottom: 0.6em;
    }
  `;
  return <Global styles={styles(props.theme)} />;
});
