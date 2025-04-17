import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const rows = [
  { id: 1, name: 'Laptop', type: 'Macbook M1', price: 1123.7, tag: 'MT-010-00', serial: 4.3 },
  { id: 2, name: 'Monitor', type: 'Dell', price: 125.0, tag: 'MT-010-01', serial: 4.9 },
  { id: 3, name: 'Mouse', type: 'Logitech', price: 16.0, tag: 'MT-010-02', serial: 6.0 },
  { id: 4, name: 'Headphones', type: 'Samsung', price: 66.0, tag: 'MT-010-03', serial: 4.0 },
];

export default function EmployerEquipmentTable() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 white:bg-gray-700 dark:text-black-400">
          <tr>
            <th className="px-6 py-3">Equipment</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Tag</th>
            <th className="px-6 py-3">Serial No.</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`bg-white border-b white:bg-gray-800 white:border-gray-700 hover:bg-gray-50 white:hover:bg-gray-600 ${index % 2 === 0 ? 'bg-gray-100 white:bg-gray-900' : ''}`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-black">{row.name}</td>
              <td className="px-6 py-4">{row.type}</td>
              <td className="px-6 py-4">${row.price}</td>
              <td className="px-6 py-4">{row.tag}</td>
              <td className="px-6 py-4">{row.serial}</td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => handleDelete(row.id)} className="text-red-600 hover:text-red-800">
                  <DeleteIcon size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
