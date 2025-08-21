import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import RoundedButton from "../../../Core/RoundedButton";
import { hasRole } from "../../../services/authHelpers";
import { Roles } from "../../../services/Roles";

const EquipmentListingTable = ({ equipmentData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inUseFilter, setInUseFilter] = useState("all");

const filteredData = Array.isArray(equipmentData)
  ? equipmentData.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag?.toLowerCase().includes(searchTerm.toLowerCase());

        console.log(item.inUse);
        
      const matchesInUse =
        inUseFilter === "all" ||
        (inUseFilter === "yes" && item.inUse) ||
        (inUseFilter === "no" && !item.inUse);

      return matchesSearch && matchesInUse;
    })
  : [];

  return (
      <div className="px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Equipment</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all equipment with current status.</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <input
              type="text"
              placeholder="Search equipment..."
              className="block w-full max-w-xs rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Filter */}
            <select
              className="rounded-md border max-w-xs w-full border-gray-300 px-2 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={inUseFilter}
              onChange={(e) => setInUseFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="yes">In Use</option>
              <option value="no">Not In Use</option>
            </select>
            {
              hasRole(Roles.ADMIN) && <RoundedButton path='/equipment/add/new' text='Add New' icon={PlusIcon} />
            }
            {/* <RoundedButton path='/equpiment/add' text='Add New' icon={PlusIcon} /> */}
          </div>
        </div>

        {/* Table */}
        <div className="-mx-4 mt-8 sm:-mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Tag
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">In Use</th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">Warranty Left</th>
                <th className="relative py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredData.map((item, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {item.tag}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.type}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${item.price}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.assignedTo ? "Yes" : "No"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">{item.warrantyLeft} years</td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a href={`/equipment/${item._id}`} className="text-indigo-600 hover:text-indigo-900">
                      View<span className="sr-only">, {item.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer */}
          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <div>
              Showing <strong>1-{filteredData.length}</strong> of {equipmentData.length}
            </div>
            <div className="space-x-1">
              <button className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">
                Prev
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-900 text-white text-sm">1</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EquipmentListingTable;
