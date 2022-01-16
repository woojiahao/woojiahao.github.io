import React, { PropsWithChildren, ReactElement } from "react"

interface ContactLinkProps {
  link: string,
  icon: ReactElement,
  align?: 'left' | 'right'
}

// TODO: Use Typescript to enforce align as left | right only
const ContactLink = ({ link, icon, align = 'right', children }: PropsWithChildren<ContactLinkProps>) => {
  const linkClasses = [
    'flex',
    'items-end',
    'font-normal',
    'mb-1',
    'last:mb-0',
    'lg:inline-block',
    'lg:last:mr-4',
    'gap-2',
    align === 'left' ? 'flex-row' : 'flex-row-reverse'
  ].join(' ')

  return (
    <a target="_blank" href={link} className={linkClasses}>
      {icon}<span className="lg:hidden">{children}</span>
    </a>
  )
}

export default ContactLink