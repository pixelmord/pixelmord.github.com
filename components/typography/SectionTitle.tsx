/** @jsx jsx */
import { jsx } from 'theme-ui';

export const SectionTitle: React.FC = props => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3
    {...props}
    sx={{
      variant: 'styles.h6',
      fontWeight: 'regular',
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
