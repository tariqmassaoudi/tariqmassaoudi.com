import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogcard from "../components/blogcard"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  return (
    <div>
      
      <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      <div className="text-2xl font-semibold font-sans text-black mb-2">Featured Articles: </div>
      <ol className="flex flex-col md:flex-row" style={{ listStyle: `none` }}>
        {posts.map((post,index) => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            
            <li  className="basis-1/3 cursor-pointer mr-3"  key={post.fields.slug}>

           
{index===0?<Blogcard title={"Strategic Train Travel in Morocco: Insights from Data Analysis"} description={"Data-driven recommendations for optimizing your train travel itinerary in Morocco"} tags={["Data Analysis","Scraping"]} link={'/traintrends'} style={index+1}/>:
<Blogcard title={title} description={post.frontmatter.description || post.excerpt} tags={post.frontmatter.tag.split(',')} link={post.fields.slug} style={index+1}/>}


          
            </li>
          )
        })}
      </ol>
      <Link className="font-sans hover:underline text-black font-semibold" to="/articles">Read all articles</Link>
    </Layout>
    </div>
  
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: ASC}
      filter: {frontmatter: {title: {in: ["From Idea to Reality: Building a Price History Tool for Moroccan Ecommerce","Arabic Topic Classification On The Hespress News Dataset","How I Passed The AWS Solution Architect Associate (SAA-C03)"]}}}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          tag
          title
          description
        }
      }
    }
  }
`
