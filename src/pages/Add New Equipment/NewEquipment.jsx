import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useEffect } from 'react';
import { useProjectStore } from '../../stores/projectStore';
import { apiRequest } from '../../services/ApiCalls';

export default function NewEquipment() {

  const selectedProject = useProjectStore.getState().selectedProject;
  const [formData, setFormData] = useState({
    name: '',
    type: 'Laptop',
    tag: '',
    serialNo: '',
    price: '',
    assignedDate: '',
    company: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  useEffect(() => {
    formData.company = {
      id: selectedProject._id,
      companyName: selectedProject.company
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest({
        endpoint: '/equipments',
        method: 'POST',
        body: formData
      })
      if (!response.ok) {
        throw new Error('Failed to submit equipment data');
      }

      const result = await response.json();
      setFormData({
        name: '',
        type: 'Laptop',
        tag: '',
        serialNo: '',
        price: '',
        assignedDate: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3 p-3">
        <div className="border-b border-gray-900/10 pb-3">
          <h2 className="text-base/7 font-semibold text-gray-900">Equipment Image</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Upload a photo of the equipment for easy identification.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                Photo (Optional)
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="size-17 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Equipment Details</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Provide details to track and manage IT equipment.</p>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Equipment Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., Dell XPS 13"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                Equipment Type
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="type"
                  name="type"
                  autoComplete="off"
                  value={formData.type}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Laptop</option>
                  <option>Desktop</option>
                  <option>Mouse</option>
                  <option>Headphones</option>
                  <option>Monitor</option>
                  <option>Other</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="tag" className="block text-sm/6 font-medium text-gray-900">
                Tag
              </label>
              <div className="mt-2">
                <input
                  id="tag"
                  name="tag"
                  type="text"
                  autoComplete="off"
                  value={formData.tag}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., IT-ASSET-001"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="serialNo" className="block text-sm/6 font-medium text-gray-900">
                Serial Number
              </label>
              <div className="mt-2">
                <input
                  id="serialNo"
                  name="serialNo"
                  type="text"
                  autoComplete="off"
                  value={formData.serialNo}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., SN123456789"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  autoComplete="off"
                  value={formData.price}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-n/6"
                  placeholder="e.g., 999.99"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="assignedDate" className="block text-sm/6 font-medium text-gray-900">
                Assigned Date
              </label>
              <div className="mt-2">
                <input
                  id="assignedDate"
                  name="assignedDate"
                  type="date"
                  autoComplete="off"
                  value={formData.assignedDate}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}