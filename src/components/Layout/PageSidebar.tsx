import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme } from 'prestyled';

export const PageSidebar: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
  { sidebarVisible: boolean },
  Theme
> = styled('aside')`
  width: 100%;
  background: ${props => props.theme.colors.grayBlack};
  bottom: 0;
  color: #fff;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 0;
  @media only screen and (min-width: 600px) {
    width: 600px;
  }
  ${props =>
    !props.sidebarVisible
      ? `
  transition: visibility 0s .25s;
  visibility: hidden;
`
      : `
  transition: none;
  visibility: visible;
`};
`;
