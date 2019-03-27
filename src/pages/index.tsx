import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';
import { PostTeaser } from '../components/Blog/PostTeaser';
// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

const Index: React.FC = (props: any) => {
  const {
    data: {
      allSanityPost: { nodes },
    },
  } = props;
  return (
    <Layout landingPage={true}>
      <Container>
        {nodes.map((post: any) => (
          <PostTeaser post={post} key={post._id} />
        ))}
      </Container>
    </Layout>
  );
};

export default Index;

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
