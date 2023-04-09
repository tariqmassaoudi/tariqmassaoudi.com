import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Days Of The Week From Cheapest To Most Expensive',
    },
  },
};

const labels = ['Saturday', 'Monday', 'Tuesday', 'Thursday', 'Sunday', 'Wednesday','Friday'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Difference in % Between Current Ticket Price And Minimum Ticket Price VS Days Booked In Advance Higher is More Expensive',
      data: [17.97, 18.08, 18.32, 18.52, 23.02, 27.69, 29.21],
      backgroundColor: 'rgba(56, 161, 105, 0.5)',
    }
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
