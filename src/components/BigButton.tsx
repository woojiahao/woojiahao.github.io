import React from "react"

const BigButton = ({ to, fg, bg, children }) => {
  return (
    <a
      href={to}
      className={`inline-block p-3 text-[${fg}] bg-[${bg}] uppercase font-bold min-w-big-button text-center rounded-md mb-4 last:mb-0`}>
      {children}
    </a>
  )
}

export default BigButton