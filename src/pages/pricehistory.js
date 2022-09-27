import React, { useState, useEffect } from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import annotationPlugin from 'chartjs-plugin-annotation';




ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  annotationPlugin
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Price history',
    },
    autocolors: false,
    annotation: {
      annotations: {
        line1: {
          type: 'line',
          yMin: 200,
          yMax: 200,
          borderColor: 'rgb(0, 255, 0)',
          borderWidth: 2,
          borderDash:[5],
          label:{content:"average price", display: true, yAdjust:-20}
        }
      }
    }
  },
};

const url_history='https://dqfizqyds0.execute-api.eu-west-3.amazonaws.com/default/getPriceHistory'
const url_product='https://dqfizqyds0.execute-api.eu-west-3.amazonaws.com/default/getProductDetails'
// const prod_id='GA204HB0U09TGNAFAMZ'

const Pricehistory = ({ data, location }) => {
  const params = new URLSearchParams(location.search);
  const prod_id = params.get("id");

  const [name,setName]=useState('')
  const [image,setImage]=useState(null)

    const [history, setHistory] = useState({
      label:[],
      datasets:[
        {
          label: 'Price History',
          data:[],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
      ]
    })
    useEffect(() => {
      

      // declare the async data fetching function
  const fetchHistory = async (url) => {
    // get the data from the api
    const res = await fetch(url,{
              headers: {
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({"prod_id": prod_id})
          });
    // convert the data to json
    const resultData = await res.json();
    const data={}
    for (var key of Object.keys(resultData)) {
            data[new Date(key).toDateString().split(" ").slice(1,3).join(" ")]=resultData[key]
        }


    // set state with the result
              const chartData={
         
            datasets:[
              {
                label: 'Price',
                data:data,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }
            ]
            
          }
          
    setHistory(chartData);


  }

        // declare the async data fetching function
        const fetchProduct = async (url) => {
          // get the data from the api
          const res = await fetch(url,{
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({"prod_id": prod_id})
                });
          // convert the data to json
          const resultData = await res.json();
          setName(resultData.name)
          setImage(resultData.img_url)
          // setHistory(chartData);
      
      
        }

  // call the function
  fetchHistory(url_history)
    // make sure to catch any error
    .catch(console.error);;

    fetchProduct(url_product)
    .catch(console.error);;
}

, [])
    
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
      <div>
     
        <Layout location={location} title={siteTitle}>
{/* {JSON.stringify(history)} */}
<div className="text-lg font-bold font-sans">{name}</div>

<img src={image}/>
<Line options={options} data={history} />




      </Layout>
  
  
  
     
      </div>
    
    )
  }
export default Pricehistory


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