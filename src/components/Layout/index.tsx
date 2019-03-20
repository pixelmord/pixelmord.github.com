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
  children: any;
}

class Layout extends React.PureComponent<DefaultLayoutProps, {}> {
  public render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="Andreas Sahle - @pixelmord"
          meta={[
            {
              name: 'description',
              content:
                'I am a web worker, lead frontend developer, tech lead, team lead and open source evangelist.'
            },
            {
              name: 'keywords',
              content:
                'portfolio, Andreas Sahle, blog, webworker, javascript, typescript, GraphQL'
            }
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
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
