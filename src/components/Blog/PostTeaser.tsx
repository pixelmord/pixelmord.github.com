import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { textAlign, textStyle, space } from 'styled-system';

const Headline = styled('h2')`
    ${textStyle}
    ${textAlign}
    ${space}
  `;

export const PostTeaser = props => {
  const { post } = props;
  return (
    <article>
      <Headline textStyle="h3">
        <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
      </Headline>
    </article>
  );
};
