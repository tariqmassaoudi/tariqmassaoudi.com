import * as React from "react"

import { Bar } from "react-chartjs-2";

import { useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const labels = [10, 20, 30, 40,50,60,70,80];
const data = [737, 183, 446, 132,116,227,48,48].map(i=>i*100/1937);
const options = {
  pan: {
    enabled: true,
    mode: "xy"
  },

  scales: {
    x: {
      type: "linear",
      offset: true,
      gridLines: {
        offsetGridLines: false
      },
      title: {
        display: true,
        text: "Difference in % Between Current Ticket Price And Minimum Ticket Price VS Days Booked In Advance Higher is More Expensive"
      }
    }
  },

 
};

export default function App() {

  useEffect(() => {
    
  }, []);

  return (
    <div >
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: '% of Total Ticket Number',
              borderColor: "blac",
              lineTension: 0,
              fill: false,
              borderJoinStyle: "round",
              data: data,
              borderWidth: 0.2,
              barPercentage: 1,
              categoryPercentage: 1,
            
              barThickness: "flex",
              backgroundColor: 'rgba(56, 161, 105, 0.5)'
            }
          ]
        }}
        options={options}
        
      />

    </div>
  );
}
