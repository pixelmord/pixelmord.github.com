import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme } from 'prestyled';

export const Page: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
  { sidebarVisible: boolean },
  Theme
> = styled('div')`
  background: #fff;
  overflow: hidden;
  transition: transform 0.25s ease-in-out;
  z-index: 1;
  ${props =>
    !props.sidebarVisible
      ? `
  pointer-events: auto;
  position: relative;
`
      : `
  pointer-events: none;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transform: translate(-100%,0);
  transform: translate3d(-100%,0,0);
  width: 100%;
  z-index: 9998;
  @media only screen and (min-width: 600px) {
    transform: translate(-600px,0);
    transform: translate3d(-600px,0,0);
  }
`};
`;
