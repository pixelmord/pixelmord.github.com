/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { transparentize } from '@theme-ui/color';

import Github from '../gfx/icons/github-brands.inline.svg?include';
import Twitter from '../gfx/icons/twitter-brands.inline.svg?include';
import Instagram from '../gfx/icons/instagram-brands.inline.svg?include';
import LinkedIn from '../gfx/icons/linkedin-in-brands.inline.svg?include';
import Xing from '../gfx/icons/xing-brands.inline.svg?include';
import Drupal from '../gfx/icons/icon-w-drupal.inline.svg?include';
const Link = ({ href, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a
    href={href}
    {...rest}
    sx={{
      '--box-shadow-color': transparentize('primary', 0.7),
      display: 'inline-block',
      lineHeight: 1,
      width: '40px',
      height: '40px',
      padding: '10px',
      bg: 'white',
      borderRadius: '100%',
      color: 'text',
      mx: '0.25em',
      mb: '0.35em',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out',
      ':hover,:active,:focus': {
        color: 'white',
        bg: 'primary',
        boxShadow: `0 0 1px 7px var(--box-shadow-color)`,
        outline: 0,
      },
    }}
  />
);
Link.defaultProps = {
  target: '_blank',
  rel: 'noreferrer',
};

export const SocialLinks: React.FC = props => {
  return (
    <Box my={[2, 4]} sx={{ textAlign: 'center' }}>
      <Link href="https://github.com/pixelmord" aria-label="Github user profile pixelmord">
        <div
          dangerouslySetInnerHTML={{ __html: Github }}
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
      <Link href="https://twitter.com/pixelmord" aria-label="Twitter user profile pixelmord">
        <div
          dangerouslySetInnerHTML={{ __html: Twitter }}
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
      <Link href="https://instagram.com/andreas.sahle" aria-label="Instagram user profile andreas.sahle">
        <div
          dangerouslySetInnerHTML={{ __html: Instagram }}
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/andreassahle/?locale=en_US"
        aria-label="LinkedIn user profile Andreas Sahle"
      >
        <div
          dangerouslySetInnerHTML={{ __html: LinkedIn }}
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
      <Link href="https://www.xing.com/profile/Andreas_Sahle" aria-label="Xing user profile Andreas Sahle">
        <div dangerouslySetInnerHTML={{ __html: Xing }} aria-hidden="true" style={{ width: '20px', height: '20px' }} />
      </Link>
      <Link href="https://www.drupal.org/u/pixelmord" aria-label="Drupal.org user profile Andreas Sahle">
        <div
          dangerouslySetInnerHTML={{ __html: Drupal }}
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
    </Box>
  );
};
