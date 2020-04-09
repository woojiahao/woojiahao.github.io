import React from "react"
import indexStyles from "./index.module.css"

export default () => (
  <div className={indexStyles.homeContainer}>
    <div className={indexStyles.mainContainer}>
      <h1>Hi! I am Woo Jia Hao!</h1>
      <p>
        I am a software developer from the tiny red dot - Singapore! I recently graduated from Singapore Polytechnic
        with a diploma in Information Technology. I am actively looking to learn more about the world of software and
        programming. I have been programming for five years already! I am currently working on several projects and
        learning various programming languages to diversify my knowledge such as implementing the BitTorrent protocol
        using Go or learning Gatsby.js to build this site.
      </p>
      <div>
        <p>Projects</p>
        <p>Blog</p>
        <p>About Me</p>
      </div>
    </div>

    <div className={indexStyles.contactContainer}>
      <div>
        <p>GitHub</p>
        <p>Discord</p>
        <p>LinkedIn</p>
      </div>
    </div>
  </div>
)
