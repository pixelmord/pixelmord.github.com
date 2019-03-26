import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Box, Flex, Text } from 'prestyled';
import { textAlign, textStyle, space } from 'styled-system';
import Particles from 'react-particles-js';
import 'typeface-lato';
import 'modern-normalize';

import HtmlHead from '../HtmlHead';
import { GlobalStyle } from '../../styles';
import andreassahle from '../gfx/andreas_sahle.png';
import Logo from '../gfx/AndreasSahle.inline.svg';

import { Container } from './Container';
import { Avatar } from './Avatar';
import { PageOverlay } from './PageOverlay';
import { Page } from './Page';
import { PageSidebar } from './PageSidebar';

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

const PageHeader: React.FC<{
  landingPage: boolean;
  sidebarVisible: boolean;
  setSidebarVisibility: (visible: boolean) => void;
}> = props => {
  const { landingPage } = props;
  return (
    <Header
      bg="grayLighter"
      mb={[2, 4]}
      px={[2, 3]}
      py={[1, 2]}
      position="relative"
      {...props}
    >
      <Flex>
        <Logo />
      </Flex>
      {landingPage === true && (
        <>
          <Particles
            width="100%"
            height="100%"
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 0;
            `}
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 700,
                  },
                },
                color: {
                  value: '#779fbd',
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#000000',
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#779fbd',
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab',
                  },
                  onclick: {
                    enable: true,
                    mode: 'push',
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              zIndex: '0',
            }}
          />
          <Container mt={5} position="relative">
            <Box width={130} ml="auto" mr="auto" mb={4}>
              <Avatar src={andreassahle} alt="Andreas Sahle" />
            </Box>
            <HeroLead textStyle="h2" textAlign="center" mb={[2]}>
              Nice to meet you!
            </HeroLead>
            <HeroHeadline textStyle="h6" textAlign="center">
              My name is Andreas Sahle. I'm a lead frontend engineer, tech lead
              and speaker based in Munich, Germany.
            </HeroHeadline>
          </Container>
        </>
      )}
    </Header>
  );
};

const PageFooter = styled('footer')`
  padding-bottom: ${props => props.theme.space[2]};
  padding-top: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[4]};
  color: ${props => props.theme.colors.grayDark};
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
        <PageHeader
          landingPage={landingPage}
          sidebarVisible={sidebarVisible}
          setSidebarVisibility={setSidebarVisibility}
          {...props}
        />
        {children}
        <PageFooter>
          <Container>
            <Text textAlign="center">
              This site was built with help of the amazing{' '}
              <a href="https://www.gatsbyjs.org/">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTA2IDI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDYgMjgiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiNmZmZ9LnN0MXtmaWxsOiM2Mzl9PC9zdHlsZT48Zz48cGF0aCBkPSJNNjIuOSwxMmgyLjh2MTBoLTIuOHYtMS4zYy0xLDEuNS0yLjMsMS42LTMuMSwxLjZjLTMuMSwwLTUuMS0yLjQtNS4xLTUuM2MwLTMsMi01LjMsNC45LTUuM2MwLjgsMCwyLjMsMC4xLDMuMiwxLjZWMTJ6IE01Ny43LDE3YzAsMS42LDEuMSwyLjgsMi44LDIuOGMxLjYsMCwyLjgtMS4yLDIuOC0yLjhjMC0xLjYtMS4xLTIuOC0yLjgtMi44QzU4LjksMTQuMiw1Ny43LDE1LjQsNTcuNywxN3oiLz48cGF0aCBkPSJNNzEuMiwxNC40VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRINzEuMnoiLz48cGF0aCBkPSJNNzkuNywxNC40Yy0wLjctMC42LTEuMy0wLjctMS42LTAuN2MtMC43LDAtMS4xLDAuMy0xLjEsMC44YzAsMC4zLDAuMSwwLjYsMC45LDAuOWwwLjcsMC4yYzAuOCwwLjMsMiwwLjYsMi41LDEuNCBjMC4zLDAuNCwwLjUsMSwwLjUsMS43YzAsMC45LTAuMywxLjgtMS4xLDIuNWMtMC44LDAuNy0xLjgsMS4xLTMsMS4xYy0yLjEsMC0zLjItMS0zLjktMS43bDEuNS0xLjdjMC42LDAuNiwxLjQsMS4yLDIuMiwxLjIgYzAuOCwwLDEuNC0wLjQsMS40LTEuMWMwLTAuNi0wLjUtMC45LTAuOS0xbC0wLjYtMC4yYy0wLjctMC4zLTEuNS0wLjYtMi4xLTEuMmMtMC41LTAuNS0wLjgtMS4xLTAuOC0xLjljMC0xLDAuNS0xLjgsMS0yLjMgYzAuOC0wLjYsMS44LTAuNywyLjYtMC43YzAuNywwLDEuOSwwLjEsMy4yLDEuMUw3OS43LDE0LjR6Ii8+PHBhdGggZD0iTTg1LjgsMTMuM2MxLTEuNCwyLjQtMS42LDMuMi0xLjZjMi45LDAsNC45LDIuMyw0LjksNS4zYzAsMy0yLDUuMy01LDUuM2MtMC42LDAtMi4xLTAuMS0zLjItMS42VjIySDgzVjUuMmgyLjhWMTMuM3ogTTg1LjUsMTdjMCwxLjYsMS4xLDIuOCwyLjgsMi44YzEuNiwwLDIuOC0xLjIsMi44LTIuOGMwLTEuNi0xLjEtMi44LTIuOC0yLjhDODYuNiwxNC4yLDg1LjUsMTUuNCw4NS41LDE3eiIvPjxwYXRoIGQ9Ik05OC41LDIwLjVMOTMuNywxMkg5N2wzLjEsNS43bDIuOC01LjdoMy4ybC04LDE1LjNoLTMuMkw5OC41LDIwLjV6Ii8+PHBhdGggZD0iTTU0LDEzLjdoLTIuOGMwLDAtNC4yLDAtNC4yLDB2Mi44aDMuN2MtMC42LDEuOS0yLDMuMi00LjYsMy4yYy0yLjksMC01LTIuNC01LTUuM1M0My4xLDksNDYsOWMxLjYsMCwzLjIsMC44LDQuMiwyLjEgbDIuMy0xLjVDNTEsNy41LDQ4LjYsNi4zLDQ2LDYuM2MtNC40LDAtOCwzLjYtOCw4LjFzMy40LDguMSw4LDguMXM4LTMuNiw4LTguMUM1NC4xLDE0LjEsNTQsMTMuOSw1NCwxMy43eiIvPjwvZz48Zz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMTRoLTd2Mmg0LjhjLTAuNywzLTIuOSw1LjUtNS44LDYuNUw1LjUsMTFjMS4yLTMuNSw0LjYtNiw4LjUtNmMzLDAsNS43LDEuNSw3LjQsMy44bDEuNS0xLjMgQzIwLjksNC44LDE3LjcsMywxNCwzQzguOCwzLDQuNCw2LjcsMy4zLDExLjZsMTMuMiwxMy4yQzIxLjMsMjMuNiwyNSwxOS4yLDI1LDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLDE0LjFjMCwyLjgsMS4xLDUuNSwzLjIsNy42YzIuMSwyLjEsNC45LDMuMiw3LjYsMy4yTDMsMTQuMXoiLz48L2c+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDBDNi4zLDAsMCw2LjMsMCwxNHM2LjMsMTQsMTQsMTRzMTQtNi4zLDE0LTE0UzIxLjcsMCwxNCwweiBNNi4yLDIxLjhjLTIuMS0yLjEtMy4yLTQuOS0zLjItNy42TDEzLjksMjUgQzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHogTTE2LjQsMjQuN0wzLjMsMTEuNkM0LjQsNi43LDguOCwzLDE0LDNjMy43LDAsNi45LDEuOCw4LjksNC41bC0xLjUsMS4zQzE5LjcsNi41LDE3LDUsMTQsNSBjLTMuOSwwLTcuMiwyLjUtOC41LDZMMTcsMjIuNWMyLjktMSw1LjEtMy41LDUuOC02LjVIMTh2LTJoN0MyNSwxOS4yLDIxLjMsMjMuNiwxNi40LDI0Ljd6Ii8+PC9nPjwvc3ZnPg=="
                  alt="Gatsby logo"
                  style={{
                    width: 'auto',
                    height: '18px',
                    display: 'inline-block',
                    verticalAlign: 'text-bottom',
                  }}
                />
              </a>
            </Text>
          </Container>
        </PageFooter>
      </Page>
      <PageOverlay sidebarVisible={sidebarVisible} />
      <PageSidebar sidebarVisible={sidebarVisible} />
    </React.Fragment>
  );
};

export default Layout;
