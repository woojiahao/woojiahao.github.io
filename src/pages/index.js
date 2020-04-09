import React from "react"
import indexStyles from "./index.module.css"
import {Link} from "gatsby"

export default () => (
  <div className={indexStyles.homeContainer}>
    <div className={indexStyles.mainContainer}>
      <h1>Hi! I am Woo Jia Hao!</h1>
      <p>
        I am a software developer from the tiny red dot - Singapore! I recently graduated from Singapore Polytechnic
        with a diploma in Information Technology. I am actively learning and <Link to="/blog">sharing about my journey
        in programming.</Link> I am currently working on <Link to="/projects"> several projects</Link> and learning
        various programming languages to diversify my knowledge such as <Link to="/torrent-go">implementing the
        BitTorrent protocol using Go</Link> or <Link to="woojiahao-github-io">learning Gatsby.js to build this
        site.</Link>
      </p>

      <p>
        When I am not programming, I am learning about <Link to="/recommendations">various topics</Link> across
        different domains! I also love to run and exercise.
      </p>

      <div className={indexStyles.links}>
        <strong>Check out my work!</strong>
        <p>Projects</p>
        <p>Blog</p>
        <p>Recommendations</p>
        <p>About Me</p>
      </div>

      <div className={indexStyles.contact}>
        <strong>Stalk me!</strong>
        <p>GitHub</p>
        <p>Discord</p>
        <p>LinkedIn</p>
      </div>
    </div>
  </div>
)
