'use client'
import React, { useState } from 'react';

function RouteList() {
  const [activeRow, setActiveRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const routes = [
    {
      id: 1,
      date: '2025-02-16',
      vrNumber: 'VR001',
      itemName: 'Item A',
      weight: '10kg',
      rate: '$20',
      grossAmount: '$200',
      freight: '$50',
      netAmount: '$150',
    },
    {
      id: 2,
      date: '2025-02-17',
      vrNumber: 'VR002',
      itemName: 'Item B',
      weight: '15kg',
      rate: '$25',
      grossAmount: '$375',
      freight: '$75',
      netAmount: '$300',
    },
    // Add more routes as needed
  ];

  const handleCreateNew = () => {
    alert('Create New Route');
  };

  const toggleEditMenu = (rowId) => {
    if (activeRow === rowId) {
      setActiveRow(null);
    } else {
      setActiveRow(rowId);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Create New Button */}
      <div className="flex justify-between items-center mb-0 border-b-2 pb-4">
        <h2 className="text-xl font-semibold text-gray-700">Ledger</h2>
        
      </div>
  <div className='mt-4 mb-8 border-b-2 pb-4'>
    <p>A/C Title:</p>
    <p>A/C Code:</p>
    <p>Address:</p>
    <p>Ledger of Account</p>
    <p>From: dd-mm-yyyy To 17-Feb-2025</p>


  </div>
      {/* Dropdowns and Date Pickers */}
      <div className="flex space-x-4 mt-4 items-center">
        {/* Text Input */}
        
        <div className="flex-1">
          <label htmlFor="textInput" className="block text-sm font-medium text-gray-900">
            Account
          </label>
          <input
            type="text"
            id="textInput"
            value={text}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border rounded-md text-sm text-gray-900"
            placeholder="Account"
          />
        </div>

        {/* Start Date Picker */}
        <div className="flex-1">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-900">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full mt-2 px-4 py-2 border rounded-md text-sm text-gray-900"
          />
        </div>

        {/* End Date Picker */}
        <div className="flex-1">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-900">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full mt-2 px-4 py-2 border rounded-md text-sm text-gray-900"
          />
        </div>

        {/* Toggle Switch */}
        {/* <div className="flex-1">
            <label className='block text-sm font-medium text-gray-900 mb-2' >Outstanding</label>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div
                className={`block h-8 w-14 rounded-full ${
                  isChecked ? 'bg-blue-500' : 'bg-[#E5E7EB]'
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform ${
                  isChecked ? 'transform translate-x-6' : ''
                }`}
              ></div>
            </div>
          </label>
        </div> */}
      </div>

      <div className="mt-4">
        <button className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md">
          Search
        </button>
      </div>

      {/* Table Header and Actions */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <div className="flex space-x-1">
          <button className="inline-flex items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md">
            PDF
          </button>

          <button className="inline-flex items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md">
            CSV
          </button>

          <button className="inline-flex items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md">
            Excel
          </button>

          <button className="inline-flex items-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium rounded-md">
            Print
          </button>
        </div>

        {/* Search Box */}
        <div className="relative text-gray-600 border-2 rounded-full">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: 'new 0 0 56.966 56.966' }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mt-2">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Debit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr key={route.id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{route.date}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{route.vrNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{route.grossAmount}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{route.freight}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{route.netAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Entry Count */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * 10 + 1} to {Math.min(currentPage * 10, routes.length)} of {routes.length} entries
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-400"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-400"
            onClick={() => setCurrentPage(Math.min(Math.ceil(routes.length / 10), currentPage + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteList;
