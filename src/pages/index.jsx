import { graphql, Link } from "gatsby"
import React from "react"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, FaRssSquare } from "react-icons/all"
import { MdEmail } from "react-icons/md"
import { SiDiscord } from "react-icons/si"
import QuickLink from "../components/QuickLink/QuickLink"
import SEO from "../components/SEO"
import ThemeToggle from "../components/ThemeToggle/ThemeToggle"
import profilePicture from "./assets/profile_picture.png"

const Home = ({ data }) => {
  const latestBlogPost = data.allMarkdownRemark.edges[0].node
  const latestProject = data.allProjectsJson.edges[0].node

  // TODO: Get media breakpoints working -- migrate to mobile first design to accomodate for this
  return (
    <div className="h-full my-12 mx-auto max-w-screen-lg">
      <ThemeToggle style={{ position: `fixed`, right: 0, top: 0, margin: `15px` }} />
      <SEO title="Home" />

      <div className="flex justify-between">
        <aside className="basis-left w-24p text-right">
          <img src={profilePicture} alt="Profile picture" className="rounded-profile mb-4 w-full" />

          <div>
            <div>
              <h1 className="font-normal m-0 p-0 text-fixed">Woo Jia Hao</h1>
              <h2 className="text-gray m-0 p-0 text-fixed">Singapore</h2>
            </div>

            <div className="links my-4">
              <strong>Get around!</strong>
              <div>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <a href="https://www.notion.so/woojiahao/48b21a97d71c4cd2bc9a9051bd7423a3?v=e2c493015ceb47cfa275a03f20895cb1">Recommendations</a>
              </div>
            </div>

            <div className="contact">
              <strong>Find me!</strong>
              <div>
                <a target="_blank" href="https://github.com/woojiahao"><AiFillGithub /><span>woojiahao</span></a>
                <a target="_blank" href="https://discord.gg/sgexams"><SiDiscord /><span>@Chill#4048</span></a>
                <a target="_blank" href="https://www.linkedin.com/in/jia-hao-woo-089346155/"><AiFillLinkedin /><span>Woo Jia Hao</span></a>
                <a target="_blank" href="https://twitter.com/woojiahao_"><AiFillTwitterSquare /><span>@woojiahao_</span></a>
                <a target="_blank" href="mailto: woojiahao1234@gmail.com"><MdEmail /><span>woojiahao1234@gmail.com</span></a>
                <Link to="/rss.xml"><FaRssSquare /><span>Blog RSS feed</span></Link>
              </div>
            </div>
          </div>
        </aside>

        <main className="basis-right w-72p">
          <div>
            <h1 className="mt-0">Hi!<span role="img" aria-label="wave"> 👋 </span>I am Jia Hao!</h1>
            <p>
              I am a software developer from the tiny red dot - Singapore! I go by the moniker of Chill online.
              I graduated from Singapore Polytechnic with a Diploma in Information Technology!
            </p>

            <p>
              I have performed natural language processing research <Link to="/about"> @ DSO National Laboratories,</Link> managed
              UAT across 90+ teams <Link to="/about"> @ DBS Bank,</Link> and pioneered a usability framework <Link to="/about">@ MightyAim!</Link>
            </p>

            <p>
              I enjoy acquiring knowledge about domains outside of computer science. I am currently brushing up on my
              chemistry, learning history and sociology, and studying psychology!
              Find out what I am learning <Link to="/about#currently-im-learning-">here!</Link> Outside of all of that,
              I like exercising and hanging out with my friends!
            </p>
          </div>

          {/* TODO: Create component for this? */}
          <div>
            <h1 className="text-text font-normal m-0 mb-2">I love...</h1>

            <div className="recent-box">
              {/* TODO: Increase bottom margin of h2 */}
              <h2>Sharing about programming:</h2>
              <QuickLink
                title={latestBlogPost.frontmatter.title}
                description={latestBlogPost.frontmatter.date}
                link={latestBlogPost.fields.slug} />
              <Link to="/blog" className="view-all">View other posts</Link>
            </div>

            <div className="recent-box">
              <h2>Building projects:</h2>
              <QuickLink
                title={latestProject.title}
                description={latestProject.description}
                link={latestProject.fields.slug} />
              <Link to="/projects" className="view-all">View other projects</Link>
            </div>

            <div className="recent-box">
              <h2>Teaching:</h2>
              <QuickLink
                title="Git Guide"
                description="A practical introduction to the Git version control system. Written for SP DIT SEP module."
                link="https://woojiahao.github.io/git-guide" />
              <QuickLink
                title="Introduction to Android Development with Kotlin"
                description="Learn the basics of Android development using Kotlin by building a basic to-do application."
                link="https://woojiahao.github.io/KotlinToDo" />
            </div>

          </div>
        </main>
      </div >
    </div >
  )
}

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date, frontmatter___title], order: [DESC, DESC]},
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
