import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import * as config from '../../../config';
import theme from '../../gatsby-plugin-theme-ui';

export interface HtmlHead {
  title?: string;
}

export interface Head extends HtmlHead {
  data: {
    site: { buildTime: string };
  };
}
const Head: React.FC<Head> = props => {
  const {
    data: {
      site: { buildTime },
    },
    title,
  } = props;

  const htmlTitle = title ? `${title} | ${config.siteTitle}` : config.siteTitle;
  const description = config.siteDescription;

  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const homeURL = `${config.siteUrl}${realPrefix}`;
  const image = `${homeURL}${config.siteLogo}`;

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: homeURL,
    headline: config.siteHeadline,
    inLanguage: 'en',
    mainEntityOfPage: homeURL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: config.author,
    },
    publisher: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: '2019-03-22',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{htmlTitle}</title>
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="gatsby-starter" content="Gatsby Starter Portfolio Cara" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta
        name="msapplication-TileColor"
        content={theme.colors.msAppTileColor}
      />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={htmlTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
};
const queryHtmlHead = graphql`
  query HtmlHead {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;
const HtmlHead = (props: HtmlHead) => (
  <StaticQuery
    query={queryHtmlHead}
    render={data => <Head {...props} data={data} />}
  />
);

export default HtmlHead;
