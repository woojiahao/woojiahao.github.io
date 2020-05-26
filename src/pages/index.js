import React from "react"
import indexStyles from "./index.module.css"
import {Link} from "gatsby"
import SEO from "../components/SEO"
import ThemeToggle from "../components/theme-toggle"

export default () => (
  <div className={indexStyles.homeContainer}>
    <SEO title="Home"/>
    <div className={indexStyles.mainContainer}>
      <ThemeToggle/>
      <h1>Hi!<span role="img" aria-label="wave"> 👋 </span>I am Woo Jia Hao!</h1>
      <p>
        I go by the moniker of Chill online. I am a software developer from the tiny red dot - Singapore! I recently
        graduated from Singapore Polytechnic with a Diploma in Information Technology. I am actively learning and <Link
        to="/blog">sharing about my journey in programming.</Link> I am currently working on <Link
        to="/projects"> several projects</Link> and learning various programming languages to diversify my knowledge
        such as <Link to="/projects/posts/torrent.go">implementing the BitTorrent protocol using Go</Link> or <Link
        to="/projects/posts/woojiahao.github.io">learning Gatsby.js to build this site.</Link>
      </p>

      <p>
        When I am not programming, I am reading about <Link to="/recommendations">various topics</Link> across
        different domains! I also love to run and exercise. I am currently learning psychology on <a
        href="https://www.coursera.org/learn/introduction-psychology">
        Coursera</a> and dabbling with 3D modelling using Blender! You can check out what else I am currently
        learning <Link to="/about#currently-im-learning-">here!</Link>
      </p>

      <div className={indexStyles.links}>
        <strong>Get to know me!</strong>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
          <Link to="/recommendations">Recommendations</Link>
        </div>
      </div>

      <div className={indexStyles.contact}>
        <strong>Stalk me!</strong>
        <div>
          <a href="https://github.com/woojiahao">GitHub</a>
          <a href="https://discord.gg/programming">Discord</a>
          <a href="https://www.linkedin.com/in/woo-jia-hao-089346155/">LinkedIn</a>
          <a href="https://twitter.com/woojiahao_">Twitter</a>
        </div>
      </div>
    </div>
  </div>
)
