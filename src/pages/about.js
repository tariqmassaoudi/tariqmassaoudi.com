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

  Hi, I'm Tariq! 🎓 I'm an <span className="font-bold text-green-700">AI Software Engineer</span> with 5+ years of experience specializing in GenAI, RAG architectures, and MLOps. I graduated from EMINES UM6P 🇲🇦 and currently work at INNOVX, where I build scalable AI platforms on Azure and AWS. <br/><br/>
  I'm passionate about integrating LLMs into enterprise workflows — from building autonomous AI agents with LangGraph to deploying ML models on Kubernetes. Previously, I architected the RAG layer for an AI engine at ALPHA10X and led fraud detection implementations at SAS. <br/><br/>
  Outside of work, I'm a lifelong learner who enjoys reading 📚, listening to podcasts 🎧, playing video games 🎮, and watching anime ⛩️.


</div>
</div>
<div>
<div className="text-2xl font-sans font-bold text-black mt-12 mb-6 ">Certifications 🎖️</div>
<div className="flex flex-wrap gap-3 mb-8">
  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-sans font-medium shadow-md">AWS Solutions Architect</span>
  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-sans font-medium shadow-md">Azure Solutions Architect Expert</span>
  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-sans font-medium shadow-md">Azure Administrator Associate</span>
</div>

<div className="text-2xl font-sans font-bold text-black mt-12 mb-6 ">Technical Skills 🛠️</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 font-sans">
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="font-bold text-green-700 mb-2">AI & LLMs</div>
    <p className="text-gray-700">LangGraph, AI Agents, RAG, OpenAI API, MLOps</p>
  </div>
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="font-bold text-blue-700 mb-2">Cloud</div>
    <p className="text-gray-700">AWS (Lambda, API Gateway, EC2), Azure (Expert), Terraform</p>
  </div>
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="font-bold text-purple-700 mb-2">DevOps</div>
    <p className="text-gray-700">Kubernetes (AKS/EKS), Docker, RabbitMQ, CI/CD</p>
  </div>
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="font-bold text-orange-700 mb-2">Languages</div>
    <p className="text-gray-700">Python (FastAPI, PySpark), SQL, React</p>
  </div>
</div>

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
