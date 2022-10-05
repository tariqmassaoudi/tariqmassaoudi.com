import React, { useState, useEffect } from "react"
import KpiCard from "./kpiCard";

const url_kpi="https://dqfizqyds0.execute-api.eu-west-3.amazonaws.com/default/getKpi"

const KpiSection = ({data}) => {
    const [kpi,setKpi]=useState({"Number of Products Tracked":{"metric_value":"loading..."},"Products Changed Price Since Last Week":{"metric_value":"loading..."},"Products Changed Price Since Last Month":{"metric_value":"loading..."}})
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        // declare the async data fetching function
    const fetchKpi = async (url) => {
      // get the data from the api
      const res = await fetch(url,{
                headers: {
                  'Content-Type': 'application/json'
                },
                method: "POST"
            });
      // convert the data to json
      const resultData = await res.json();
      console.log(resultData)
      // resultData['change_week'].metric_value=(resultData['change_week'.metric_value]/resultData['prod_number'].metric_value)*100
      resultData['change_week']={'metric_value':((resultData['change_week'].metric_value/resultData['prod_number'].metric_value)*100).toFixed(2)}
      resultData['change_month']={'metric_value':((resultData['change_month'].metric_value/resultData['prod_number'].metric_value)*100).toFixed(2)}

      delete Object.assign(resultData, {["Total Number of Products Tracked"]: resultData["prod_number"] })["prod_number"];
      delete Object.assign(resultData, {["Percent of Products That Changed Price Since Last Week"]: resultData["change_week"] })["change_week"];
      delete Object.assign(resultData, {["Percent of Products That Changed Price Since Last Month"]: resultData["change_month"] })["change_month"];
      
    //   delete Object.assign(resultData, {[newKey]: resultData[oldKey] })[oldKey];
    //   delete Object.assign(resultData, {[newKey]: resultData[oldKey] })[oldKey];
      setKpi(resultData)
      setLoading(false)



    
    }
    
    
    
    
    fetchKpi(url_kpi)
    
    
    }, [])

    return (     <div className="max-w-full  sm:mx-auto font-sans">
         <div className="sm:flex sm:space-x-4">
         {
          Object.keys(kpi).map((key,i)=>{
            if (i>0){
              return (
     
                <KpiCard name={key} loading={loading} value={kpi[key].metric_value + " %"}/>
                
              )
            }else{
              return (
     
                <KpiCard name={key} loading={loading} value={kpi[key].metric_value}/>
                
              )
            }
         
          })
        }
            {/* <KpiCard name={"hello"} value={"man"}/>
            <KpiCard name={"hello"} value={"man"}/>
            <KpiCard name={"hello"} value={"man"}/> */}
         </div>
        </div> );
}
 
export default KpiSection;