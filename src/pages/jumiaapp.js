import React, { useState, useEffect } from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductCard from "../components/productCard"
import KpiSection from "../components/kpiSection"
import DropDown from "../components/dropdown"
import SearchBar from "../components/searchbar"
import Seo from '../components/seo'

const url_products='https://dqfizqyds0.execute-api.eu-west-3.amazonaws.com/default/getTopProducts'




const JumiaApp=({data,location})=>{
const siteTitle = data.site.siteMetadata?.title || `Title`
const [products,setProducts]=useState({})
const [category,setcategory]=useState("Computing")
const [loading,setLoading]=useState(true)
const getCategory = (category) => {
  setcategory(category)
}
useEffect(() => {
    setLoading(true)
const fetchProducts = async (url) => {
  // get the data from the api
  const res = await fetch(url,{
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"category": category})
        });
  // convert the data to json
  const resultData = await res.json();

   setProducts(resultData)
   setLoading(false)

}




fetchProducts(url_products)



}, [category])



    return (
        <div>

          <Layout location={location} title={siteTitle}>
        
      <KpiSection/>
      <SearchBar/>
      <div className="mb-4 mt-6 flex">
     
      <DropDown category={category} getCategory={getCategory}/>
      {loading?<div className="bg-gray-200 ml-4 inline-block rounded-lg animate-pulse w-1/5  h-7 my-auto"></div>:<div className="font-sans flex items-center 	mx-4 "><span >Found {Object.keys(products).length} Deals</span></div>
}
   

      </div>
    
       {
        
        loading?(<div>
            {/* <div class="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none mb-2 px-2">
          <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div>
          <div class="flex flex-col flex-1 gap-5 sm:p-2">
            <div class="flex flex-1 flex-col gap-3">
              <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
            </div>
            <div class="mt-auto flex gap-3">
              <div class="bg-gray-200 w-40 h-8 animate-pulse rounded-full" ></div>
      
              <div class="bg-gray-200 w-40 h-8 animate-pulse rounded-full ml-auto" ></div>
            </div>
          </div>
          </div> */}
          <ProductCard  loading={loading}/>
          <ProductCard  loading={loading}/>
          <ProductCard  loading={loading}/>
          <ProductCard  loading={loading}/>
          <ProductCard  loading={loading}/></div>):''
       }
 {

          Object.keys(products).map((key,i)=>{
            return (<div>
     
                <ProductCard name={key} data={products[key]} loading={loading}/>
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

export const Head = () => <Seo title="Jumia Prices" />

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