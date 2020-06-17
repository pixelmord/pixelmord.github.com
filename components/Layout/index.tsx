import * as React from 'react';

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
    <>
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
      <PageSidebar sidebarVisible={sidebarVisible} setSidebarVisibility={setSidebarVisibility} />
    </>
  );
};

export default Layout;
