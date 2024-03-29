import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/article"
const Articles = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  return (
    <div>
      <Layout location={location} title={siteTitle}>
      <div>
        <div className="text-3xl font-bold font-sans">Articles📝</div>
    </div>
    <div>

      <ol style={{ listStyle: `none` }}>
        {posts.map((post,index) => {
         
          if (index===1){
            return (<div>
                    <Article key={'key'} link={'/traintrends'} date={'APRIL 09, 2023'} title={'Strategic Train Travel in Morocco: Insights from Data Analysis'} description={'Data-driven recommendations for optimizing your train travel itinerary in Morocco'}/>

              <Article key={post.fields.slug} link={post.fields.slug} date={post.frontmatter.date} title={post.frontmatter.title || post.fields.slug} description={post.frontmatter.description || post.excerpt}/>
              </div>)
          }else{
            return (
              <div>
              <Article key={post.fields.slug} link={post.fields.slug} date={post.frontmatter.date} title={post.frontmatter.title || post.fields.slug} description={post.frontmatter.description || post.excerpt}/>
              </div>
            )
          }
          
        })}
      </ol>
  
    </div>
    </Layout>



   
    </div>
  
  )
}

export default Articles

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Articles" />

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
