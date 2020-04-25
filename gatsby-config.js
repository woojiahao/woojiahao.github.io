require(`dotenv`).config()

const googleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS

module.exports = {
  siteMetadata: {
    title: `A Programmer's Perspective`,
    siteUrl: `https://woojiahao.github.io`,
    image: `/images/icon.png`,
    description: `The personal portfolio of Woo Jia Hao! Trekking down the path of programming and discussing my encounters with the unknown!`,
    repositoryUrl: `https://github.com/woojiahao.github.io`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsTrackingID,
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        path: `./src/posts/projects/`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`
          }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              showLineNumbers: true,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Programmer's Perspective`,
        short_name: `A Programmer's Perspective`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/images/icon.png`
      }
    }
  ]
}
