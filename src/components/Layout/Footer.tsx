import { Link } from "gatsby"
import React from "react"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, FaRssSquare } from "react-icons/all"
import { MdEmail } from "react-icons/md"
import { SiDiscord } from "react-icons/si"
import ContactLink from "../ContactLink"

interface FooterProps {
  repositoryUrl: string
}

const Footer = ({ repositoryUrl }: FooterProps) => {
  const contactIconClasses = [
    'lg:w-12',
    'lg:h-12',
    'lg:m-0',
    'lg:mr-2'
  ].join(' ')

  return (
    <footer>
      <div className="flex justify-between w-full md:flex-col md:mb-5">
        <div className="basis-left min-w-30p md:mb-5">
          <p className="m-0 p-0">A Programmer's Perspective</p>

          <br />

          <p className="m-0 p-0">
            Trekking down the path of programming and discussing my encounters with the unknown!
          </p>

          <br />

          <p className="m-0 p-0">
            Copyright &copy; 2020-2022. Code <a href={repositoryUrl}>here.</a>
          </p>
        </div>

        {/* TODO: Abstract to separate component */}
        <div className="w-full basis-left flex md:mb-5">
          <div className="page-navigation basis-1 min-w-50p md:mb-5">
            <p className="font-bold m-0 p-0 mb-4">Navigation</p>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <a href="https://www.notion.so/woojiahao/48b21a97d71c4cd2bc9a9051bd7423a3?v=e2c493015ceb47cfa275a03f20895cb1">Recommendations</a>
          </div>

          {/* TODO: Abstract to separate component */}
          <div className="basis-1 min-w-50p md:mb-5">
            <p className="social-media font-bold m-0 p-0 mb-4">Connect with me!</p>
            <ContactLink align="left" link="https://github.com/woojiahao" icon={<AiFillGithub className={contactIconClasses} />}>woojiahao</ContactLink>
            <ContactLink align="left" link="https://discord.gg/sgexams" icon={<SiDiscord className={contactIconClasses} />}>@Chill#4048</ContactLink>
            <ContactLink align="left" link="https://www.linkedin.com/in/woojiahao/" icon={<AiFillLinkedin className={contactIconClasses} />}>Woo Jia Hao</ContactLink>
            <ContactLink align="left" link="https://twitter.com/woojiahao_" icon={<AiFillTwitterSquare className={contactIconClasses} />}>@woojiahao_</ContactLink>
            <ContactLink align="left" link="mailto: me@woojiahao.com" icon={<MdEmail className={contactIconClasses} />}>me@woojiahao.com</ContactLink>
            <ContactLink align="left" link="/rss.xml" icon={<FaRssSquare className={contactIconClasses} />}>Blog RSS Feed</ContactLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
