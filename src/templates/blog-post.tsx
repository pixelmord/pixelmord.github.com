/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Image, { FluidObject } from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';
import { PostTeaserProps } from '../components/Blog/PostTeaser';
export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      _rawBody
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

const Img: React.FC<{ alt: string; fluid: FluidObject }> = ({
  alt,
  ...props
}) => (
  <Image
    alt={alt}
    {...props}
    sx={{
      display: 'block',
      marginBottom: '1.66667em',
      '@media screen and (min-width: 800px)': {
        marginLeft: 'calc(360px - 47vw)',
        marginRight: 'calc(360px - 47vw)',
        maxWidth: '94vw',
        width: '94vw',
      },
      '@media screen and (min-width: 1141px)': {
        marginLeft: '-180px',
        marginRight: '-180px',
        maxWidth: '1080px',
        width: '1080px',
      },
    }}
  />
);
const BlogPost = ({
  data,
}: {
  data: { sanityPost: PostTeaserProps['post'] & { _rawBody: {} } };
}) => (
  <Layout landingPage={false}>
    <Container>
      <article>
        <Styled.h2>{data.sanityPost.title}</Styled.h2>
        {!!data.sanityPost.heroImage.asset && (
          <Img
            fluid={data.sanityPost.heroImage.asset.fluid}
            alt={data.sanityPost.title}
          />
        )}
        <BlockContent blocks={data.sanityPost._rawBody} />
        <br />
        <br />
        <Link to="/blog">Back to blog overview</Link>
      </article>
    </Container>
  </Layout>
);
export default BlogPost;
