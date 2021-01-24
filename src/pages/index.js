import React from "react"
import style from "./index.module.css"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import ThemeToggle from "../components/theme-toggle"
import { graphql } from "gatsby"
import profilePicture from "./assets/profile_picture.png"
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/all"
import { SiDiscord } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import QuickLink from "../components/quick-link"

const Home = ({ data }) => {
  const latestBlogPost = data.allMarkdownRemark.edges[0].node
  const latestProject = data.allProjectsJson.edges[0].node

  return (
    <div className={style.homeContainer}>
      <ThemeToggle style={{ position: `absolute`, right: 0, top: 0, margin: `15px` }} />
      <SEO title="Home" />

      <div className={style.mainContainer}>
        <aside className={style.left}>
          <img src={profilePicture} alt="Profile picture" />

          <div>
            <div className={style.name}>
              <h1>Woo Jia Hao</h1>
              <h2>Singapore</h2>
            </div>

            <div className={style.links}>
              <strong>Get around!</strong>
              <div>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/recommendations">Recommendations</Link>
              </div>
            </div>

            <div className={style.contact}>
              <strong>Find me!</strong>
              <div>
                <a target="_blank" href="https://github.com/woojiahao"><AiFillGithub /><span>woojiahao</span></a>
                <a target="_blank" href="https://discord.gg/programming"><SiDiscord /><span>@Chill#4048</span></a>
                <a target="_blank" href="https://www.linkedin.com/in/jia-hao-woo-089346155/"><AiFillLinkedin /><span>Woo Jia Hao</span></a>
                <a target="_blank" href="https://twitter.com/woojiahao_"><AiFillTwitterSquare /><span>@woojiahao_</span></a>
                <a target="_blank" href="mailto: woojiahao1234@gmail.com"><MdEmail /><span>woojiahao1234@gmail.com</span></a>
              </div>
            </div>
          </div>
        </aside>

        <main className={style.right}>
          <div className={style.about}>
            <h1>Hi!<span role="img" aria-label="wave"> 👋 </span>I am Jia Hao!</h1>
            <p>
              I am a software developer from the tiny red dot - Singapore! I go by the moniker of Chill online.
              I graduated from Singapore Polytechnic with a Diploma in Information Technology and will be pursuing
              a degree in Computer Science at the National University of Singapore after I complete my national service!
          </p>

            <p>
              I have performed natural language processing research <Link to="/about"> @ DSO National Laboratories,</Link> managed
            UAT across 90+ teams <Link to="/about"> @ DBS Bank,</Link> and pioneered a usability framework
            <Link to="/about"> @ MightyAim!</Link>
            </p>

            <p>
              I enjoy acquiring knowledge about domains outside of computer science. I am currently brushing up on my
              chemistry, learning history and sociology, and studying psychology!
              Find out what I am learning <Link to="/about#currently-im-learning-">here!</Link> Outside of all of that,
              I like exercising and hanging out with my friends!
          </p>
          </div>

          <div className={style.recent}>
            <h1 className={style.subtitle}>I love...</h1>

            <h2>Sharing about programming</h2>
            <QuickLink
              title={latestBlogPost.frontmatter.title}
              description={latestBlogPost.frontmatter.date}
              link={latestBlogPost.fields.slug} />
            <Link to="/blog" className={style.viewAll}>View other posts</Link>

            <h2>Building projects</h2>
            <QuickLink
              title={latestProject.title}
              description={latestProject.description}
              link={latestProject.fields.slug} />
            <Link to="/projects" className={style.viewAll}>View other projects</Link>

            <h2>Teaching</h2>
            <QuickLink
              title="Git Guide"
              description="A practical introduction to the Git version control system. Written for SP DIT SEP module."
              link="https://woojiahao.github.io/git-guide" />
            <QuickLink
              title="Introduction to Android Development with Kotlin"
              description="Learn the basics of Android development using Kotlin by building a basic to-do application."
              link="https://woojiahao.github.io/KotlinToDo" />

          </div>
        </main>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      limit: 1, 
      filter: {frontmatter: {published: {eq: true}}, fields: {slug: {nin: ["/about", "/recommendations"]}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
    allProjectsJson(
      limit: 1, 
      sort: {fields: duration___start, order: DESC}
    ) {
      edges {
        node {
          title
          description
          fields {
            slug
          }
        }
      }
    }
  }
`


export default Home
