import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      _rawBody
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ({ data }: any) => (
  <Layout>
    {!!data.sanityPost.mainImage && (
      <Image
        fluid={data.sanityPost.mainImage.asset.fluid}
        alt={data.sanityPost.title}
      />
    )}
    <h1>{data.sanityPost.title}</h1>
    <BlockContent blocks={data.sanityPost._rawBody} />
    <Link to="/">Back to home</Link>
  </Layout>
);
