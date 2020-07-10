import React from "react"
import {Link} from "gatsby"
import {FiHome, IoIosArrowBack, IoIosArrowForward} from "react-icons/all"
import style from "./post-navigation.module.css"

const PostNavigation = ({nextPost, prevPost, home}) => (
  <div className={style.navigation}>
    <hr/>
    <div className={style.buttons}>
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

export default PostNavigation
