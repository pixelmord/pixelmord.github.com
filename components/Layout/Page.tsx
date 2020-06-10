/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export const Page: React.FC<{ sidebarVisible: boolean }> = ({
  sidebarVisible,
  ...rest
}: {
  sidebarVisible: boolean;
}) => (
  <Box
    {...rest}
    bg="white"
    sx={{
      overflow: 'hidden',
      transition: 'transform 0.25s ease-in-out',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
      pointerEvents: !sidebarVisible ? 'auto' : 'none',
      position: !sidebarVisible ? 'relative' : 'fixed',
      zIndex: !sidebarVisible ? '1' : '9998',
      ...(sidebarVisible && {
        left: 0,
        top: 0,
        transform: 'translate3d(-100%,0,0)',
        '@media only screen and (min-width: 600px)': {
          transform: 'translate3d(-600px, 0, 0)',
          boxShadow: '0 1px 13px #000',
        },
      }),
    }}
  />
);
