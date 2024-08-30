// Overview.jsx
import React from 'react';
import Chart from './Chart';

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Overview</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-medium mb-4">My Assets</h3>
        <Chart />
        {/* Add other components like asset details here */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {/* Asset Details Example */}
          <div className="p-4 border rounded-md text-center">
            <h4 className="font-semibold">Bitcoin (BTC)</h4>
            <p className="text-green-500">+12.00%</p>
            <p>Market Cap: $3.56M</p>
            <p>24h Volume: $65.20M</p>
            <p>Price: $48,032.32</p>
          </div>
          {/* Repeat for other assets */}
        </div>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Overview;
