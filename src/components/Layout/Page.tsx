import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme, Box } from 'prestyled';

export const Page: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
  { sidebarVisible: boolean },
  Theme
> = styled(Box)`
  background: #fff;
  overflow: hidden;
  transition: transform 0.25s ease-in-out;
  min-height: 100vh;
  ${props =>
    !props.sidebarVisible
      ? `
    pointer-events: auto;
    position: relative;
    z-index: 1;
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
      box-shadow: 0 1px 13px #000;
    }
  `};
`;
