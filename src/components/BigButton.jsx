import React from "react"

const BigButton = ({ to, fg, bg, children }) => {
  return (
    <a
      href={to}
      class={`inline-block p-3 text-[${fg}] bg-[${bg}] uppercase font-bold min-w-big-button text-center rounded-md`}>
      {children}
    </a>
  )
}

export default BigButton