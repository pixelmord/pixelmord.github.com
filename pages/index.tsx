import * as React from 'react';
import Layout from '~components/Layout';
import { SectionTitle } from '~components/typography/SectionTitle';
import { LandingPageSection, LandingPageSectionContent } from 'prestyled';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  readonly data: {
    allSanityPost: { nodes: { _id: string }[] };
  };
}
const Index: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout landingPage={true}>
      <LandingPageSection>
        <LandingPageSectionContent>
          <SectionTitle>Latest Articles</SectionTitle>
        </LandingPageSectionContent>
      </LandingPageSection>
    </Layout>
  );
};

export default Index;
