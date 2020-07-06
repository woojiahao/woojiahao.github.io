import React from "react"
import postPaginationStyles from "./post-pagination.module.css"
import {Link} from "gatsby"
import PropTypes from "prop-types"

const PostPagination = ({numPages, currentPage, redirect}) => {
  const pages = [...Array(numPages).keys()].map(i => i + 1)
  return (
    <div className={postPaginationStyles.paginator}>
      <div>
        {pages.map(n => {
          const activeStyle = n === currentPage ? postPaginationStyles.activePage : null
          const classes = [activeStyle, postPaginationStyles.pageNumber].join(" ")
          const redirectPage = n === 1 ? `/${redirect}/` : `/${redirect}/${n}`
          return (
            <Link to={redirectPage} className={classes}>{n}</Link>
          )
        })}
      </div>
    </div>
  )
}

export default PostPagination

PostPagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  redirect: PropTypes.string.isRequired
}

PostPagination.defaultProps = {
  numPages: 1,
  currentPage: 1
}
