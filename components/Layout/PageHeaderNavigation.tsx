/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, GatsbyLinkProps } from 'gatsby';

export const PageHeaderNavigation: React.FC = props => {
  const Nav: React.FC = props => (
    <nav
      {...props}
      sx={{
        flex: '1 1 auto',
        display: 'none',
        marginLeft: '1.5em',
        '@media screen and (min-width: 800px)': {
          display: 'flex',
        },
      }}
    />
  );

  const Menu: React.FC = props => (
    <ul
      {...props}
      sx={{
        flex: '1 1 auto',
        margin: '0',
        padding: '0',
        marginTop: '0.4em',
        marginBottom: '0.4em',
        listStyle: 'none',
      }}
    />
  );
  const MenuItem: React.FC = props => (
    <li
      {...props}
      sx={{
        display: 'inline-block',
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
        textTransform: 'uppercase',
        color: 'grayDarkest',
        '&.active': {
          color: 'primary',
        },
      }}
    />
  );

  return (
    <Nav aria-label="Primary Navigation">
      <Menu>
        <MenuItem>
          <GatsbyLink to="/about-andreas-sahle">About me</GatsbyLink>
        </MenuItem>
        <MenuItem>
          <GatsbyLink to="/blog">Blog</GatsbyLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};
