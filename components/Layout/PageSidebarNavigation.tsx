/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';

import NextNavLink from '~components/NextNavLink';
const MenuItem: React.FC = (props) => (
  <li
    {...props}
    sx={{
      fontSize: 4,
      marginRight: 2,
      paddingRight: 2,
      ':last-of-type': {
        borderRight: 'none',
      },
    }}
  />
);

export const PageSidebarNavigation: React.FC = (props) => {
  return (
    <nav aria-label="Primary Navigation">
      <ul
        sx={{
          margin: '0',
          padding: '0',
          marginTop: '0.4em',
          marginBottom: '0.4em',
          listStyle: 'none',
        }}
      >
        <MenuItem>
          <NextNavLink href="/about-andreas-sahle" passHref={true}>
            About me
          </NextNavLink>
        </MenuItem>
        <MenuItem>
          <NextNavLink href="/blog" passHref={true}>
            Blog
          </NextNavLink>
        </MenuItem>
        <MenuItem>
          <a
            href="/knowhow"
            target="_blank"
            sx={{
              display: 'inline-block',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            KnowHow
          </a>
        </MenuItem>
      </ul>
    </nav>
  );
};
