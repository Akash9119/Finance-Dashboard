"use client";

import { useState } from 'react';

const Stats = ({ registrants }) => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedMonth, setSelectedMonth] = useState('01');

  const filteredRegistrants = registrants.filter(
    (registrant) =>
      registrant.startDate.startsWith(`${selectedYear}-${selectedMonth}`)
  );

  const totalRegistrants = filteredRegistrants.length;
  const totalInvestedAmount = filteredRegistrants.reduce(
    (sum, registrant) => sum + registrant.amount,
    0
  );

  return (
    <div className="stats w-full">
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2 text-blue-600 font-bold">Year:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-2 py-1 border rounded border-black text-gray-800"
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more years as needed */}
          </select>
        </div>
        <div>
          <label className="mr-2 text-blue-600 font-bold">Month:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-2 py-1 border rounded border-black text-gray-800"
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="p-4 bg-blue-100 rounded shadow">
          <h3 className="text-lg font-bold text-blue-600">Total Registrants</h3>
          <p className="text-2xl text-gray-800">{totalRegistrants}</p>
        </div>
        <div className="p-4 bg-blue-100 rounded shadow">
          <h3 className="text-lg font-bold text-blue-600">Invested Amount</h3>
          <p className="text-2xl text-gray-800">₹{totalInvestedAmount}</p>
        </div>
        <div className="p-4 bg-blue-100 rounded shadow">
          <h3 className="text-lg font-bold text-blue-600">Withdrawals</h3>
          <p className="text-2xl text-gray-800">₹0</p>
        </div>
        {/* <div className="p-4 bg-blue-100 rounded shadow">
          <h3 className="text-lg font-bold text-blue-600">Other Stats</h3>
          <p className="text-2xl text-gray-800">N/A</p>
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
