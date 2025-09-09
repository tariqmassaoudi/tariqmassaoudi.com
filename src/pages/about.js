import * as React from "react"
import {  graphql } from "gatsby"
// import tariq from "../images/tariq.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <div>
      <Layout location={location} title={siteTitle}>
      <div>
        <div className="text-3xl font-sans font-bold  mb-8 mt-6">About</div>
        <div className="flex flex-col md:flex-row items-center">
       
        {/* My Name is Tariq <br/> */}
  <img className="object-fill w-48 h-48 rounded-full shadow-xl md:mr-8 mb-4" alt="Profile" src="https://media.licdn.com/dms/image/v2/D4E03AQFuc5LvZwCmGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694976208502?e=2147483647&v=beta&t=HvLBBAEiLvyrr5QNT__r33UHvbx7Xc6kU3rd0DjrSHg"/>
  <div className="text-xl font-sans">

  Hi, I'm Tariq! 👋 I'm a Solutions Architect with a passion for building scalable, impactful systems that solve real-world problems. I design and implement complex distributed architectures using cloud technologies like Azure and AWS ☁️ <br/>
   I have experience across the full technology stack - from data pipelines and search APIs to fraud detection platforms and automation systems. My background spans fintech, insurance, and enterprise software 💼 <br/>
    Beyond work, I'm genuinely curious about technology trends, cybersecurity 🔐, and human psychology. I enjoy sharing what I learn through technical articles and side projects. When I'm not architecting solutions, you'll find me gaming 🎮, watching anime, or diving into a good book 📚 on productivity or philosophy.


</div>
</div>
<div>
<div className="text-2xl font-sans font-bold text-black mt-16 mb-8 ">Content I recommend that you might enjoy: </div>
<div className="text-xl font-sans font-medium text-black mb-2">Podcasts🎙️<br/>
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

  <div className="text-xl font-sans font-medium text-black mb-2">Video Games🎮<br/>
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

  <div className="text-xl font-sans font-medium text-black mb-2">Books📖<br/>
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

  <div className="text-xl font-sans font-medium text-black mb-2">Anime⛩️<br/>
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
