/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:'My first Gatsby tutorial',
    description:'This is my first Gatsby tutorial with a lot of GraphQL',
    author: '@JonasFrank',
    data: ['itm 1', 'item 2'],
    person: {name: 'Jeppe', age: 45}
  },
  plugins: [`gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
],
  
}
