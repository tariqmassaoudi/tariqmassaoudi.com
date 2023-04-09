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
      text: 'Chart.js Line Chart',
    },
  },
};
// stop it to 12
const labels = [  73. ,  193. ,  207.1,  238.3,  241.6,  251. ,  291. ,  299. ,
  305. ,  322.9,  342.8,  460.2,  532. ,  547.4,  555. ,  574. ,
  754.8,  798.6,  926.3, 1375. ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Min Price',
      data: [0.493, 0.352, 0.328, 0.415, 0.36 , 0.394, 0.385, 0.308, 0.361,
        0.344, 0.397, 0.45 , 0.367, 0.422, 0.418, 0.348, 0.417, 0.401,
        0.558, 0.455],
      borderColor: 'rgb(56, 161, 105)',
      backgroundColor: 'rgba(56, 161, 105, 0.5)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    },
    {
      label: 'Max Price',
      data: [0.671, 0.585, 0.546, 0.718, 0.604, 0.681, 0.574, 0.498, 0.502,
        0.514, 0.686, 0.613, 0.404, 0.577, 0.571, 0.582, 0.457, 0.606,
        0.622, 0.455],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
