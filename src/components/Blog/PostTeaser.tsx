/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui';
import * as React from 'react';
import { graphql, Link } from 'gatsby';

import { format } from 'date-fns';
import BlockContent from '@sanity/block-content-to-react';
import Image, { FluidObject } from 'gatsby-image';

export interface PostTeaserProps {
  post: {
    slug: { current: string };
    title: string;
    _createdAt: string;
    _rawTeaser: string;
    heroImage: {
      asset: {
        fluid: FluidObject;
      };
    };
    categories: Array<{
      title: string;
      id: string;
    }>;
  };
}
export const PostTeaser: React.FC<PostTeaserProps> = props => {
  const { post } = props;
  const humanReadableDate = format(new Date(post._createdAt), 'MMMM dd, yyyy');
  const date = format(new Date(post._createdAt), 'yyyy-MM-dd');
  return (
    <article sx={{ position: 'relative' }}>
      <time
        sx={{
          color: 'grayDark',
          fontSize: '0.77778rem',
          letterSpacing: '2px',
          marginBottom: '1.42857em',
          textTransform: 'uppercase',
        }}
        dateTime={date}
      >
        {humanReadableDate}
      </time>
      <h2 sx={{ mb: 1, variant: 'styles.h3' }}>
        <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
      </h2>
      {!!post.heroImage.asset && (
        <Link
          to={`/blog/${post.slug.current}`}
          sx={{
            display: 'block',
            '@media screen and (min-width: 800px)': {
              position: 'absolute',
              top: '2rem',
              left: '0',
              transform: 'translateX(-110%)',
              width: '150px',
              height: 'auto',
            },
            img: {
              borderRadius: '3px',
            },
          }}
        >
          <Image fluid={post.heroImage.asset.fluid} alt={post.title} />
        </Link>
      )}
      <BlockContent blocks={post._rawTeaser} />
      <div>
        {post.categories.map(category => (
          <Box
            key={category.id}
            sx={{
              display: 'inline-block',
              marginRight: '1rem',
              fontSize: '2',
              color: 'primary',
              ':before': {
                content: "'#'",
              },
            }}
          >
            {category.title}
          </Box>
        ))}
      </div>
    </article>
  );
};

export const query = graphql`
  fragment PostFragment on SanityPost {
    _id
    title
    _createdAt
    _rawTeaser
    slug {
      current
    }
    categories {
      title
      id
    }
    heroImage {
      asset {
        fluid(maxWidth: 375) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;
