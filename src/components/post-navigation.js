import React from "react"
import {Link} from "gatsby"
import {FiHome, IoIosArrowBack, IoIosArrowForward} from "react-icons/all"
import postNavigationStyles from "./post-navigation.module.css"

export default props => {
  const {
    nextPost,
    prevPost,
    home
  } = props

  return (
    <div className={postNavigationStyles.navigation}>
      <hr/>
      <div className={postNavigationStyles.buttons}>
        {nextPost.published ?
          <p>
            <Link to={nextPost.slug}>
              <IoIosArrowBack style={{marginRight: `15px`}}/>{nextPost.title}
            </Link>
          </p> :
          <p>
            <Link to={home}>
              <FiHome style={{marginRight: `15px`}}/> Home</Link>
          </p>
        }
        {prevPost.published ?
          <p>
            <Link to={prevPost.slug}>
              {prevPost.title}<IoIosArrowForward style={{marginLeft: `15px`}}/>
            </Link>
          </p> :
          <p>
            <Link to={home}>
              <FiHome style={{marginRight: `15px`}}/> Home
            </Link>
          </p>
        }
      </div>
    </div>
  )
}
