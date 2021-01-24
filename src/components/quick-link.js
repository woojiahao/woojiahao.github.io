import React from "react"
import style from "./quick-link.module.css"
import { IoIosArrowForward } from "react-icons/all"

const QuickLink = ({ title, description, link }) => {
  return (
    <a href={link}>
      <div className={style.link}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <IoIosArrowForward />
      </div>
    </a>
  )
}

export default QuickLink