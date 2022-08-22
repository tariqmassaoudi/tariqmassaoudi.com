import * as React from "react"
import { Link, graphql } from "gatsby"
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
        <div className="text-5xl font-serif font-bold text-black my-8 pb-8">About</div>
        <div class="flex flex-row">
        <img class="object-fill h-68 w-96 mr-6 rounded-md" src={tariq}/>
  <div className="text-2xl font-sans">My Name is Tariq <br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus condimentum sem, maximus condimentum semmaxmaximus condimentum semimus condimentum semmaximus condimentum semut faucibus lacus bibendum id. Sed urna eros, aliquet at lacus tempor, lobortis fringilla sapien. Donec a elit gravida, porttitor nibh id</div>
</div>
<div>
<div className="text-3xl font-serif font-bold text-black mt-16 mb-8 ">What I'm Passionate about</div>
<div className="text-xl font-sans">Write someting here <br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus condimentum sem, ut faucibus lacus bibendum id. Sed urna eros, aliquet at lacus tempor, lobortis fringilla sapien. Donec a elit gravida, porttitor nibh id</div>
</div>

<div>
<div className="text-3xl font-serif font-bold text-black mt-16 mb-8 ">My work</div>
<div className="text-xl font-sans">Write someting here <br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus condimentum sem, ut faucibus lacus bibendum id. Sed urna eros, aliquet at lacus tempor, lobortis fringilla sapien. Donec a elit gravida, porttitor nibh id</div>
</div>

<div>
<div className="text-3xl font-serif font-bold text-black mt-16 mb-8 ">My Hobbies</div>
<div className="text-xl font-sans">Write someting here <br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus condimentum sem, ut faucibus lacus bibendum id. Sed urna eros, aliquet at lacus tempor, lobortis fringilla sapien. Donec a elit gravida, porttitor nibh id</div>
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
export const Head = () => <Seo title="All posts" />

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
