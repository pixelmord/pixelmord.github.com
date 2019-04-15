import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme, Box } from 'prestyled';

export const SectionTitle: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
  {},
  Theme
> = styled('h3')`
  ${props => props.theme.textStyles.h6};
  letter-spacing: 2px;
  margin-bottom: 2rem;
  text-transform: uppercase;
  :after {
    background-color: ${props => props.theme.colors.primary};
    display: block;
    content: '';
    height: 1px;
    margin-top: 15px;
    width: 60px;
  }
`;
