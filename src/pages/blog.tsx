import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { textAlign, textStyle, space } from 'styled-system';

import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';
import { PostTeaser } from '../components/Blog/PostTeaser';

export const pageQuery = graphql`
  query {
    allSanityPost(sort: { fields: _createdAt }) {
      nodes {
        _id
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
        slug {
          current
        }
        heroImage {
          asset {
            fluid(maxWidth: 150) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const Blog = ({
  data: {
    allSanityPost: { nodes },
  },
}: any) => (
  <Layout landingPage={false}>
    <Container>
      {nodes.map((post: any) => (
        <PostTeaser post={post} key={post._id} />
      ))}
    </Container>
  </Layout>
);

export default Blog;
