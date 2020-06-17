/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import * as React from 'react';
import { format } from 'date-fns';
import { Image } from 'prestyled';
import { NextLink as Link } from '../NextLink';
export interface PostTeaserProps {
  post: {
    slug: { current: string };
    title: string;
    _createdAt: string;
    _rawTeaser: string;
    heroImage: string;
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
        <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
      </h2>
      {!!post.heroImage && (
        <Link
          href={`/blog/${post.slug.current}`}
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
          <Image src={post.heroImage} alt={post.title} />
        </Link>
      )}

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
