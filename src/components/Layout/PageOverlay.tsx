import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme } from 'prestyled';

export const PageOverlay: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
  { sidebarVisible: boolean; },
  Theme
> = styled('div')`
  background-color: rgba(255, 255, 255, 0.75);
  bottom: 0;
  cursor: ew-resize;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  ${props =>
    !props.sidebarVisible
      ? `
  opacity: 0;
  right: 0;
  z-index: -1;
  visibility: hidden;
  transition: right .25s ease-in-out, opacity .25s ease-in-out, visibility 0s .25s ease-in-out;
`
      : `
  opacity: 1;
  right: 100%;
  z-index: 9999;
  visibility: visible;
  transition: opacity .25s ease-in-out, right .25s ease-in-out;
  @media only screen and (min-width: 600px) {
    right: 600px;
  }
`};
`;
