/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Jonas K Frank Portfolio",
    description: "En side hvor jeg viser nogle af de ting jeg har lært om JavaScript, React, Gatsby.js og andre front-end developer programmeringssprog",
    author: "Jonas K Frank",
    twitterUsername: "@jonsKfrank",
    image: "/Jonas.jpg",
    siteUrl: "https://gatsby-strapi-tut.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`,`projects`,`blogs`],
        singleTypes: [`about`]
      }, 
    },
/*     {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    }, */
  ],
}
