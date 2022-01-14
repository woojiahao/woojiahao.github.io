import { Link } from "gatsby"
import React from "react"
import { FiHome, IoIosArrowBack, IoIosArrowForward } from "react-icons/all"

const PostNavigation = ({ nextPost, prevPost, home }) => {
  const pClasses = "flex max-w-post-navigation-button rounded-md mb-0"
  const linkClasses = "flex items-center text-text bg-none"

  return (
    <div>
      <hr />
      <div className="flex justify-between md:flex-col">
        {nextPost.published ?
          <p className={pClasses.concat(['md:mb-4 md:self-start'])}>
            <Link to={nextPost.slug} className={linkClasses}>
              <IoIosArrowBack style={{ marginRight: `15px` }} />{nextPost.title}
            </Link>
          </p> :
          <p className={pClasses.concat(['md:mb-4 md:self-start'])}>
            <Link to={home} className={linkClasses}>
              <FiHome style={{ marginRight: `15px` }} /> Home</Link>
          </p>
        }
        {prevPost.published ?
          <p className={pClasses.concat(['md:self-end'])}>
            <Link to={prevPost.slug} className={linkClasses}>
              {prevPost.title}<IoIosArrowForward style={{ marginLeft: `15px` }} />
            </Link>
          </p> :
          <p className={pClasses.concat(['md:self-end'])}>
            <Link to={home} className={linkClasses}>
              <FiHome style={{ marginRight: `15px` }} /> Home
            </Link>
          </p>
        }
      </div>
    </div>
  )
}

export default PostNavigation
