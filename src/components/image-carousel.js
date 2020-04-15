import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import React, {useState} from "react"
import style from "./image-carousel.module.css"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all"

export default props => {
  const [index, setIndex] = useState(0)

  const {allFile} = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {regex: "/posts/projects/images/"}}) {
          edges { 
            node { 
              relativeDirectory
              childImageSharp { 
                fixed(height: 500, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                } 
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(allFile)

  const images = allFile
    .edges
    .filter(({node}) => node.relativeDirectory.includes(props.folder))
    .map(({node}) => {
      return {
        id: node.id,
        fixed: node.childImageSharp.fixed,
        fluid: node.childImageSharp.fluid
      }
    })

  if (images.length < 1) {
    return <div/>
  }

  const length = images.length - 1
  const handleNext = () => index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () => index === 0 ? setIndex(length) : setIndex(index - 1)
  const currentImage = images[index]

  return (
    <div className={style.carouselContainer}>
      <div className={style.carousel}>
        <div className={style.backgroundImage}>
          <Img fluid={currentImage.fluid} id={currentImage.id}/>
        </div>
        <div className={style.foregroundImage}>
          <Img fixed={currentImage.fixed} id={currentImage.id}/>
        </div>
      </div>

      {images.length > 1 &&
      <div className={style.navigationContainer}>
        <div className={style.navigation}>
          <div onClick={() => handlePrevious()}>
            <IoIosArrowBack size="2em"/>
          </div>
          <div onClick={() => handleNext()}>
            <IoIosArrowForward size="2em"/>
          </div>
        </div>
      </div>
      }
    </div>
  )
}
