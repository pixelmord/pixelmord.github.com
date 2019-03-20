import * as React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from '../components/Layout';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <Layout>
        <h2>I am a web worker, maker and love to cook.</h2>
        <p>
          This site was built with help of the amazing{' '}
          <a href="https://www.gatsbyjs.org/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTA2IDI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDYgMjgiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiNmZmZ9LnN0MXtmaWxsOiM2Mzl9PC9zdHlsZT48Zz48cGF0aCBkPSJNNjIuOSwxMmgyLjh2MTBoLTIuOHYtMS4zYy0xLDEuNS0yLjMsMS42LTMuMSwxLjZjLTMuMSwwLTUuMS0yLjQtNS4xLTUuM2MwLTMsMi01LjMsNC45LTUuM2MwLjgsMCwyLjMsMC4xLDMuMiwxLjZWMTJ6IE01Ny43LDE3YzAsMS42LDEuMSwyLjgsMi44LDIuOGMxLjYsMCwyLjgtMS4yLDIuOC0yLjhjMC0xLjYtMS4xLTIuOC0yLjgtMi44QzU4LjksMTQuMiw1Ny43LDE1LjQsNTcuNywxN3oiLz48cGF0aCBkPSJNNzEuMiwxNC40VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRINzEuMnoiLz48cGF0aCBkPSJNNzkuNywxNC40Yy0wLjctMC42LTEuMy0wLjctMS42LTAuN2MtMC43LDAtMS4xLDAuMy0xLjEsMC44YzAsMC4zLDAuMSwwLjYsMC45LDAuOWwwLjcsMC4yYzAuOCwwLjMsMiwwLjYsMi41LDEuNCBjMC4zLDAuNCwwLjUsMSwwLjUsMS43YzAsMC45LTAuMywxLjgtMS4xLDIuNWMtMC44LDAuNy0xLjgsMS4xLTMsMS4xYy0yLjEsMC0zLjItMS0zLjktMS43bDEuNS0xLjdjMC42LDAuNiwxLjQsMS4yLDIuMiwxLjIgYzAuOCwwLDEuNC0wLjQsMS40LTEuMWMwLTAuNi0wLjUtMC45LTAuOS0xbC0wLjYtMC4yYy0wLjctMC4zLTEuNS0wLjYtMi4xLTEuMmMtMC41LTAuNS0wLjgtMS4xLTAuOC0xLjljMC0xLDAuNS0xLjgsMS0yLjMgYzAuOC0wLjYsMS44LTAuNywyLjYtMC43YzAuNywwLDEuOSwwLjEsMy4yLDEuMUw3OS43LDE0LjR6Ii8+PHBhdGggZD0iTTg1LjgsMTMuM2MxLTEuNCwyLjQtMS42LDMuMi0xLjZjMi45LDAsNC45LDIuMyw0LjksNS4zYzAsMy0yLDUuMy01LDUuM2MtMC42LDAtMi4xLTAuMS0zLjItMS42VjIySDgzVjUuMmgyLjhWMTMuM3ogTTg1LjUsMTdjMCwxLjYsMS4xLDIuOCwyLjgsMi44YzEuNiwwLDIuOC0xLjIsMi44LTIuOGMwLTEuNi0xLjEtMi44LTIuOC0yLjhDODYuNiwxNC4yLDg1LjUsMTUuNCw4NS41LDE3eiIvPjxwYXRoIGQ9Ik05OC41LDIwLjVMOTMuNywxMkg5N2wzLjEsNS43bDIuOC01LjdoMy4ybC04LDE1LjNoLTMuMkw5OC41LDIwLjV6Ii8+PHBhdGggZD0iTTU0LDEzLjdoLTIuOGMwLDAtNC4yLDAtNC4yLDB2Mi44aDMuN2MtMC42LDEuOS0yLDMuMi00LjYsMy4yYy0yLjksMC01LTIuNC01LTUuM1M0My4xLDksNDYsOWMxLjYsMCwzLjIsMC44LDQuMiwyLjEgbDIuMy0xLjVDNTEsNy41LDQ4LjYsNi4zLDQ2LDYuM2MtNC40LDAtOCwzLjYtOCw4LjFzMy40LDguMSw4LDguMXM4LTMuNiw4LTguMUM1NC4xLDE0LjEsNTQsMTMuOSw1NCwxMy43eiIvPjwvZz48Zz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUsMTRoLTd2Mmg0LjhjLTAuNywzLTIuOSw1LjUtNS44LDYuNUw1LjUsMTFjMS4yLTMuNSw0LjYtNiw4LjUtNmMzLDAsNS43LDEuNSw3LjQsMy44bDEuNS0xLjMgQzIwLjksNC44LDE3LjcsMywxNCwzQzguOCwzLDQuNCw2LjcsMy4zLDExLjZsMTMuMiwxMy4yQzIxLjMsMjMuNiwyNSwxOS4yLDI1LDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLDE0LjFjMCwyLjgsMS4xLDUuNSwzLjIsNy42YzIuMSwyLjEsNC45LDMuMiw3LjYsMy4yTDMsMTQuMXoiLz48L2c+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDBDNi4zLDAsMCw2LjMsMCwxNHM2LjMsMTQsMTQsMTRzMTQtNi4zLDE0LTE0UzIxLjcsMCwxNCwweiBNNi4yLDIxLjhjLTIuMS0yLjEtMy4yLTQuOS0zLjItNy42TDEzLjksMjUgQzExLjEsMjQuOSw4LjMsMjMuOSw2LjIsMjEuOHogTTE2LjQsMjQuN0wzLjMsMTEuNkM0LjQsNi43LDguOCwzLDE0LDNjMy43LDAsNi45LDEuOCw4LjksNC41bC0xLjUsMS4zQzE5LjcsNi41LDE3LDUsMTQsNSBjLTMuOSwwLTcuMiwyLjUtOC41LDZMMTcsMjIuNWMyLjktMSw1LjEtMy41LDUuOC02LjVIMTh2LTJoN0MyNSwxOS4yLDIxLjMsMjMuNiwxNi40LDI0Ljd6Ii8+PC9nPjwvc3ZnPg=="
              alt="Gatsby logo"
              style={{
                width: '100px',
                height: 'auto',
                display: 'inline-block',
                verticalAlign: 'bottom'
              }}
            />
          </a>
        </p>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
