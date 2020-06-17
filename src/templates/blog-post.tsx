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
interface Serializers {
  marks: {
    link: React.FC<{ mark: { href?: string } }>;
  };
  types: {
    block: React.FC<{ node: { style: string } }>;
  };
}
const serializers: Serializers = {
  marks: {
    // eslint-disable-next-line react/display-name
    link: props => <Styled.a {...props.mark}>{props.children}</Styled.a>,
  },
  types: {
    block: props => {
      const { style = 'normal' } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, '');
        switch (level) {
          case '2':
            return <Styled.h2>{props.children}</Styled.h2>;
          case '3':
            return <Styled.h3>{props.children}</Styled.h3>;
          case '4':
            return <Styled.h4>{props.children}</Styled.h4>;
          case '5':
            return <Styled.h5>{props.children}</Styled.h5>;
          case '6':
            return <Styled.h6>{props.children}</Styled.h6>;
          default:
            return <Styled.h1>{props.children}</Styled.h1>;
        }
      }

      if (style === 'p') {
        return <Styled.p>{props.children}</Styled.p>;
      }
      if (style === 'blockquote') {
        return <blockquote>- {props.children}</blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
  },
};
const BlogPost = ({
  data,
}: {
  data: { sanityPost: PostTeaserProps['post'] & { _rawBody: {} } };
}) => (
  <Layout landingPage={false}>
    <Container>
      <article>
        <Styled.h1>{data.sanityPost.title}</Styled.h1>
        {!!data.sanityPost.heroImage.asset && (
          <Img
            fluid={data.sanityPost.heroImage.asset.fluid}
            alt={data.sanityPost.title}
          />
        )}
        <BlockContent
          blocks={data.sanityPost._rawBody}
          serializers={serializers}
        />
        <br />
        <br />
        <Link to="/blog">Back to blog overview</Link>
      </article>
    </Container>
  </Layout>
);
export default BlogPost;
