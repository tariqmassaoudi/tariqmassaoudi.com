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
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
    title: {
      display: true,
      text: 'Difference in % Between Current Ticket Price And Minimum Ticket Price VS Days Booked In Advance Higher is More Expensive',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Days You Booked in Advance, 0 means you are booking on the same day'
      },
      ticks: {
        beginAtZero: true,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Average Difference in % Between Current Ticket Price And Minimum Ticket Price'
      },
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

const labels = ['0', '1', '2', '3 ', '4', '5', '6','7','8 ','9 ','10'];

export const data = {
  labels,
  datasets: [
    {
      label: 'test',
      data: [37.69, 31.6 , 27.16, 25.64, 22.47, 14.51, 12.5 , 16.53, 16.85,
        17.42, 12.32, 13.63],
      borderColor: 'rgb(56, 161, 105)',
      backgroundColor: 'rgba(56, 161, 105, 0.5)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4

    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
