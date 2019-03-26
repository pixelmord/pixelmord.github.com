import * as React from 'react';
import { Box, IBoxProps } from 'prestyled';

export const Container: React.FC<IBoxProps> = ({ children, ...rest }) => (
  <Box maxWidth={['100%', 720]} ml="auto" mr="auto" {...rest}>
    {children}
  </Box>
);
