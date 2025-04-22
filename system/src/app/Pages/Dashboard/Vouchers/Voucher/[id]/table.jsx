'use client';
import React, { useEffect } from 'react';

// Helper to deeply clone each row to avoid shared references
const deepCloneDetails = (details) => {
  return details.map(detail => ({
    account_code: detail.account_code || '',
    particulars: detail.particulars || '',
    debit: detail.debit || '',
    credit: detail.credit || '',
  }));
};

const VoucherDetailTable = ({ voucherDetails, setVoucherDetails }) => {

  useEffect(() => {
    // Deep clone on first load to break shared references
    const cloned = deepCloneDetails(voucherDetails);
    setVoucherDetails(cloned);
  }, []);

  const handleInputChange = (index, field, value) => {
    const updated = voucherDetails.map((row, i) => {
      if (i === index) {
        return {
          ...row,
          [field]: value,
        };
      }
      return { ...row }; // ensure separate object for each row
    });
    setVoucherDetails(updated);
  };

  const addRow = () => {
    setVoucherDetails([
      ...voucherDetails.map(row => ({ ...row })), // clone all
      {
        account_code: '',
        particulars: '',
        debit: '',
        credit: '',
      },
    ]);
  };

  const totalDebit = voucherDetails.reduce(
    (sum, item) => sum + (parseFloat(item.debit) || 0),
    0
  );

  const totalCredit = voucherDetails.reduce(
    (sum, item) => sum + (parseFloat(item.credit) || 0),
    0
  );

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-md mt-8">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Account Code</th>
            <th className="px-4 py-2 text-left">Particulars</th>
            <th className="px-4 py-2 text-right">Debit</th>
            <th className="px-4 py-2 text-right">Credit</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {voucherDetails.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={row.account_code}
                  onChange={(e) => handleInputChange(index, 'account_code', e.target.value)}
                  className="w-full border rounded px-2 py-1"
                  placeholder="e.g. 1001001"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={row.particulars}
                  onChange={(e) => handleInputChange(index, 'particulars', e.target.value)}
                  className="w-full border rounded px-2 py-1"
                  placeholder="e.g. Purchase of materials"
                />
              </td>
              <td className="px-4 py-2 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={row.debit}
                  onChange={(e) => handleInputChange(index, 'debit', e.target.value)}
                  className="w-24 border rounded px-2 py-1 text-right"
                  placeholder="0"
                />
              </td>
              <td className="px-4 py-2 text-right">
                <input
                  type="number"
                  step="0.01"
                  value={row.credit}
                  onChange={(e) => handleInputChange(index, 'credit', e.target.value)}
                  className="w-24 border rounded px-2 py-1 text-right"
                  placeholder="0"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    const updated = voucherDetails.filter((_, i) => i !== index);
                    setVoucherDetails(updated);
                  }}
                  className="text-red-500 hover:text-red-700 font-bold"
                  title="Delete Row"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 border-t font-semibold">
            <td colSpan="3" className="px-4 py-2 text-right">Totals</td>
            <td className="px-4 py-2 text-right">{totalDebit.toFixed(2)}</td>
            <td className="px-4 py-2 text-right">{totalCredit.toFixed(2)}</td>
            <td />
          </tr>
        </tbody>
      </table>
      <div className="p-4 flex justify-end">
        <button
          type="button"
          onClick={addRow}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default VoucherDetailTable;
