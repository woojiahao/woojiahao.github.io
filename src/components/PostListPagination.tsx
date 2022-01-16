import { Link } from "gatsby"
import React from "react"

interface PostListPaginationProps {
  numPages: number
  currentPage: number
  redirect: string
}

const PostListPagination = ({ numPages = 1, currentPage = 1, redirect }: PostListPaginationProps) => {
  const pages = [...Array(numPages).keys()].map(i => i + 1)
  const links = pages.map(page => page === 1 ? `/${redirect}/` : `/${redirect}/${page}`)
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex flex-row content-center items-center justify-center">
        {pages.map(n => {
          const activeStyle = n === currentPage ? 'bg-pagination-active-background' : null
          const classes = [
            activeStyle,
            'inline-flex',
            'py-2',
            'px-3',
            'border-[#e0e0e0]',
            'border-2',
            'border-solid',
            'hover:bg-pagination-background'
          ].join(' ')
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
