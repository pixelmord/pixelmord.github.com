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
  `;
  return <Global styles={styles(props.theme)} />;
});