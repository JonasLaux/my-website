/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-typescript",
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
  siteMetadata: {
    title: `jonas-laux-website`,
    description: `super website`,
    author: `Jonas Laux`,
    url: `https://jonas-laux.com`,
  },
}
