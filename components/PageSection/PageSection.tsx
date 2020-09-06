/** @jsx jsx */
import { jsx, BoxProps } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { LandingPageSection, LandingPageSectionContent } from 'prestyled';

export type PageSectionProps = BoxProps;

export const PageSection: React.FC<PageSectionProps> = ({ children, ...rest }: PropsWithChildren<PageSectionProps>) => (
  <LandingPageSection {...rest}>
    <LandingPageSectionContent>{children}</LandingPageSectionContent>
  </LandingPageSection>
);
export default PageSection;
