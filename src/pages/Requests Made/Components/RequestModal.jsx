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
      <div className="w-full max-w-2xl rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Review Equipment Request</h2>
          <button
            type="button"
            className="p-1 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <XMarkIcon className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Display fields in grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Employee ID" value={formData.employeeId} />
          <Field label="Full Name" value={formData.fullName} />
          <Field label="Department" value={formData.department} />
          <Field label="Position/Role" value={formData.position} />
          <Field label="Equipment Type" value={formData.equipment} />
          <Field label="Priority" value={formData.priority} />
          <Field label="Request Date" value={formData.date} />
          <Field label="Preferred Delivery" value={formData.deliveryDate} />
        </div>

        {/* Editable Fields */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={formData.status || ''}
            onChange={(e) => handleChange('status', e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
          >
            <option value="waiting">🟡 Waiting</option>
            <option value="inProgress">🔵 In Progress</option>
            <option value="approved">🟢 Approved</option>
            <option value="rejected">🔴 Rejected</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Reason / Notes</label>
          <textarea
            rows={3}
            value={formData.reason || ''}
            onChange={(e) => handleChange('reason', e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
          />
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// 🔹 Reusable read-only field component
function Field({ label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value || ''}
        disabled
        className="mt-1 w-full p-1.5 rounded-md border-gray-300 bg-gray-100 text-gray-700 shadow-sm sm:text-sm"
      />
    </div>
  );
}
