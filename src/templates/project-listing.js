import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

export default ({data}) => (
  <Layout>
    <p>{data.title}</p>
  </Layout>
)

// TODO Add more fields in the future like end and libraries
export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          images
          lessons
          description
          duration {
            start
          }
          technologies {
            languages
          }
        }
      }
    }
  }
`
