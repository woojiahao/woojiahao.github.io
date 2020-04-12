import {graphql, useStaticQuery} from "gatsby"
import React from "react"

export default props => {
  const folder = props.folder
  const {allFile} = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {regex: "posts/image/"}}) {
          edges { 
            node { 
              relativeDirectory
              childImageSharp { fluid { src } }
            }
          }
        }
      }
    `
  )

  console.log(allFile)

  const images = allFile
    .edges
    .map(({node}) => {
      return {
        dir: node.relativeDirectory,
        src: node.childImageSharp.fluid.src
      }
    })
    .filter(({dir}) => dir.includes(folder))
    .map(({src}) => src)

  return (
    images.map(src => <img src={src} alt="Hi"/>)
  )
}


// const {edges: images} = useStaticQuery(
//   graphql`
//       query {
//         allFile(filter: {relativeDirectory: {in: "posts/image/"}}) {
//           edges {
//             node {
//               relativeDirectory
//               childImageSharp { fluid { src } }
//             }
//           }
//         }
//       }
//     `
// )
//
// const previews = images
//   .map(({node}) => {
//     return {
//       dir: node.relativeDirectory,
//       src: node.childImageSharp.fluid.src
//     }
//   })
//   .filter(({dir}) => dir.contains(project.images))
