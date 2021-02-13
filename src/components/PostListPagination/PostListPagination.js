import React from "react"
import style from "./PostListPagination.module.css"
import {Link} from "gatsby"
import PropTypes from "prop-types"

const PostListPagination = ({numPages, currentPage, redirect}) => {
  const pages = [...Array(numPages).keys()].map(i => i + 1)
  const links = pages.map(page => page === 1 ? `/${redirect}/` : `/${redirect}/${page}`)
  return (
    <div className={style.paginator}>
      <div>
        {pages.map(n => {
          const activeStyle = n === currentPage ? style.activePage : null
          const classes = [activeStyle, style.pageNumber].join(" ")
          const redirectPage = links[n - 1]
          return (
            <Link to={redirectPage} className={classes}>{n}</Link>
          )
        })}
      </div>
    </div>
  )
}

export default PostListPagination

PostListPagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  redirect: PropTypes.string.isRequired
}

PostListPagination.defaultProps = {
  numPages: 1,
  currentPage: 1
}
