import React, { useEffect } from "react"
import { AiOutlineArrowUp } from "react-icons/all"

const BackToTop = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const arrow = document.querySelector('.arrow')
      if (arrow) {
        window.scrollY ? arrow.classList.remove('invisible') : arrow.classList.add('invisible')
      }
    })
  }, [])

  const onClick = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div
      className="invisible arrow fixed bottom-0 right-0 inline-flex rounded-sm pt-2 pr-4 pb-4 pl-2 hover:cursor-pointer md:invisible"
      onClick={onClick} >
      < AiOutlineArrowUp size="1.75em" />
    </div>
  )
}

export default BackToTop