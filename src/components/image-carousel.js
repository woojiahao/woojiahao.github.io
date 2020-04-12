import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import React, {useState} from "react"

export default props => {
  const [index, setIndex] = useState(0)

  const {allFile} = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {regex: "posts/image/"}}) {
          edges { 
            node { 
              relativeDirectory
              childImageSharp { 
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                } 
              }
            }
          }
        }
      }
    `
  )

  const images = allFile
    .edges
    .filter(({node}) => node.relativeDirectory.includes(props.folder))
    .map(({node}) => {
      return {
        id: node.id,
        fluid: node.childImageSharp.fluid
      }
    })

  const length = images.length - 1
  const handleNext = () => index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () => index === 0 ? setIndex(length) : setIndex(index - 1)
  const currentImage = images[index]

  return (
    <div>
      <div>
        <Img fluid={currentImage.fluid} key={currentImage.id}/>
      </div>
      <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  )
}
