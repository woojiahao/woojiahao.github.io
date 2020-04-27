import React from "react"
import {AiOutlineArrowUp} from "react-icons/all"
import style from "./back-to-top.module.css"

const BackToTop = () => {
  window.addEventListener('scroll', () => {
    const arrow = document.querySelector(`div.${style.arrow}`)
    window.scrollY ? arrow.classList.remove(style.hidden) : arrow.classList.add(style.hidden)
  })

  const classList = [style.hidden, style.arrow]

  return (

    <div className={classList.join(` `)}>
      <AiOutlineArrowUp size="1.75em"/>
    </div>
  )
}

export default BackToTop
