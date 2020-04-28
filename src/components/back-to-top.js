import React from "react"
import {AiOutlineArrowUp} from "react-icons/all"
import style from "./back-to-top.module.css"

const BackToTop = () => {
  window.addEventListener('scroll', () => {
    const arrow = document.querySelector(`div.${style.arrow}`)
    if (arrow) {
      window.scrollY ? arrow.classList.remove(style.hidden) : arrow.classList.add(style.hidden)
    }
  })

  const onClick = () => {
    document.body.scrollTop  = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className={[style.hidden, style.arrow].join(` `)} onClick={() => onClick()}>
      <AiOutlineArrowUp size="1.75em"/>
    </div>
  )
}

export default BackToTop
