"use client";

import { useState } from 'react';

const RegistrantsList = ({ router }) => {
  const registrants = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Registrant ${i + 1}`,
    amount: `$${(i + 1) * 100}`,
    startDate: `2023-01-${String(i + 1).padStart(2, '0')}`,
    endDate: `2024-01-${String(i + 1).padStart(2, '0')}`,
    scheme: `Scheme ${((i % 3) + 1)}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const registrantsPerPage = 10;

  const indexOfLastRegistrant = currentPage * registrantsPerPage;
  const indexOfFirstRegistrant = indexOfLastRegistrant - registrantsPerPage;
  const currentRegistrants = registrants.slice(indexOfFirstRegistrant, indexOfLastRegistrant);

  const totalPages = Math.ceil(registrants.length / registrantsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowClick = (id) => {
    router.push(`/dashboard/registrants/${id}`);
  };

  return (
    <div className="registrants-list w-full">
      <h2 className="text-xl font-bold text-blue-600 mb-4">All Registrants</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Invested Amount</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Start Date</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700">End Date</th>
            <th className="px-4 py-2 border-b border-gray-300 text-gray-700">Scheme Name</th>
          </tr>
        </thead>
        <tbody>
          {currentRegistrants.map((registrant) => (
            <tr key={registrant.id} className="hover:bg-blue-50 cursor-pointer" onClick={() => handleRowClick(registrant.id)}>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{registrant.name}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{registrant.amount}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{registrant.startDate}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{registrant.endDate}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{registrant.scheme}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-600 disabled:font-bold"
        >
          &lt;&lt; Prev
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-600 disabled:font-bold"
        >
          Next &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default RegistrantsList;
