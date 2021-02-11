import React from "react"
import * as PropTypes from "prop-types"
import style from "./layout.module.css"
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/all"
import { Link } from "gatsby"
import { SiDiscord } from "react-icons/si"
import { MdEmail } from "react-icons/md"

const Footer = ({ repositoryUrl }) => {
  return (<footer>
    <div>
      <div className={style.siteDescription}>
        <p className={style.footerTitle}>A Programmer's Perspective</p>

        <br />

        <p>
          Trekking down the path of programming and discussing my encounters with the unknown!
              </p>

        <br />

        <p>
          Copyright &copy; 2020-2021. Code <a href={repositoryUrl}>here.</a>
        </p>
      </div>

      <div className={style.footerLinks}>
        <div className={style.pageNavigation}>
          <p className={style.footerTitle}>Navigation</p>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <a href="https://www.notion.so/woojiahao/48b21a97d71c4cd2bc9a9051bd7423a3?v=e2c493015ceb47cfa275a03f20895cb1">Recommendations</a>
        </div>

        <div className={style.socialMedia}>
          <p className={style.footerTitle}>Connect with me!</p>
          <a target="_blank" href="https://github.com/woojiahao"><AiFillGithub />woojiahao</a>
          <a target="_blank" href="https://discord.gg/programming"><SiDiscord />@Chill#4048</a>
          <a target="_blank" href="https://www.linkedin.com/in/jia-hao-woo-089346155/"><AiFillLinkedin />Woo Jia Hao</a>
          <a target="_blank" href="https://twitter.com/woojiahao_"><AiFillTwitterSquare />@woojiahao_</a>
          <a target="_blank" href="mailto: woojiahao1234@gmail.com"><MdEmail />woojiahao1234@gmail.com</a>
        </div>
      </div>
    </div>
  </footer>)
}

export default Footer

Footer.propTypes = {
  repositoryUrl: PropTypes.string.isRequired,
}