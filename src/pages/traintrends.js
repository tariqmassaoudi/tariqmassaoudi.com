import * as React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LineBookingTime from "../components/linebookingtime"
import HeatMap from "../components/heatmap"
// import LineCostPerKm from "../components/linecostperkm"
import Histogram from "../components/histogram"
import LineHours from "../components/linehours"
import BarDays from "../components/bardays"
import TrainImage from "../images/train.png"
import DaciaLogan from "../images/dacia_logan.png"



const TrainTrends = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Layout location={location} title={siteTitle}>
      <div className="font-sans">
        <header>
      <h1>Strategic Train Travel in Morocco: Insights from Data Analysis</h1>
      <p className="text-xl">April 09, 2023</p>
      </header>
      <div className="text-3xl font-bold font-sans mt-8 mb-8">Introduction 🚂</div>
   
      <p className="text-base" >
      If you're a regular train traveler in Morocco, you know that it's a convenient and cost-effective way to get around the country. 
      But did you know that by planning ahead and booking strategically, you can save even more money on your train trips?
      In this article, we've scraped over 2000 data points on train ticket prices in Morocco and analyzed it to bring you insights and tips for optimizing your travel budget.
      We'll show you the best time to book your ticket to get the lowest price, how to book in advance to maximize your savings, and even break down the cost per kilometer of train travel in Morocco.
      Whether you're a commuter, a student, or a traveler looking to explore the country, this article will give you the tools you need to make the most of Morocco's train network.
      So let's get started and unlock the secrets of affordable train travel in Morocco!
      </p>
      <div className="text-3xl font-bold font-sans mt-8 mb-8">Taking a Look at The Ticket Landscape 🔭</div>


      
      <p>The chart provides insights into the probability of randomly selecting a train ticket with a specific premium. The premium is calculated as the percentage difference between the ticket price and the minimum price for that ticket. A higher premium indicates that the ticket is more overpriced. Based on our analysis, there's a 70% chance that a randomly selected ticket will have a premium between 0% and 30%. However, it's important to note that there are tickets available with premiums as high as 80%, so it's crucial to be vigilant while making a purchase.</p>
      <Histogram/>
        <div className="text-3xl font-bold font-sans mt-8 mb-8">Strategically Choose The Day And Hour Of Your Trip📅</div>
        <p className="text-base">We can see that Saturday, Monday, Tuesday and Thursday are relatively cheap with a premium on average of around 18 %. There's more demand on Sunday, Wednesday and Friday so the prices can shoot up to 29 % premium on Fridays.</p>
        <BarDays/>
        <p className="text-base">Peak Hours Occur around 20 and 14 which sees over 40 to 50 Percent increase over the potential minimum ticket price. The best hours cost wise are late at night or in the morning up until noon.</p>
        <LineHours/>
        <p className="text-base">You can use this heatmap as a reference to pick the optimal day and hour, the lighter the cell. The less expensive a time slot is The values are the premium in percent that you'll pay on average over the minimum potential price.</p>
        <HeatMap/>
       
      
      <div className="text-3xl font-bold font-sans mt-8 mb-8">Book In Advance To Optimize Your Cost ⌛</div>
      <p >By booking on the same day you are paying on average a premium of 37% over the potential minium price!
        The more you book in advance, the lower is the price!  
        You will see significant discounts by booking in advance for up to 7 days. For example if your minium trip price is 100 MAD and you book 6 days in advance you'll be on average paying 112,5 MAD instead of 137,6 MAD.</p>
      <LineBookingTime/>
      <div className="text-3xl font-bold font-sans mt-8 mb-8">Save Big by Choosing Trains Instead of Driving 🚗</div>
      <p>
      In this section, we'll take a closer look at the cost of train travel versus driving a car in Morocco. By comparing the cost per kilometer, we can help you make an informed decision.
      </p>
      {/* <LineCostPerKm/> */}

      <div class="grid grid-cols-3 gap-4">
        <img alt="train" class="col-span-1 p-4" src={TrainImage}/>
  <div class="col-span-2 p-4"><p>

    <span className="font-semibold"> Assumptions:</span>
 <br/>
* You are using the cheapest ticket. <br/>
* You are not using any discounts. <br/> <br/>
<span className="font-semibold"> Result:</span> <br/>
Based on data collected train will cost you
on average    <span className="font-bold text-green-700">0.464 MAD </span>      per Kilometer 
</p></div>
</div>
<div class="grid grid-cols-3 gap-4">
        <img alt="dacia-logan" class="col-span-1  p-4" src={DaciaLogan}/>
  <div class="col-span-2  p-4"><p>
  <span className="font-semibold"> Assumptions:</span> <br/>
* You are using Dacia Logan Diesel a Popular Car In Morocco, it consumes 4.5 L / 100 Km. <br/>
* Price of Diesel as of 8 April 2023 is 12.65 MAD per Liter. <br/>
* We will not take into account insurance, repair and depreciation. <br/> <br/>

<span className="font-semibold"> Result:</span> <br/>
A car will cost you (4.5*12.65)/100 =   <span className="font-bold text-green-700"> 0.569 MAD</span>         Per Kilometer
</p></div>
</div>


<div>
<div className="font-semibold text-lg mt-8 mb-8">Comparaison: </div>
While taking into account only fuel costs of the Car
Taking the train is <span className="font-bold text-green-700">22% cheaper</span> than using a car .
    
</div>

<div className="text-3xl font-bold font-sans mt-8 mb-8">Conclusion 🚂</div>
<p className="text-base" >
To sum up, we have explored the vast landscape of train travel in Morocco and uncovered a wealth of insights and tips to help you make the most of your travel budget. By scraping and analyzing data on over 2000 train ticket prices, we have discovered the best days and hours to travel, as well as the importance of booking in advance to get the lowest possible price. Furthermore, we have compared the cost per kilometer of train travel in Morocco to that of using a popular car in the country, and found that taking the train is 22% cheaper on fuel costs alone. With this knowledge, you can optimize your travel plans and enjoy the convenience and affordability of train travel in Morocco. Thank you for reading, and we hope this article has been insightful and useful to you. If you have any questions or comments, please don't hesitate to reach out to us.
      </p>
    </div>
    </Layout>
  )
}

export default TrainTrends

/**
 * Head export to define metadata for the page
 *
 * See: Wednesday://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Train Trends" />

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
