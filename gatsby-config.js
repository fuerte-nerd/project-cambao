const colors = require("./colors")

module.exports = {
  siteMetadata: {
    title: `Fuerteventura Dog Rescue`,
    description: {
      en:
        "We take care of the abandoned and mistreated dogs from the La Oliva area of Fuerteventura",
      es:
        "Nos ocupamos de los perros abandonados y maltratados de la zona de La Oliva en Fuerteventura",
      de:
        "Wir kümmern uns um die ausgesetzten und misshandelten Hunde aus dem La Oliva Gebiet von Fuerteventura",
      fr:
        "Nous prenons soin des chiens abandonnés et maltraités de la région de La Oliva de Fuerteventura",
      it:
        "Ci prendiamo cura dei cani abbandonati e maltrattati della zona La Oliva di Fuerteventura",
    },
    supportedLanguages: ["en", "es", "de", "fr", "it"],
    url: "https://fuerteventuradogrescue.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              maxHeight: 400,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dogs`,
        path: `${__dirname}/dogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static_content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "en",
        langKeyForNull: "en",
        prefixDefault: true,
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-react-leaflet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fuerteventura Dog Rescue`,
        short_name: `FDR`,
        start_url: `/`,
        background_color: colors.fdr_blue,
        theme_color: colors.fdr_orange,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
