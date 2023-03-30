import * as React from "react"
import {graphql } from "gatsby"

// import Layout from "../components/layout"
import Seo from "../components/seo"
// import Plot from 'react-plotly.js';
// import Renault from "../images/Renault.png"
// import Peugeot from "../images/Peugeot.png"
// import Volkswagen from "../images/Volkswagen.png"
// import Dacia from "../images/Dacia.png"
// import Fiat from "../images/Fiat.png"
// import MercedesBenz from "../images/Mercedes-Benz.png"
// import Citroen from "../images/Citroen.png"
// import Ford from "../images/Ford.png"
// import Hyundai from "../images/Hyundai.png"
// import Toyota from "../images/Toyota.png"




const Quotes = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <div></div>
//     <div>
//       <Layout location={location} title={siteTitle}>
//       <div>
//         {/* <div className="text-3xl font-bold font-sans mt-8 mb-24">Couple of Favorite Quotes that Might Inspire You 💡</div> */}
//         <Plot
//         data={[

//           {type: 'bar', x: ['Renault',
//           'Peugeot',
//           'Volkswagen',
//           'Dacia',
//           'Fiat',
//           'Mercedes-Benz',
//           'Citroen',
//           'Ford',
//           'Hyundai',
//           'Toyota'], y: [19844, 15389, 14630, 11555, 11031, 9397, 6600, 6234, 6006, 3568].map((n)=>(n/132058))
//           ,text: [19844, 15389, 14630, 11555, 11031, 9397, 6600, 6234, 6006, 3568].map((n)=>((n/132058)*100).toFixed(1)).map(String).map(s => s+'%'),
//           textposition: 'auto',
         
//           marker: {
//             color: 'rgba(50,171, 96, 0.7)',
//             line: {
//               color: 'rgba(50,171,96,1.0)',
//               width: 2
//             }
//           },
//           font: {
//             family: 'Arial',
//             size: 14,
//             color: 'rgba(245,246,249,1)'
//           },
//         }
          
//         ]}



//         layout={ {width: 800, height: 600, title: 'Top Brands In Morocco',
//         xaxis: {
//             showgrid: false
//         },
//         yaxis: {
//             showgrid: false,
//             tickformat: ".1%"
            
//         },
//         images: [
//             {
//               "source": Renault,
//               "xref": "paper",
//               "yref": "paper",
//               "x": 0.05,
//               "y": 0.95,
//               "sizex": 0.15,
//               "sizey": 0.15,
//               "xanchor": "center",
//               "yanchor": "bottom"
//             },
//             {
//               "source": Peugeot,
//               "xref": "paper",
//               "yref": "paper",
//               "x": 0.15,
//               "y": 0.75,
//               "sizex": 0.15,
//               "sizey": 0.15,
//               "xanchor": "center",
//               "yanchor": "bottom"
//             },
//             {
//                 "source": Volkswagen,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.25,
//                 "y": 0.72,
//                 "sizex": 0.1,
//                 "sizey": 0.1,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": Dacia,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.35,
//                 "y": 0.58,
//                 "sizex": 0.13,
//                 "sizey": 0.13,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": Fiat,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.45,
//                 "y": 0.55,
//                 "sizex": 0.1,
//                 "sizey": 0.1,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": MercedesBenz,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.55,
//                 "y": 0.45,
//                 "sizex": 0.15,
//                 "sizey": 0.15,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": Citroen,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.65,
//                 "y": 0.33,
//                 "sizex": 0.1,
//                 "sizey": 0.1,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": Ford,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.75,
//                 "y": 0.32,
//                 "sizex": 0.1,
//                 "sizey": 0.1,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": Hyundai,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.85,
//                 "y": 0.3,
//                 "sizex": 0.1,
//                 "sizey": 0.1,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//               {
//                 "source": Toyota,
//                 "xref": "paper",
//                 "yref": "paper",
//                 "x": 0.95,
//                 "y": 0.15,
//                 "sizex": 0.12,
//                 "sizey": 0.12,
//                 "xanchor": "center",
//                 "yanchor": "bottom"
//               },
//           ]} } config={{responsive:true,displayModeBar :false}} />




// <Plot
//         data={[

//           {type: 'scatter',  x: ['Neuf','0 - 100 000', '100 000 - 150 000', '150 000 - 200 000',
//           '200 000 - 249 999', '250 000 - 299 999', '300 000 - 349 999',
//           '350 000 - 399 999', '400 000 - 449 999', '450 000 - 499 999',
//           'Plus de 500 000'],
//           y: [100,49.76078771, 47.28488573, 39.11865097, 33.77785398, 31.00501634,
//             27.86294464, 28.53916294, 27.12194541, 33.32518463, 31.64026529].map(n=>n/100),
          
         
//           marker: {
//             color: 'rgba(50,171, 96, 0.7)',
//             line: {
//               color: 'rgba(50,171,96,1.0)',
//               width: 2
//             }
//           },
//           font: {
//             family: 'Arial',
//             size: 14,
//             color: 'rgba(245,246,249,1)'
//           },
//         }
          
//         ]}



//         layout={ {width: 800, height: 600, title: 'Car Depreciation count > 200',
//         xaxis: {
//             showgrid: false
//         },
//         yaxis: {
//             showgrid: false,
//             tickformat: ".1%"
            
//         },
// } } config={{responsive:true}} />
//     </div>
//     </Layout>
   
//     </div>
  
  )
}

export default Quotes

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Cars Dashboard" />

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
