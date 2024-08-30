import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Bitcoin } from 'lucide-react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const chartData = {
    labels: ['19:00', '19:10', '19:20', '19:30', '19:40', '19:50'],
    datasets: [
      {
        label: 'Bitcoin/BTC',
        data: [40, 35, 30, 35, 40, 38],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="p-4 space-y-6">
      {/* Chart Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">My Assets</h3>
          <Bitcoin className="text-yellow-500" />
        </div>
        <div className="h-60">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Staked Balances */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h3 className="text-lg font-medium">Staked Balances</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">0 NEAR</p>
          <p className="text-gray-600">0 DOGS</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Rebase in 3.1 hours</p>
          <p className="text-gray-600">Approx. next rebase 0.02%</p>
        </div>
      </div>

      {/* Market Info */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
        <h3 className="text-lg font-medium">Market Info</h3>
        <div className="flex justify-between items-center">
          <p className="text-green-600">Bitcoin</p>
          <p className="text-green-600">+12.00%</p>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          <p>Market Cap: $3.560M</p>
          <p>24h Volume: $65.20M</p>
          <p>Price: $48,032.32</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;