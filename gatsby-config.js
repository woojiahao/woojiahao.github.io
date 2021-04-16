require(`dotenv`).config()

const googleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS

module.exports = {
  siteMetadata: {
    title: `A Programmer's Perspective`,
    siteUrl: `https://woojiahao.github.io`,
    image: `/images/icon.png`,
    description: `The personal portfolio of Woo Jia Hao! Trekking down the path of programming and discussing my encounters with the unknown!`,
    repositoryUrl: `https://github.com/woojiahao/woojiahao.github.io`
  },
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          googleAnalyticsTrackingID
        ],
        gtagConfig: {
          anonymize_ip: true
        },
        pluginConfig: {
          head: false
        }
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Code Pro`,
          `Open Sans`,
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
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
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              // Filter about me markdown post
              const blogPosts = allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type !== null)
              return blogPosts.map(post => {
                const meta = post.node
                const postUrl = site.siteMetadata.siteUrl + meta.fields.slug
                return Object.assign({}, meta.frontmatter, {
                  description: meta.frontmatter.description,
                  date: meta.frontmatter.date,
                  url: postUrl,
                  guid: postUrl,
                  custom_elements: [{ "content:encoded": meta.html }]
                })
              })
            },
            query: `
              {                  
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      frontmatter {
                        description
                        title
                        date
                      }
                      html
                      fields { slug }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "A Programmer's Perspective RSS Feed"
          },
        ]
      }
    }
  ]
}
