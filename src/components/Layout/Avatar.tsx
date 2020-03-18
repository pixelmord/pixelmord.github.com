/** @jsx jsx */
import { jsx } from 'theme-ui';
import { transparentize } from 'polished';

export const Avatar = ({
  alt,
  src,
  size,
  ...rest
}: {
  alt: string;
  src: string;
  size: number;
}) => (
  <img
    alt={alt}
    src={src}
    {...rest}
    sx={{
      border: theme => `4px solid ${theme.colors.primary}`,
      boxShadow: theme =>
        `0 0 1px ${Math.round(size / 10)}px ${transparentize(
          0.5,
          theme.colors.primary
        )}, 0 0 1px ${Math.round(size / 5)}px ${transparentize(
          0.7,
          theme.colors.primary
        )}`,
      borderRadius: '100%',
      display: 'inline-block',
      height: `${size + 'px'}`,
      width: `${size + 'px'}`,
      transition: 'box-shadow 0.25s ease-in-out',
      ':hover': {
        boxShadow: theme =>
          `0 0 1px ${Math.round(size / 3)}px ${transparentize(
            0.7,
            theme.colors.primary
          )}, 0 0 1px ${Math.round(size / 1.5)}px ${transparentize(
            0.9,
            theme.colors.primary
          )}`,
      },
    }}
  />
);
