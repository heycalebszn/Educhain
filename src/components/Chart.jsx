// Chart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Bitcoin Price',
      data: [12000, 15000, 14000, 20000, 25000, 23000, 30000],
      fill: false,
      backgroundColor: 'rgb(34, 197, 94)', // Tailwind green-500
      borderColor: 'rgb(34, 197, 94)',
      tension: 0.1
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Crypto Market Overview',
    },
  },
};

const Chart = () => {
  return <Line data={data} options={options} />;
};

export default Chart;
