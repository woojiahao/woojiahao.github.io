import React from "react"
import indexStyles from "./index.module.css"
import {Link} from "gatsby"
import SEO from "../components/SEO"
import ThemeToggle from "../components/theme-toggle"

export default () => (
  <div className={indexStyles.homeContainer}>
    <ThemeToggle style={{position: `absolute`, right: 0, top: 0, margin: `15px`}}/>
    <SEO title="Home"/>
    <div className={indexStyles.mainContainer}>
      <h1>Hi!<span role="img" aria-label="wave"> 👋 </span>I am Woo Jia Hao!</h1>
      <p>
        I go by the moniker of Chill online. I am a software developer from the tiny red dot - Singapore! I 
        graduated from Singapore Polytechnic with a Diploma in Information Technology. I love learning and <Link
        to="/blog">sharing about my journey in programming.</Link> I will be pursuing a degree in Computer Science at 
        the National University of Singapore after I complete my national service! 
      </p>

      <p>
        I am currently working on <Link
        to="/projects"> several projects</Link> and learning various programming languages to diversify my knowledge
        such as <a href="https://woojiahao.github.io/git-guide">creating a guide for Git</a> or <Link to="/projects/posts/torrent.go">
        creating a HTTP server from scratch in Go.</Link> I am also learning Elixir to dip my toes in functional programming! 
        I was also a research intern at DSO National Laboratories, performing research in natural language processing!
      </p>

      <p>
        When I am not programming, I enjoy learning about <Link to="/recommendations">various topics</Link> across
        different domains! I also love to run and exercise. I am currently learning more about psychology and sociology!
        You can find what else I am learning <Link to="https://woojiahao.github.io/about#currently-im-learning-">here!</Link>
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
          <a target="_blank" href="https://github.com/woojiahao">GitHub</a>
          <a target="_blank" href="https://discord.gg/programming">Discord</a>
          <a target="_blank" href="https://www.linkedin.com/in/jia-hao-woo-089346155/">LinkedIn</a>
          <a target="_blank" href="https://twitter.com/woojiahao_">Twitter</a>
          <a target="_blank" href="mailto: woojiahao1234@gmail.com">Email</a>
        </div>
      </div>
    </div>

  </div>
)
