/** @jsx jsx */
import { jsx } from 'theme-ui';
import { transparentize } from '@theme-ui/color';

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
      '--box-shadow-color-light': transparentize('primary', 0.9),
      '--box-shadow-color-med': transparentize('primary', 0.7),
      '--box-shadow-color-dark': transparentize('primary', 0.5),
      border: theme => `4px solid ${theme.colors.primary}`,
      boxShadow: `0 0 1px ${Math.round(
        size / 10
      )}px var(--box-shadow-color-dark), 0 0 1px ${Math.round(
        size / 5
      )}px var(--box-shadow-color-med)`,
      borderRadius: '100%',
      display: 'inline-block',
      height: `${size + 'px'}`,
      width: `${size + 'px'}`,
      transition: 'box-shadow 0.25s ease-in-out',
      ':hover': {
        boxShadow: `0 0 1px ${Math.round(
          size / 3
        )}px var(--box-shadow-color-med), 0 0 1px ${Math.round(
          size / 1.5
        )}px var(--box-shadow-color-light)`,
      },
    }}
  />
);
