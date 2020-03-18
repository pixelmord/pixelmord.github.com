/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export const Container: React.FC = props => (
  <Box
    {...props}
    mx="auto"
    px={[2, 0]}
    sx={{
      maxWidth: ['100%', '45rem'],
    }}
  />
);
