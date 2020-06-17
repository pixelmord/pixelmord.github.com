import * as React from 'react';
import Layout from '~components/Layout';
import { Container } from '~components/Layout/Container';
import { SectionTitle } from '~components/typography/SectionTitle';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  readonly data: {
    allSanityPost: { nodes: { _id: string }[] };
  };
}
const Index: React.FC<IndexPageProps> = props => {
  return (
    <Layout landingPage={true}>
      <Container>
        <SectionTitle>Latest Articles</SectionTitle>
      </Container>
    </Layout>
  );
};

export default Index;
