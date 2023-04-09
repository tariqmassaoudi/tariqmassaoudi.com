import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Hours Of The Day Based On How Expensive Train Tickets Are',
    },
    
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Hours'
      },
      ticks: {
        beginAtZero: true,
      },
    
    },
  },
};
// stop it to 12
const labels = [ 0,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 23];

export const data = {
  labels,
  datasets: [
    {
      label: 'Difference in % Between Current Ticket Price And Minimum Ticket Price VS Days Booked In Advance Higher is More Expensive',
      data: [ 8.65, 18.75, 13.54, 31.97, 20.15, 22.12, 18.93, 28.83, 20.99,
        24.4 , 27.68, 39.35, 22.21, 33.06, 22.71, 15.64, 16.95, 50.  ,
        22.21, 36.11],
      borderColor: 'rgb(56, 161, 105)',
      backgroundColor: 'rgba(56, 161, 105, 0.5)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
