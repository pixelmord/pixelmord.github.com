/** @jsx jsx */
import { jsx, Styled, Box, Flex } from 'theme-ui';
import * as React from 'react';
import Particles from 'react-particles-js';
import { transparentize } from '@theme-ui/color';

import andreassahle from '../gfx/andreas_sahle.png';
import Hamburger from '../gfx/icons/round-menu-24px.inline.svg?include';
import { Avatar } from './Avatar';
import { Container } from './Container';
import { PageHeaderNavigation } from './PageHeaderNavigation';
import { SocialLinks } from './SocialLinks';
import NextLink from '~components/NextLink';
import { Heading } from 'prestyled';

export const PageHeader: React.FC<{
  landingPage: boolean;
  sidebarVisible: boolean;
  setSidebarVisibility: (visible: boolean) => void;
}> = (props) => {
  const { landingPage, sidebarVisible, setSidebarVisibility } = props;
  const SidebarToggle = (props: {
    children: JSX.Element;
    onClick: (e: React.SyntheticEvent) => void;
    'aria-label': string;
  }) => (
    <button
      {...props}
      sx={{
        '--box-shadow-color': transparentize('primary', 0.7),
        transition: 'box-shadow 0.2s ease-in-out',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'primary',
        borderRadius: '100%',
        border: 'none',
        color: 'white',
        width: '40px',
        height: '40px',
        p: 0,
        ':hover,:active,:focus': {
          boxShadow: `0 0 1px 7px var(--box-shadow-color)`,
          outline: '0',
        },
      }}
    />
  );

  const toggleSidebar = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSidebarVisibility(!sidebarVisible);
  };
  return (
    <Box
      bg="grayLighter"
      mb={[2, 4]}
      px={[2, 3]}
      py={[1, 2]}
      as="header"
      sx={{
        borderBottom: '1px solid #e5e7e9',
        position: 'relative',
      }}
      {...props}
    >
      <Flex
        sx={{
          position: 'relative',
          zIndex: 1,
          justifyContent: 'space-between',
        }}
      >
        <NextLink
          sx={{
            display: 'block',
            lineHeight: '1',
          }}
          href="/"
          passHref={true}
          title="Home"
        >
          <Avatar src={andreassahle} alt="Andreas Sahle" size={40} />
        </NextLink>
        <PageHeaderNavigation />
        <SidebarToggle onClick={toggleSidebar} aria-label="Show navigation">
          <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: Hamburger }} />
        </SidebarToggle>
      </Flex>
      {landingPage === true && (
        <React.Fragment>
          <Particles
            width="100%"
            height="100%"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
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
          <Container mt={5} sx={{ position: 'relative' }}>
            <Box sx={{ width: '130px' }} mx="auto" mb={4}>
              <Avatar src={andreassahle} alt="Andreas Sahle" size={130} />
            </Box>
            <Styled.h2 sx={{ textAlign: 'center', mb: 2 }}>Nice to meet you!</Styled.h2>
            <Heading
              as="h1"
              variant="h6"
              sx={{
                textAlign: 'center',
              }}
            >
              My name is Andreas Sahle. I&#39;m a lead frontend engineer, tech lead and speaker based in Munich,
              Germany.
            </Heading>
            <SocialLinks />
          </Container>
        </React.Fragment>
      )}
    </Box>
  );
};
