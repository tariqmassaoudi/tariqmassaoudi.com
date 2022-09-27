import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {VectorMap } from "@react-jvectormap/core"
import Morocco from "../map/morocco.json";

const Dashboard = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes
    return (
      <div>
     
        <Layout location={location} title={siteTitle}>
        <div>
          <div className="text-3xl font-bold font-sans">Dashboard</div>
          <VectorMap map={Morocco} style={{"width": "100%","height": 500,"background-color": "rgb(255, 255, 255)"}} regionStyle={{
            initial: {
              fill: '#C2272C',
              "fill-opacity": 1,
              stroke: 'white',
              "stroke-width": .5,
              "stroke-opacity": 1
          },
          hover: {
              "fill-opacity": 0.8,
              cursor: 'pointer'
          },
          selected: {
              fill: '#8a080c'
          },
          selectedHover: {
              "fill-opacity": 0.8,
              cursor: 'pointer'
          }
          }}/>
      </div>
      
      


      </Layout>
  
  
  
     
      </div>
    
    )
  }

  export default Dashboard


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
