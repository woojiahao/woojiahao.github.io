import React from "react"

const ContactLink = ({ link, icon, children }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="flex items-end flex-row-reverse font-normal mb-1 last:mb-0 lg:inline-block lg:last:mr-4 gap-2">
      {icon}<span className="lg:hidden">{children}</span>
    </a>
  )
}

export default ContactLink