import React from "react"
import postPaginationStyles from "./post-pagination.module.css"
import {Link} from "gatsby"

export default props => {
  const pages = []
  for (let i = 1; i <= props.numPages; i++) {
    pages.push(i)
  }
  return (
    <div className={postPaginationStyles.paginator}>
      <div>
        {pages.map(n => {
          const activeStyle = n === props.currentPage ? postPaginationStyles.activePage : null
          const classes = [activeStyle, postPaginationStyles.pageNumber].join(" ")
          const redirectPage = n === 1 ? `/blog/` : `/blog/${n}`
          return (
            <Link to={redirectPage} className={classes}>{n}</Link>
          )
        })}
      </div>
    </div>
  )
}
