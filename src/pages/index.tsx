import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { Container } from '../components/Layout/Container';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <Layout landingPage={true}>
        <Container>Hello</Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
