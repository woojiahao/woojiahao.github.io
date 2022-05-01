import { graphql, Link } from "gatsby"
import React from "react"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, FaRssSquare } from "react-icons/all"
import { MdEmail } from "react-icons/md"
import { SiDiscord } from "react-icons/si"
import ContactLink from "../components/ContactLink"
import RecentBox from "../components/RecentBox"
import SEO from "../components/SEO"
import ThemeToggle from "../components/ThemeToggle"
import profilePicture from "./assets/profile_picture.jpg"

const Home = ({ data }) => {
  const latestBlogPost = data.allMarkdownRemark.edges[0].node
  const latestProject = data.allProjectsJson.edges[0].node

  const homeContainerClasses = [
    'h-full',
    'my-12',
    'mx-auto',
    'max-w-container-max',
    'xs:max-w-container-xs',
    'sm:max-w-container-sm',
    'md:max-w-container-md',
    'lg:max-w-container-lg',
    'xl:max-w-container-xl',
  ].join(' ')

  const contactIconClasses = [
    'lg:w-12',
    'lg:h-12',
    'lg:m-0',
    'lg:mr-2'
  ].join(' ')

  return (
    <div className={homeContainerClasses}>
      <ThemeToggle />
      <SEO title="Home" />

      <div className="flex justify-between lg:flex-col sm:flex-col">
        <aside className="basis-left w-24p text-right lg:w-full lg:text-center lg:mb-8">
          <img src={profilePicture} alt="Profile picture" className="rounded-profile mb-4 w-full lg:w-1/5 lg:h-1/5 lg:inline-block" />

          <div>
            <div>
              <h1 className="font-normal m-0 p-0 text-fixed">Woo Jia Hao</h1>
              <h2 className="text-gray m-0 p-0 text-fixed">Singapore</h2>
            </div>

            <div className="links my-4 sm:mb-4">
              <strong className="block mb-4">Get around!</strong>
              <div>
                <Link to="/blog">Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <a href="https://www.notion.so/woojiahao/48b21a97d71c4cd2bc9a9051bd7423a3?v=e2c493015ceb47cfa275a03f20895cb1">Recommendations</a>
              </div>
            </div>

            <div className="contact sm:flex-col">
              <strong className="block mb-4">Find me!</strong>
              <div>
                {/* TODO: Figure out way to abstract icon styles into ContactLink directly */}
                <ContactLink link="https://github.com/woojiahao" icon={<AiFillGithub className={contactIconClasses} />}>woojiahao</ContactLink>
                <ContactLink link="https://discord.gg/sgexams" icon={<SiDiscord className={contactIconClasses} />}>@Chill#4048</ContactLink>
                <ContactLink link="https://www.linkedin.com/in/jia-hao-woo-089346155/" icon={<AiFillLinkedin className={contactIconClasses} />}>Woo Jia Hao</ContactLink>
                <ContactLink link="https://twitter.com/woojiahao_" icon={<AiFillTwitterSquare className={contactIconClasses} />}>@woojiahao_</ContactLink>
                <ContactLink link="mailto: me@woojiahao.com" icon={<MdEmail className={contactIconClasses} />}>me@woojiahao.com</ContactLink>
                <ContactLink link="/rss.xml" icon={<FaRssSquare className={contactIconClasses} />}>Blog RSS Feed</ContactLink>
              </div>
            </div>
          </div>
        </aside>

        <main className="basis-right w-72p lg:w-full">
          <div>
            <h1 className="mt-0">Hi!<span role="img" aria-label="wave"> 👋 </span>I am Jia Hao!</h1>
            <p>
              I am a software developer from the tiny red dot — Singapore! I go by the moniker of Chill online.
              I am an incoming National University of Singapore (NUS) freshman studying Computer Science!
              I graduated from Singapore Polytechnic with a Diploma in Information Technology.
            </p>

            <p>
              I have performed natural language processing research <Link to="/about"> @ DSO National Laboratories,</Link> managed
              UAT across 90+ teams <Link to="/about"> @ DBS Bank,</Link> and pioneered a usability framework <Link to="/about">@ MightyAim!</Link>
            </p>

            <p>
              I enjoy acquiring knowledge about domains outside of computer science. I am currently studying
              calculus and reading about psychology!
              Find out what I am learning <Link to="/about#currently-im-learning-">here!</Link> Outside of all of that,
              I like exercising and hanging out with my friends!
            </p>
          </div>

          <div>
            <h1 className="text-text font-normal m-0 mb-2">I love...</h1>

            <RecentBox
              heading="Sharing about programming:"
              links={[
                {
                  title: latestBlogPost.frontmatter.title,
                  description: latestBlogPost.frontmatter.date,
                  link: latestBlogPost.fields.slug
                }
              ]}
              others={{ to: '/blog', heading: 'View other posts' }}
            />

            <RecentBox
              heading="Building projects:"
              links={[
                {
                  title: latestProject.title,
                  description: latestProject.description,
                  link: latestProject.links.repository
                }
              ]}
              others={{ to: '/projects', heading: 'View other projects' }}
            />

            <RecentBox
              heading="Teaching:"
              links={[
                {
                  title: "Git Guide",
                  description: "A practical introduction to the Git version control system. Written for SP DIT SEP module.",
                  link: "https://woojiahao.github.io/git-guide"
                },
                {
                  title: "Introduction to Android Development with Kotlin",
                  description: "Learn the basics of Android development using Kotlin by building a basic to-do application.",
                  link: "https://woojiahao.github.io/KotlinToDo"
                }
              ]}
            />
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
          links {
            repository
          }
        }
      }
    }
  }
`


export default Home
