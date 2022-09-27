import React, { useState, useEffect } from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductCard from "../components/productCard"
import KpiSection from "../components/kpiSection"
import DropDown from "../components/dropdown"
const url_products='https://dqfizqyds0.execute-api.eu-west-3.amazonaws.com/default/getTopProducts'




const JumiaApp=({data,location})=>{
const siteTitle = data.site.siteMetadata?.title || `Title`
const params = new URLSearchParams(location.search);
const category = params.get("category");
const [products,setProducts]=useState({})
useEffect(() => {
    // declare the async data fetching function
const fetchProducts = async (url) => {
  // get the data from the api
  const res = await fetch(url,{
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"category": category})
        });
  // convert the data to json
  const resultData = await res.json();
  console.log(resultData)
   setProducts(resultData)

}




fetchProducts(url_products)


}, [])



    return (
        <div>

          <Layout location={location} title={siteTitle}>
         <DropDown/>
      <KpiSection/>
 {
          Object.keys(products).map((key,i)=>{
            return (<div>
     
                <ProductCard name={key} data={products[key]}/>
            </div>
                
                // <li key={i}>{products[oneKey]}</li>
              )
          })
        }
  
        </Layout>
    
    
    
       
        </div>
      
      )
}


export default JumiaApp


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