import React from "react"
import {Link} from "gatsby"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome} from "react-icons/all"
import postNavigationStyles from "./post-navigation.module.css"

export default props => {
  const nextPost = props.nextPost
  const prevPost = props.prevPost
  const home = props.home

  return (
    <div className={postNavigationStyles.navigation}>
      <hr/>
      <div className={postNavigationStyles.buttons}>
        {nextPost.published ?
          <p>
            <Link to={nextPost.slug}>
              <FaArrowAltCircleLeft style={{marginRight: `15px`}}/>{nextPost.title}
            </Link>
          </p> :
          <p>
            <Link to={home}>
              <FaHome style={{marginRight: `15px`}}/> Home</Link>
          </p>
        }
        {prevPost.published ?
          <p>
            <Link to={prevPost.slug}>
              {prevPost.title}<FaArrowAltCircleRight style={{marginLeft: `15px`}}/>
            </Link>
          </p> :
          <p>
            <Link to={home}>
              <FaHome style={{marginRight: `15px`}}/> Home
            </Link>
          </p>
        }
      </div>
    </div>
  )
}
