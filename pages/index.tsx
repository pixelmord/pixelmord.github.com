import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';
import { PostTeaser } from '../components/Blog/PostTeaser';
import { SectionTitle } from '../components/typography/SectionTitle';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  readonly data: {
    allSanityPost: { nodes: { _id: string }[] };
  };
}
const Index: React.FC<IndexPageProps> = props => {
  const {
    data: {
      allSanityPost: { nodes },
    },
  } = props;
  return (
    <Layout landingPage={true}>
      <Container>
        <SectionTitle>Latest Articles</SectionTitle>
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
        ...PostFragment
      }
    }
  }
`;
