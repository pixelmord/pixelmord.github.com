import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const Header = () => (
  <div
    style={{
      background: '#355645',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Andreas Sahle &nbsp;
        </Link>
        <a
          href="https://twitter.com/pixelmord"
          target="_blank"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          @pixelmord
        </a>
      </h1>
    </div>
  </div>
);

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
