/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
const MenuItem: React.FC = props => (
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
const GatsbyLink: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = props => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      display: 'inline-block',
      textDecoration: 'none',
      color: 'white',
      '&.active': {
        color: 'primaryLightest',
      },
    }}
  />
);
export const PageSidebarNavigation: React.FC = props => {
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
          <GatsbyLink to="/about-andreas-sahle">About me</GatsbyLink>
        </MenuItem>
        <MenuItem>
          <GatsbyLink to="/blog">Blog</GatsbyLink>
        </MenuItem>
      </ul>
    </nav>
  );
};
