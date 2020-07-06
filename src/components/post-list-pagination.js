import React from "react"
import styles from "./post-list-pagination.module.css"
import {Link} from "gatsby"
import PropTypes from "prop-types"

const PostListPagination = ({numPages, currentPage, redirect}) => {
  const pages = [...Array(numPages).keys()].map(i => i + 1)
  return (
    <div className={styles.paginator}>
      <div>
        {pages.map(n => {
          const activeStyle = n === currentPage ? styles.activePage : null
          const classes = [activeStyle, styles.pageNumber].join(" ")
          const redirectPage = n === 1 ? `/${redirect}/` : `/${redirect}/${n}`
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
