/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';

export const Container: React.FC<BoxProps> = props => (
  <Box
    {...props}
    mx="auto"
    px={[2, 0]}
    sx={{
      maxWidth: ['100%', '45rem'],
    }}
  />
);
