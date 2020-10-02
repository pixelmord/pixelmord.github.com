/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { TinaCMS } from 'tinacms';
import { Button } from 'prestyled';

export interface EditLinkProps {
  cms: TinaCMS;
}
export const TinaEditLink: React.FC<EditLinkProps> = (props: PropsWithoutRef<PropsWithChildren<EditLinkProps>>) => (
  <Button {...props} />
);
export default TinaEditLink;
