import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { Theme } from 'prestyled';
import { Button } from 'prestyled';
import { transparentize } from 'polished';

import { PageSidebarNavigation } from './PageSidebarNavigation';
import Close from '../gfx/icons/round-close-24px.inline.svg';

const Sidebar: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
  { sidebarVisible: boolean },
  Theme
> = styled('aside')`
  width: 100%;
  background: #2f313d;
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

const Scrollpane = styled('div')`
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  position: relative;
`;

const SidebarContent = styled('div')`
  padding: 75px 3vw 2.5em;
  position: relative;
  @media screen and (min-width: 600px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const SidebarToggle = styled(Button)`
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1em;
  right: 2em;
  :hover,
  :active,
  :focus {
    box-shadow: 0 0 1px 7px
      ${props => transparentize(0.7, props.theme.colors.primary)};
    outline: 0;
  }
`;
SidebarToggle.defaultProps = {
  bg: 'primary',
  borderRadius: '100%',
  border: 'none',
  color: 'white',
  width: 40,
  height: 40,
};

export const PageSidebar: React.FC<{
  sidebarVisible: boolean;
  setSidebarVisibility: (visible: boolean) => void;
}> = props => {
  const { sidebarVisible, setSidebarVisibility } = props;
  const toggleSidebar = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSidebarVisibility(!sidebarVisible);
  };
  return (
    <Sidebar sidebarVisible={sidebarVisible}>
      <Scrollpane>
        <SidebarContent>
          <SidebarToggle onClick={toggleSidebar}>
            <Close aria-hidden="true" />
          </SidebarToggle>
          <PageSidebarNavigation />
        </SidebarContent>
      </Scrollpane>
    </Sidebar>
  );
};
