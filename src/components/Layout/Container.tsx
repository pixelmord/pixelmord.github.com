import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from 'prestyled';

export const Container = styled(Box)``;

Container.defaultProps = {
  maxWidth: ['100%', '45rem'],
  mx: 'auto',
  px: [2, 0],
};
