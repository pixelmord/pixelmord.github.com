import * as React from 'react';
import styled from '@emotion/styled';
import { textAlign, textStyle, space } from 'styled-system';
import { Link as GatsbyLink } from 'gatsby';
import { css } from '@emotion/core';
import { Box, Flex, Button } from 'prestyled';
import Particles from 'react-particles-js';
import { transparentize } from 'polished';

import andreassahle from '../gfx/andreas_sahle.png';
import Hamburger from '../gfx/icons/round-menu-24px.inline.svg';
import { Avatar } from './Avatar';
import { Container } from './Container';
import { PageHeaderNavigation } from './PageHeaderNavigation';
import { SocialLinks } from './SocialLinks';

export const PageHeader: React.FC<{
  landingPage: boolean;
  sidebarVisible: boolean;
  setSidebarVisibility: (visible: boolean) => void;
}> = props => {
  const { landingPage, sidebarVisible, setSidebarVisibility } = props;
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
  const Link = styled(GatsbyLink)`
    display: block;
    line-height: 1;
  `;
  const SidebarToggle = styled(Button)`
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover,
    :active,
    :focus {
      box-shadow: 0 0 1px 7px
        ${props => transparentize(0.7, props.theme.colors.primary)};
      outline: 0;
    }
  `;
  SidebarToggle.defaultProps = {
    bg: 'primary',
    borderRadius: '100%',
    border: 'none',
    color: 'white',
    width: 40,
    height: 40,
  };
  const toggleSidebar = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSidebarVisibility(!sidebarVisible);
  };
  return (
    <Header
      bg="grayLighter"
      mb={[2, 4]}
      px={[2, 3]}
      py={[1, 2]}
      position="relative"
      {...props}
    >
      <Flex position="relative" zIndex={1} justifyContent="space-between">
        <Link to="/" title="Home">
          <Avatar src={andreassahle} alt="Andreas Sahle" size={40} />
        </Link>
        <PageHeaderNavigation />
        <SidebarToggle onClick={toggleSidebar} aria-label="Show navigation">
          <Hamburger aria-hidden="true" />
        </SidebarToggle>
      </Flex>
      {landingPage === true && (
        <React.Fragment>
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
              <Avatar src={andreassahle} alt="Andreas Sahle" size={130} />
            </Box>
            <HeroLead textStyle="h2" textAlign="center" mb={[2]}>
              Nice to meet you!
            </HeroLead>
            <HeroHeadline textStyle="h6" textAlign="center">
              My name is Andreas Sahle. I'm a lead frontend engineer, tech lead
              and speaker based in Munich, Germany.
            </HeroHeadline>
            <SocialLinks />
          </Container>
        </React.Fragment>
      )}
    </Header>
  );
};
