import * as React from 'react';
import { Styled } from 'theme-ui';
import 'typeface-lato';
import 'modern-normalize';

import HtmlHead from '../HtmlHead';

import { PageOverlay } from './PageOverlay';
import { Page } from './Page';
import { PageSidebar } from './PageSidebar';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

const Layout: React.FC<{ landingPage: boolean }> = props => {
  const { children, landingPage } = props;
  const [sidebarVisible, setSidebarVisibility] = React.useState(false);
  const toggleSidebar = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSidebarVisibility(!sidebarVisible);
  };
  return (
    <Styled.root>
      <HtmlHead />
      <Page sidebarVisible={sidebarVisible}>
        <PageHeader
          landingPage={landingPage}
          sidebarVisible={sidebarVisible}
          setSidebarVisibility={setSidebarVisibility}
          {...props}
        />
        {children}
        <PageFooter />
      </Page>
      <PageOverlay sidebarVisible={sidebarVisible} onClick={toggleSidebar} />
      <PageSidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisibility={setSidebarVisibility}
      />
    </Styled.root>
  );
};

export default Layout;
