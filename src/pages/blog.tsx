import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { textAlign, textStyle, space } from 'styled-system';

import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';
import { PostTeaser } from '../components/Blog/PostTeaser';
import { SectionTitle } from '../components/typography/SectionTitle';

const Blog = ({
  data: {
    allSanityPost: { nodes },
  },
}: any) => (
  <Layout landingPage={false}>
    <Container>
      <SectionTitle>Latest Articles</SectionTitle>
      {nodes.map((post: any) => (
        <PostTeaser post={post} key={post._id} />
      ))}
    </Container>
  </Layout>
);

export default Blog;

export const pageQuery = graphql`
  query {
    allSanityPost(sort: { fields: _createdAt }) {
      nodes {
        ...PostFragment
      }
    }
  }
`;
