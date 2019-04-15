import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled, { StyledComponent } from '@emotion/styled';
import { textAlign, textStyle, space } from 'styled-system';
import { Box, Theme } from 'prestyled';
import { format } from 'date-fns';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'gatsby-image';

const Headline = styled('h2')`
    ${textStyle}
    ${textAlign}
    ${space}
  `;

const Post = styled(Box)`
  position: relative;
`.withComponent('article');

const Meta: StyledComponent<
  React.PropsWithoutRef<JSX.IntrinsicElements['time']>,
  {},
  Theme
> = styled(Box)`
  color: ${props => props.theme.colors.grayDark};
  font-size: 0.77778rem;
  letter-spacing: 2px;
  margin-bottom: 1.42857em;
  text-transform: uppercase;
`.withComponent('time');

const ImageLink = styled(Link)`
  display: block;

  @media screen and (min-width: 800px) {
    position: absolute;
    top: 2rem;
    left: 0;
    transform: translateX(-110%);
    width: 150px;
    height: auto;
  }
  img {
    border-radius: 3px;
  }
`;

const CategoryTag = styled(Box)`
  display: inline-block;
  margin-right: 1rem;
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => props.theme.colors.primary};
  :before {
    content: '#';
  }
`;
export interface IPostTeaserProps {
  post: {
    slug: { current: string };
    title: string;
    _createdAt: string;
    _rawTeaser: string;
    heroImage: {
      asset: {
        fluid: any;
      };
    };
    categories: Array<{
      title: string;
      id: string;
    }>;
  };
}
export const PostTeaser: React.FC<IPostTeaserProps> = props => {
  const { post } = props;
  const humanReadableDate = format(new Date(post._createdAt), 'MMMM DD, YYYY');
  const date = format(new Date(post._createdAt), 'YYYY-MM-DD');
  return (
    <Post>
      <Meta dateTime={date}>{humanReadableDate}</Meta>
      <Headline textStyle="h3" mb={[1]}>
        <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
      </Headline>
      {!!post.heroImage.asset && (
        <ImageLink to={`/blog/${post.slug.current}`}>
          <Image fluid={post.heroImage.asset.fluid} alt={post.title} />
        </ImageLink>
      )}
      <BlockContent blocks={post._rawTeaser} />
      <div>
        {post.categories.map(category => (
          <CategoryTag key={category.id}>{category.title}</CategoryTag>
        ))}
      </div>
    </Post>
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
