import { Link } from "gatsby"
import React from "react"
import { FiHome, IoIosArrowBack, IoIosArrowForward } from "react-icons/all"
import Post from "../classes/post"

interface PostNavigationProps {
  nextPost: Post
  prevPost: Post
  home: string
}

const PostNavigation = ({ nextPost, prevPost, home }: PostNavigationProps) => {
  const pClasses = "flex max-w-post-navigation-button rounded-md mb-0"
  const linkClasses = "flex items-center text-text bg-none"

  const nextClasses = pClasses + 'md:mb-4 md:self-start'
  const prevClasses = pClasses + 'md:self-end'

  return (
    <div>
      <hr />
      <div className="flex justify-between md:flex-col">
        {nextPost.published ?
          <p className={nextClasses}>
            <Link to={nextPost.slug} className={linkClasses}>
              <IoIosArrowBack className="mr-4" />{nextPost.title}
            </Link>
          </p> :
          <p className={nextClasses}>
            <Link to={home} className={linkClasses}>
              <FiHome className="mr-4" /> Home</Link>
          </p>
        }
        {prevPost.published ?
          <p className={prevClasses}>
            <Link to={prevPost.slug} className={linkClasses}>
              {prevPost.title}<IoIosArrowForward className="mr-4" />
            </Link>
          </p> :
          <p className={prevClasses}>
            <Link to={home} className={linkClasses}>
              <FiHome className="mr-4" /> Home
            </Link>
          </p>
        }
      </div>
    </div>
  )
}

export default PostNavigation
