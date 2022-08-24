import * as React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Quote from "../components/quote"

const Quotes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <div>
      <Layout location={location} title={siteTitle}>
      <div>
        <div className="text-3xl font-bold font-sans mb-8">Favorite Quotes 🖋</div>
     
        <Quote author="Antoine de Saint-Exupery" body="Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away" image="https://www.linflux.com/wp-content/uploads/2017/09/St-EX.jpg"/>
        <Quote author="Braum - League of Legends" body="The darker the night, the brighter the stars" image="https://i.pinimg.com/564x/c0/da/d2/c0dad2264f86c83a5265524f88192d47.jpg"/>
        <Quote author="Charlie Chaplin" body="Life is a tragedy when seen in close-up, but a comedy in long-shot." image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Charlie_Chaplin.jpg/819px-Charlie_Chaplin.jpg"/>
        <Quote author="Master Oogway" body="Yesterday is history. Tomorrow is a mystery. Today is a gift. That’s why we call it ‘The Present’" image="https://i.pinimg.com/736x/96/93/50/96935006e7e6f230fc9cdc93743a5a7b.jpg"/>
        <Quote author="Marcus Aurelius" body="It is not death that a man should fear, but he should fear never beginning to live" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/800px-MSR-ra-61-b-1-DM.jpg"/>
        <Quote author="Albert Einstein" body="When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity" image="https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg"/>
        <Quote author="H. Jackson Brown Jr" body="Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover." image="https://pbs.twimg.com/profile_images/413679249803849728/WIlHJisq_400x400.jpeg"/>
        <Quote author="J. A. Shedd" body="A ship in harbor is safe, but that is not what ships are built for" image="https://upload.wikimedia.org/wikipedia/en/archive/6/6c/20080915000643%21JohnGravesShedd.jpg"/>
        <Quote author="Theodore Roosevelt" body="In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing" image="https://upload.wikimedia.org/wikipedia/commons/6/64/President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg"/>


    </div>
    </Layout>
   
    </div>
  
  )
}

export default Quotes

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Quotes" />

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
