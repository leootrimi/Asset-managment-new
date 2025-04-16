import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function RequestModal({ open, onClose, request, onSave }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (request) {
      setFormData(request);
    }
  }, [request]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-white/10">
      <div className="w-full max-w-md rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Edit Request</h2>
          <button
            type="button"
            className="p-1 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <XMarkIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
              Equipment
            </label>
            <input
              id="equipment"
              type="text"
              value={formData.equipment || ''}
              onChange={(e) => handleChange('equipment', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="requestedBy" className="block text-sm font-medium text-gray-700">
              Requested By
            </label>
            <input
              id="requestedBy"
              type="text"
              value={formData.requestedBy || ''}
              onChange={(e) => handleChange('requestedBy', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={formData.date || ''}
              onChange={(e) => handleChange('date', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={formData.status || ''}
              onChange={(e) => handleChange('status', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="waiting">Waiting</option>
              <option value="inProgress">In Progress</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}