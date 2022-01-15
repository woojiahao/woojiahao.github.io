import { Link } from "gatsby"
import React from "react"
import { IoIosArrowForward } from "react-icons/all"

interface RecentBoxProps {
  heading: string,
  links: { title: string, description: string, link: string }[],
  others?: { to: string, heading: string }
}

/**
 * @param heading Title of the recent box
 * @param links List of objects with structure {title: string, description: string, link: string}
 * @param others Object that indicates if there is a link to other content, structure: {to: string, heading: string}
 */
const RecentBox = ({ heading, links, others }: RecentBoxProps) => {
  return (
    <div className="mb-10 last:mb-0">
      <h2 className="text-gray m-0 mb-2 font-normal">{heading}</h2>
      {links.map(({ title, description, link }) => {
        return (
          <a href={link}>
            <div className="flex justify-between items-center mb-4 pl-4 border-l-4 border-solid border-link">
              <div>
                <h1 className="text-text m-0 mb-2">{title}</h1>
                <p className="text-gray font-normal m-0 p-0">{description}</p>
              </div>

              <IoIosArrowForward className="w-8 h-8" />
            </div>
          </a>
        )
      })}
      {others && (
        <Link to={others.to} className="block mb-5">{others.heading}</Link>
      )}
    </div>
  )
}

export default RecentBox