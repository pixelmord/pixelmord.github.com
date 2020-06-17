/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import * as React from 'react';
import { transparentize } from '@theme-ui/color';
import { PageSidebarNavigation } from './PageSidebarNavigation';
import Close from '../gfx/icons/round-close-24px.inline.svg?include';

const SidebarToggle: React.FC<{
  onClick: (e: React.SyntheticEvent) => void;
}> = props => (
  <Button
    {...props}
    bg="primary"
    color="white"
    sx={{
      '--box-shadow-color': transparentize('primary', 0.7),
      borderRadius: '100%',
      border: 'none',
      width: '40px',
      height: '40px',
      p: 0,
      transition: 'box-shadow 0.2s ease-in -out',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '1em',
      right: '2em',
      ':hover,:active,:focus': {
        boxShadow: `0 0 1px 7px var(--box-shadow-color)`,
        outline: 0,
      },
    }}
  />
);

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
    <aside
      sx={{
        width: '600px',
        background: '#2f313d',
        bottom: 0,
        color: 'white',
        position: 'absolute',
        right: 0,
        top: 0,
        '@media only screen and(min-width: 600px)': {
          width: '600px',
        },
        ...(!sidebarVisible
          ? {
              transition: 'visibility 0s .25s',
              visibility: 'hidden',
            }
          : {
              transition: 'none',
              visibility: 'visible',
            }),
      }}
    >
      <div
        sx={{
          height: '100%',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <div
          sx={{
            padding: '75px 3vw 2.5em',
            position: 'relative',
            '@media screen and (min-width: 600px)': {
              paddingLeft: '60px',
              paddingRight: '60px',
            },
          }}
        >
          <SidebarToggle onClick={toggleSidebar}>
            <div dangerouslySetInnerHTML={{ __html: Close }} aria-hidden="true" />
          </SidebarToggle>
          <PageSidebarNavigation />
        </div>
      </div>
    </aside>
  );
};
