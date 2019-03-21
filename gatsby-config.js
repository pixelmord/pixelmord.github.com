require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Andreas Sahle - @pixelmord`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ]
};
