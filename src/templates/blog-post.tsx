import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { textAlign, textStyle, space } from 'styled-system';
import Image from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      body {
        _key
        _type
        style
        children {
          _key
          _type
          text
        }
      }
      heroImage {
        asset {
          fluid(maxWidth: 1080) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
const Headline = styled('h1')`
    ${textStyle}
    ${textAlign}
    ${space}
  `;

const Img = styled(Image)`
  display: block;
  margin-bottom: 1.66667em;
  @media screen and (min-width: 800px) {
    margin-left: calc(360px - 47vw);
    margin-right: calc(360px - 47vw);
    max-width: 94vw;
    width: 94vw;
  }
  @media screen and (min-width: 1141px) {
    margin-left: -180px;
    margin-right: -180px;
    max-width: 1080px;
    width: 1080px;
  }
`;
export default ({ data }: any) => (
  <Layout landingPage={false}>
    <Container>
      <article>
        <Headline textStyle="h2">{data.sanityPost.title}</Headline>
        {!!data.sanityPost.heroImage.asset && (
          <Img
            fluid={data.sanityPost.heroImage.asset.fluid}
            alt={data.sanityPost.title}
          />
        )}
        <BlockContent blocks={data.sanityPost.body} />
        <Link to="/blog">Back to blog overview</Link>
      </article>
    </Container>
  </Layout>
);
