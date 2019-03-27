import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme } from 'prestyled';
import { transparentize } from 'polished';

export const Avatar: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['img']>,
  { size: number },
  Theme
> = styled('img')`
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  box-shadow: 0 0 1px ${props => Math.round(props.size / 10) + 'px'}
      ${props => transparentize(0.5, props.theme.colors.primary)},
    0 0 1px ${props => Math.round(props.size / 5) + 'px'}
      ${props => transparentize(0.7, props.theme.colors.primary)};
  display: inline-block;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  transition: box-shadow 0.25s ease-in-out;
  :hover {
    box-shadow: 0 0 1px ${props => Math.round(props.size / 3) + 'px'}
        ${props => transparentize(0.7, props.theme.colors.primary)},
      0 0 1px ${props => Math.round(props.size / 1.5) + 'px'}
        ${props => transparentize(0.9, props.theme.colors.primary)};
  }
`;
