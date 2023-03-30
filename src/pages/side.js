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
        <div className="text-3xl font-bold font-sans mb-6">Side Projects🔨</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        <SideCard imageSrc={"https://user-images.githubusercontent.com/52799665/228668958-1f387f5d-93c3-4bc0-968b-e5b2fb8ce36a.png"} title={"Two Subs"} description={"Add two subtitles simultaneously to any video. A library of Anime ENG and JP subtitles is integrated for convinient japanese learning"}
        
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/two-subs",
            label: "GitHub"
          },
          {
            type: "demo",
            url: "https://chrome.google.com/webstore/detail/two-subs/cnjikeeaencmehgpfdfibincicljleoa?hl=en&authuser=1",
            label: "Store"
          }
        ]}/>

<SideCard  imageSrc={"https://user-images.githubusercontent.com/52799665/228613935-3e22aa58-bb38-4feb-8592-11f67e3715c4.png"} title={"Price History"} description={"Shows the price history for E-commerce products in Morocco. Designed to run for free on AWS free tier. One command deployement with Terraform"} 
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/price_history_terraform",
            label: "GitHub"
          },
          {
            type: "demo",
            url: "https://www.tariqmassaoudi.com/jumiaapp/",
            label: "Demo"
          },
          {
            type: "article",
            url: "https://www.tariqmassaoudi.com/jumia-price-comparator/",
            label: "Article"
          }
        ]}/>



<SideCard  imageSrc={"https://user-images.githubusercontent.com/52799665/228670425-440ab75a-077b-4343-bbb4-c9bc9eb8383e.png"} title={"tariqmassaoudi.com"} description={"A minimalist modern portfolio website integrating a blog built with gatsby and tailwind"} 
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/tariqmassaoudi.com",
            label: "GitHub"
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
