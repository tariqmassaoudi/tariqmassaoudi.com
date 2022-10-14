import * as React from "react"
import {  graphql } from "gatsby"
import tariq from "../images/tariq.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <Layout location={location} title={siteTitle}>
      <div>
        <div className="text-5xl font-sans font-bold  mb-8 mt-6">About</div>
        <div class="flex flex-col md:flex-row items-center">
       
        {/* My Name is Tariq <br/> */}
  <img class="object-fill w-48 h-48 rounded-full shadow-xl md:mr-8 mb-4" src={tariq}/>
  <div className="text-xl font-sans">
  I'm Tariq, I graduated from UM6P Morocco and currently working as a technical consultant at SAS.<br/>
  I’m passionate about building tech projects that bring impact.<br/>
  I consider myself a forever student, when you stop learning you start dying, I'm always curious to expand my knowledge in and outside of tech, amongst favorite topics are Graphical Design, Cyber Security and Pychology.<br/>
  I regulary share educational content in the form of articles about my latest experiments.<br/>
  If I’m not coding or working out, I like to spend my time playing videogames, watching anime and learning about different topics, I enjoy reading books and listening to podcasts.<br/>

</div>
</div>
<div>
<div className="text-2xl font-serif font-bold text-black mt-16 mb-8 ">Content I recommend that you might enjoy</div>
<div className="text-xl font-sans mb-2">Podcasts🎙️<br/>
</div>
<ul className="font-sans">
    <li>
    The Lex Fridman Podcast : exiciting conversations with top entrepreneurs/scientists.
    </li>
    <li>
    Darknet Diaries : Hacking and cyber security stories.
    </li>
    <li>
    Ologies : Interviews with experts from distinct scientific fields
    </li>
  </ul>

  <div className="text-xl font-sans mb-2">Video Games🎮<br/>
</div>
<ul className="font-sans">
    <li>
    Celeste : Plateformer with story about mental health.
    </li>
    <li>
    Portal 2 : Using a teleporter gun to solve puzzles / good story and humour.
    </li>
    <li>
    Child of Light : Fairy tail styled RPG / very good art style.
    </li>
  </ul>

  <div className="text-xl font-sans mb-2">Books📖<br/>
</div>
<ul className="font-sans">
    <li>
    Atomic Habits : Must read, if you wanna be consistent at anything.
    </li>
    <li>
    How to Win Friends and Influence People : Simple tips to improve your social skills
    </li>
    <li>
    Man’s Search for Meaning : Insights about human nature from a concentration camp survivor.
    </li>
  </ul>

  <div className="text-xl font-sans mb-2">Anime⛩️<br/>
</div>
<ul className="font-sans">
    <li>
    Steins Gate : Comedy / Sci-Fi about time travel.
    </li>
    <li>
    Psycho-pass : Being a cop when AI takes over, justice/ ethics themes.
    </li>
    <li>
    Baccano! : Unique story telling style, short anime about immortality.
    </li>
  </ul>
</div>





    </div>
    </Layout>
   
    </div>
  
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
