import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

export const Avatar = styled('img')`
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  box-shadow: 0 0 1px 11px
      ${props => transparentize(0.5, props.theme.colors.primary)},
    0 0 1px 22px ${props => transparentize(0.7, props.theme.colors.primary)};
  display: inline-block;
  height: 130px;
  width: 130px;
  transition: box-shadow 0.25s ease-in-out;
  :hover {
    box-shadow: 0 0 1px 33px
        ${props => transparentize(0.7, props.theme.colors.primary)},
      0 0 1px 66px ${props => transparentize(0.9, props.theme.colors.primary)};
  }
`;
