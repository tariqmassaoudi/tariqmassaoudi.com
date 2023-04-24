import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SideCard from "../components/sidecard"
const SideProjects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <div>
      <Layout location={location} title={siteTitle}>
      <div>
        <div className="text-3xl font-bold font-sans mb-6">Data Stories📈</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
        <SideCard target="_self" imageSrc={"https://user-images.githubusercontent.com/52799665/233963391-d40d1849-5913-40dd-98ee-4be32ee1c75e.png"} title={"What's the optimal time to book your train trip in Morocco?"} description={"Analyzing data from ONCF train ticket prices to extract insights about train travel in Morocco"}
        
        
        links={[
          {
            type: "demo",
            url: "/traintrends",
            label: "Article"
          },
          {
            type: "demo",
            url: "https://media.licdn.com/dms/document/D4E1FAQH9ZRgSZez7nA/feedshare-document-pdf-analyzed/0/1681050572924?e=1683158400&v=beta&t=AI6GIJ8WN7Kz5mf7GpdZf_VsJ1IxK0dAYcZ9m61lekQ",
            label: "PDF"
          }
        ]}/>
        



        <SideCard imageSrc={"https://user-images.githubusercontent.com/52799665/233964030-9a3f95b6-8595-4f75-b72e-20a39af6008e.png"} title={"Are Black Friday Discounts Real?"} description={"Using popular ecommerce websites data to compare prices before and after Black Friday"}
        
        
        links={[
          {
            type: "demo",
            url: "https://media.licdn.com/dms/document/D4E1FAQF5FGufkQQodg/feedshare-document-pdf-analyzed/0/1667573271426?e=1683158400&v=beta&t=-7E4H358VfL5mFEN6kyRfI9ICjZp0Jk1divqWpK6SgU",
            label: "PDF"
          }
        ]}/>
          <SideCard imageSrc={"https://user-images.githubusercontent.com/52799665/233965279-21ca3add-a5fa-4849-b4a3-f2805e52b2fd.png"} title={"Use Data to Purchase your Next Car"} description={"Using Data from Avito to analyze the used car market in Morocco"}
        
        
        links={[
          
          {
            type: "demo",
            url: "https://media.licdn.com/dms/document/C4E1FAQGVe4ejG8NN-w/feedshare-document-pdf-analyzed/0/1671359652218?e=1683158400&v=beta&t=nvCHiAuKPqWh7gXjYyafRCXwbWHc_cAlg_5bHyEj0Y4",
            label: "PDF"
          }
       
        ]}/>

<SideCard  imageSrc={"https://user-images.githubusercontent.com/52799665/233967054-b73ce19b-1d96-427f-83fd-e53ecc3d11ae.png"} title={"What does inflation looks like?"} description={"Shows the price history for E-commerce products in Morocco. Designed to run for free on AWS free tier. One command deployement with Terraform"} 
        
        links={[
         
          {
            type: "demo",
            url: "https://dms.licdn.com/playlist/C4E05AQHU0QgxD_DFGg/mp4-720p-30fp-crf28/0/1669309115048?e=1682935200&v=beta&t=lSludZB7IxXm6yyyUtsAtRDt4-nrupZaZ9WLowY8pKc",
            label: "Animation"
          }
        ]}/>


        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"></div>
    </div>


    

    </Layout>



   
    </div>
  
  )
}

export default SideProjects

export const Head = () => <Seo title="Side Projects" />

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
