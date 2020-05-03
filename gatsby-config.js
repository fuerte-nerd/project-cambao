const colors = require("./colors")

module.exports = {
  siteMetadata: {
    title: `Fuerteventura Dog Rescue`,
    description: `We take care of the abandoned and mistreated dogs from the La Oliva area of Fuerteventura`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-leaflet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fuerteventura Dog Rescue`,
        short_name: `FDR`,
        start_url: `/`,
        background_color: colors.fdr_blue,
        theme_color: colors.fdr_orange,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
