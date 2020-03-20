/** @jsx jsx */
import { jsx } from 'theme-ui';

export const PageOverlay: React.FC<{
  sidebarVisible: boolean;
  onClick: (e: React.SyntheticEvent) => void;
}> = ({ sidebarVisible, ...rest }) => (
  <div
    {...rest}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      bottom: '0',
      cursor: 'ew-resize',
      left: '0',
      opacity: '0',
      position: 'absolute',
      right: '0',
      top: '0',
      ...(!sidebarVisible
        ? {
            opacity: '0',
            right: '0',
            zIndex: '-1',
            visibility: 'hidden',
            transition:
              'right .25s ease-in-out, opacity .25s ease-in-out, visibility 0s .25s ease-in-out',
          }
        : {
            opacity: '1',
            right: '100%',
            zIndex: '9999',
            visibility: 'visible',
            transition: 'opacity .25s ease-in-out, right .25s ease-in-out',
            '@media only screen and (min-width: 600px)': {
              right: '600px',
            },
          }),
    }}
  />
);
