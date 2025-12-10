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
        
        <SideCard imageSrc={"https://github.com/tariqmassaoudi/pr-buddy/raw/main/chrome-extension/src/assets/icon128.png"} title={"PR Buddy 🤖"} description={"An autonomous AI Agent built with LangGraph that acts as a code reviewer. Chrome Extension seamlessly integrates with Azure DevOps for AI-powered PR descriptions and code reviews."}
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/pr-buddy",
            label: "GitHub"
          }
        ]}/>

        <SideCard target="_self" imageSrc={"https://user-images.githubusercontent.com/52799665/233961207-370cf384-f032-4845-a758-145fecec68ae.png"} title={"Data Stories"} description={"A collection of data visualizations answering meaningful questions. Data is scraped then cleaned & analyzed to produce delightful stories☀️"}
        
        
        links={[
          {
          
            type: "demo",
            url: "/stories",
            label: "Stories"
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
            type: "article",
            url: "https://www.tariqmassaoudi.com/jumia-price-comparator/",
            label: "Article"
          }
        ]}/>

       
          <SideCard imageSrc={"https://user-images.githubusercontent.com/52799665/233782346-9ab287cb-0619-4b97-bbcf-da168a9c1b21.png"} title={"AI Tariq🤖"} description={"RAG-powered AI clone using LangChain, Pinecone & my chat history. FastAPI backend with vector embeddings for semantic search. Deployed on AWS ECS."}
        
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/aitariq_notebooks",
            label: "GitHub"
          },
          {
            type: "article",
            url: "https://tariqmassaoudi.medium.com/how-i-created-an-ai-clone-of-myself-48f4452c6adf",
            label: "Article"
          }
        ]}/>
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



<SideCard  imageSrc={"https://user-images.githubusercontent.com/52799665/228670425-440ab75a-077b-4343-bbb4-c9bc9eb8383e.png"} title={"tariqmassaoudi.com"} description={"A minimalist modern portfolio website integrating a blog built with gatsby and tailwind"} 
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/tariqmassaoudi.com",
            label: "GitHub"
          }
        ]}/>

<SideCard  imageSrc={"https://challengedata.ens.fr/logo/public/CFM_CoRGB_300dpi_Tight_box.png"} title={"Where will the next trade take place? by CFM"} description={"Given recent trades and order books from a set of trading venues,in this project we are predicting on which trading venue the next trade will be executed."} 
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/CFM-2020-EMINES",
            label: "GitHub"
          },
          {
            type: "demo",
            url: "https://github.com/tariqmassaoudi/CFM-2020-EMINES/raw/master/CFM-EMINES-FINAL.pptx",
            label: "Presentation (French)"
          }
        ]}/>

<SideCard  imageSrc={"https://spotintelligence.com/wp-content/uploads/2024/05/batch-gradient-descent.jpg"} title={"Gradient Decent Animated"} description={"In this project I'm illustrating how Gradient Decent works visually using animation. It could be used as supplementary course material to explain Gradient Decent."} 
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/GradientDecentAnimated",
            label: "GitHub"
          },
          {
            type: "article",
            url: "https://medium.com/analytics-vidhya/gradient-decent-animated-25f4bdd39109",
            label: "Article"
          }
        ]}/>
<SideCard  imageSrc={"https://user-images.githubusercontent.com/52799665/229299526-e9dc84d2-9b0c-4a19-915e-d27db850093f.png"} title={"Kmeans Animated"} description={"A simple script that generates an animation for the K means algorithm using p5.js"} 
        
        links={[
          {
            type: "github",
            url: "https://github.com/tariqmassaoudi/KmeansVisualization",
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
