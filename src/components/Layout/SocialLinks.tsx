import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from 'prestyled';
import { transparentize } from 'polished';

import Github from '../gfx/icons/github-brands.inline.svg';
import Twitter from '../gfx/icons/twitter-brands.inline.svg';
import Instagram from '../gfx/icons/instagram-brands.inline.svg';
import LinkedIn from '../gfx/icons/linkedin-in-brands.inline.svg';
import Xing from '../gfx/icons/xing-brands.inline.svg';
import Drupal from '../gfx/icons/icon-w-drupal.inline.svg';

export const SocialLinks: React.FC = props => {
  const Link = styled('a')`
    display: inline-block;
    line-height: 1;
    width: 40px;
    height: 40px;
    padding: 10px;
    background: white;
    border-radius: 100%;
    color: ${props => props.theme.colors.text};
    margin-left: 0.25em;
    margin-right: 0.25em;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    :hover,
    :active,
    :focus {
      color: white;
      background: ${props => props.theme.colors.primary};
      box-shadow: 0 0 1px 7px
        ${props => transparentize(0.7, props.theme.colors.primary)};
      outline: 0;
    }
  `;
  Link.defaultProps = {
    target: '_blank',
    rel: 'noreferrer',
  };
  return (
    <Box {...props} my={[2, 4]} textAlign="center">
      <Link
        href="https://github.com/pixelmord"
        aria-label="Github user profile pixelmord"
      >
        <Github aria-hidden="true" style={{ width: '20px', height: '20px' }} />
      </Link>
      <Link
        href="https://twitter.com/pixelmord"
        aria-label="Twitter user profile pixelmord"
      >
        <Twitter aria-hidden="true" style={{ width: '20px', height: '20px' }} />
      </Link>
      <Link
        href="https://instagram.com/andreas.sahle"
        aria-label="Instagram user profile andreas.sahle"
      >
        <Instagram
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/andreassahle/?locale=en_US"
        aria-label="LinkedIn user profile Andreas Sahle"
      >
        <LinkedIn
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </Link>
      <Link
        href="https://www.xing.com/profile/Andreas_Sahle"
        aria-label="Xing user profile Andreas Sahle"
      >
        <Xing aria-hidden="true" style={{ width: '20px', height: '20px' }} />
      </Link>
      <Link
        href="https://www.drupal.org/u/pixelmord"
        aria-label="Drupal.org user profile Andreas Sahle"
      >
        <Drupal aria-hidden="true" style={{ width: '20px', height: '20px' }} />
      </Link>
    </Box>
  );
};
