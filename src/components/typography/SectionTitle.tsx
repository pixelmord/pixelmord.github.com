/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const SectionTitle: React.FC = props => (
  <Styled.h3
    {...props}
    sx={{
      letterSpacing: '2px',
      marginBottom: '2rem',
      textTransform: 'uppercase',
      ':after': {
        backgroundColor: 'primary',
        display: 'block',
        content: '""',
        height: '1px',
        marginTop: '15px',
        width: '60px',
      },
    }}
  />
);
