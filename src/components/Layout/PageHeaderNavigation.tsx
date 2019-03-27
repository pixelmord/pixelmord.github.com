import * as React from 'react';
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/core';
import { Link as GatsbyLink } from 'gatsby';

import { withTheme } from 'emotion-theming';

import { Flex, Box, Theme } from 'prestyled';

export const PageHeaderNavigation: React.FC = props => {
  const Nav = styled(Flex)`
    flex: 1 1 auto;
    display: none;
    margin-left: 1.5em;
    @media screen and (min-width: 800px) {
      display: flex;
    }
  `.withComponent('nav');

  const Menu = styled(Flex)`
    flex: 1 1 auto;
    margin: 0;
    padding: 0;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    list-style: none;
  `.withComponent('ul');

  const MenuItem = styled(Box)`
    display: inline-block;
    font-size: ${props => props.theme.fontSizes[4]};
    margin-right: ${props => props.theme.space[2]};
    padding-right: ${props => props.theme.space[2]};
    :last-of-type {
      border-right: none;
    }
  `.withComponent('li');

  const LinkTag = styled(GatsbyLink)`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colors.grayDarkest};
  `;

  const Link = withTheme(
    ({
      children,
      theme,
      ...rest
    }: {
      to: string;
      theme?: Theme;
      children: React.ReactNode;
    }) => (
      <ClassNames>
        {({ css, cx }) => (
          <LinkTag
            {...rest}
            activeClassName={css`
              color: ${theme.colors.primary} !important;
            `}
          >
            {children}
          </LinkTag>
        )}
      </ClassNames>
    )
  );

  return (
    <Nav aria-label="Primary Navigation">
      <Menu>
        <MenuItem>
          <Link to="/about-andreas-sahle">About me</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};
