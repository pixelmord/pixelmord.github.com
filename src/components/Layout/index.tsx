import * as React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { Box, Flex } from 'prestyled';
import {
  textAlign,
  textStyle,
  space
} from 'styled-system';
import 'typeface-lato';
import 'modern-normalize';


import HtmlHead from '../HtmlHead';
import { GlobalStyle } from '../../styles';
import * as andreassahle from '../gfx/andreas_sahle.png';
import * as Logo from '../gfx/AndreasSahle.inline.svg';

const Header = styled(Box)`
  border-bottom: 1px solid #e5e7e9;
`.withComponent('header');

const HeroLead = styled('h2')`
  ${textStyle}
  ${textAlign}
  ${space}
`;
const HeroHeadline = styled('h1')`
  ${textStyle}
  ${textAlign}
  ${space}
`;

const Avatar = styled('img')`
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  box-shadow: 0 0 1px 11px rgba(210, 0, 104, 0.15), 0 0 1px 22px rgba(210, 0, 104, 0.1);
  display: inline-block;
  height: 130px;
  width: 130px;
  transition: box-shadow .25s ease-in-out;
  :hover {
    box-shadow: 0 0 1px 33px rgba(210, 0, 104, 0.1), 0 0 1px 66px rgba(210, 0, 104, 0.05);
  }
`;

const PageOverlay = styled('div')`
  background-color: rgba(255, 255, 255, 0.75);
  bottom: 0;
  cursor: ew-resize;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  ${props => !props.sidebarVisible ? `
    opacity: 0;
    right: 0;
    z-index: -1;
    visibility: hidden;
    transition: right .25s ease-in-out, opacity .25s ease-in-out, visibility 0s .25s ease-in-out;
  `: `
    opacity: 1;
    right: 100%;
    z-index: 9999;
    visibility: visible;
    transition: opacity .25s ease-in-out, right .25s ease-in-out;
    @media only screen and (min-width: 600px) {
      right: 600px;
    }
  `};
`;

const PageHeader: React.FC<{ landingPage: boolean }> = props => {
  const {landingPage} = props;
  return (
    <Header bg="grayLighter" mb={[2,4]} px={[2, 3]} py={[1, 2]} {...props}>
      <Flex>
        <Logo />
      </Flex>
      {landingPage === true && (
        <Box mt={5} maxWidth={['100%', 720]} ml="auto" mr="auto">
          <Box width={130}  ml="auto" mr="auto" mb={4}>
            <Avatar src={andreassahle} alt="Andreas Sahle" />
          </Box>
          <HeroLead textStyle="h2" textAlign="center" mb={[2]}>Nice to meet you!</HeroLead>
          <HeroHeadline textStyle="h6" textAlign="center">My name is Andreas Sahle. I'm a lead frontend developer, tech lead and speaker based in Munich, Germany.</HeroHeadline>
        </Box>
      )}
    </Header>
  );
};

const Page = styled('div')`
  background: #fff;
  overflow: hidden;
  transition: transform .25s ease-in-out;
  z-index: 1;
  ${props => !props.sidebarVisible ? `
    pointer-events: auto;
    position: relative;
  `: `
    pointer-events: none;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    transform: translate(-100%,0);
    transform: translate3d(-100%,0,0);
    width: 100%;
    z-index: 9998;
    @media only screen and (min-width: 600px) {
      transform: translate(-600px,0);
      transform: translate3d(-600px,0,0);
    }
  `};
`;

const PageSidebar = styled('aside')`
  width: 100%;
  background: ${props => props.theme.colors.grayBlack};
  bottom: 0;
  color: #fff;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 0;
  @media only screen and (min-width: 600px) {
    width: 600px;
  }
  ${props => !props.sidebarVisible ? `
    transition: visibility 0s .25s;
    visibility: hidden;
  `: `
    transition: none;
    visibility: visible;
  `};
`;

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
}

const Layout: React.FC<{ landingPage: boolean }> = props => {
  const { children, landingPage } = props;
  const [sidebarVisible, setSidebarVisibility] = React.useState(false);
  return (
    <React.Fragment>
      <GlobalStyle />
      <HtmlHead />
      <Page sidebarVisible={sidebarVisible}>
        <PageHeader landingPage={landingPage} sidebarVisible={sidebarVisible} setSidebarVisibility={setSidebarVisibility} {...props} />
        {children}
      </Page>
      <PageOverlay sidebarVisible={sidebarVisible} />
      <PageSidebar sidebarVisible={sidebarVisible} />
    </React.Fragment>
  );
};

export default Layout;
