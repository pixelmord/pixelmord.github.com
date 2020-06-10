/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import * as React from 'react';
import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';
import { SectionTitle } from '../components/typography/SectionTitle';

const About: React.FC = () => {
  return (
    <Layout landingPage={false}>
      <Container>
        <SectionTitle>My name is Andreas Sahle</SectionTitle>
        <Styled.h3>I&#39;m a lead frontend engineer, tech lead and speaker based in Munich, Germany.</Styled.h3>
        <p>
          My focus is the development of interfaces for web applications with the latest technologies for front-end
          development, GraphQL and headless CMSs.
          <br />
          I&#39;m sharing my expertise through consulting and training for developers and IT companies and as speaker on
          international conferences and local meetups. I lead agile teams of developers in mixed remote and local
          settings and consult clients in project discoveries and continuous development. I&#39;m a keen advocate for
          open source and actively support the Drupal community and the further development of this content management
          framework.
        </p>
        <p>
          <strong>Specialties:</strong> JavaScript, ReactJS, GraphQL, MVC frameworks, SPA, PWA, Front-end development,
          JavaScript fullstack, mobile web, Drupal, UI design, UX design, 3D visualisation and animation, agile
          development methodology, scrum, JIRA
        </p>
      </Container>
    </Layout>
  );
};

export default About;
