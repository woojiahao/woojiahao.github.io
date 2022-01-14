import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import ContactLink from "../ContactLink"
import React from "react"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, FaRssSquare } from "react-icons/all"
import { MdEmail } from "react-icons/md"
import { SiDiscord } from "react-icons/si"

const Footer = ({ repositoryUrl }) => {
  const contactIconClasses = [
    'lg:w-12',
    'lg:h-12',
    'lg:m-0',
    'lg:mr-2'
  ].join(' ')

  return (<footer>
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

      <div className="w-full basis-left flex md:mb-5">
        <div className="basis-1 min-w-50p md:mb-5">
          <p className="font-bold m-0 p-0 mb-4">Navigation</p>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <a href="https://www.notion.so/woojiahao/48b21a97d71c4cd2bc9a9051bd7423a3?v=e2c493015ceb47cfa275a03f20895cb1">Recommendations</a>
        </div>

        <div className="basis-1 min-w-50p md:mb-5">
          <p className="font-bold m-0 p-0 mb-4">Connect with me!</p>
          <ContactLink link="https://github.com/woojiahao" icon={<AiFillGithub className={contactIconClasses} />}>woojiahao</ContactLink>
          <ContactLink link="https://discord.gg/sgexams" icon={<SiDiscord className={contactIconClasses} />}>@Chill#4048</ContactLink>
          <ContactLink link="https://www.linkedin.com/in/jia-hao-woo-089346155/" icon={<AiFillLinkedin className={contactIconClasses} />}>Woo Jia Hao</ContactLink>
          <ContactLink link="https://twitter.com/woojiahao_" icon={<AiFillTwitterSquare className={contactIconClasses} />}>@woojiahao_</ContactLink>
          <ContactLink link="mailto: woojiahao1234@gmail.com" icon={<MdEmail className={contactIconClasses} />}>woojiahao1234@gmail.com</ContactLink>
          <ContactLink link="/rss.xml" icon={<FaRssSquare className={contactIconClasses} />}>Blog RSS Feed</ContactLink>
        </div>
      </div>
    </div>
  </footer>)
}

export default Footer

Footer.propTypes = {
  repositoryUrl: PropTypes.string.isRequired,
}