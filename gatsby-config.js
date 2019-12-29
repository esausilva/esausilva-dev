require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Full-Stack Software Engineer`,
    description: `Esau Silva is a Full=Stack Software Engineer and avid Brazilian Jiu-Jitsu practitioner. In this site you can find more about him and his work as a Software Engineer.`,
    author: `@_esausilva`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Esau Silva - Full-Stack Software Engineer`,
        short_name: `Esau Silva`,
        start_url: `/`,
        background_color: `#18607B`,
        theme_color: `#18607B`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-16236406-5',
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'esausilva-dev/portfolio/',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
