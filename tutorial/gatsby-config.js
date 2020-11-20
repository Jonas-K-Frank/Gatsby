/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title:'My first Gatsby tutorial',
    description:'This is my first Gatsby tutorial with a lot of GraphQL',
    author: 'JonasFrank',
    data: ['itm 1', 'item 2'],
    person: {name: 'Jeppe', age: 45}
  },
  plugins: [`gatsby-plugin-styled-components`,      `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `t32vilupbfaf`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.ACCES_TOKEN,
    },
  },
],
  
}
