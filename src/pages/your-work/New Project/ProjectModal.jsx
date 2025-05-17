import { useState } from "react";
import { X, Minimize, Maximize, MoreVertical } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { apiRequest } from "../../../services/ApiCalls";

export default function ProjectModal({ onClose, onSubmit }) {
  const { user } = useAuth0();

  const [formData, setFormData] = useState({
    company: "",
    sector: "",
    address: "",
    city: "",
    country: "",
    owner: user.name,
    ownerId: user.sub,
    contact_email: user.email,
    contact_phone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(formData);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiRequest({endpoint: '/projects', method: 'POST', body: formData})
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e1e1e] text-gray-200 w-full max-w-2xl rounded-lg shadow-xl flex flex-col h-[90vh] max-h-[700px]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-2xl font-medium">Create Company</h2>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-700 rounded">
              <Minimize className="h-5 w-5" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <Maximize className="h-5 w-5" />
            </button>
            <button className="p-1 hover:bg-gray-700 rounded">
              <MoreVertical className="h-5 w-5" />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-gray-400 mb-6">
            Required fields are marked with an asterisk <span className="text-red-500">*</span>
          </p>

          <form id="companyForm" onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. MORO Technologies"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="sector" className="block text-sm font-medium">
                    Sector <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select sector</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Address</h3>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 123 Main Street"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Berlin"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-medium">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Germany"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Information</h3>

              <div className="space-y-2">
                <label htmlFor="owner" className="block text-sm font-medium">
                  Project Owner <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="owner"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Anna Muller"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact_email" className="block text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    value={formData.contact_email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. anna@91life.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact_phone" className="block text-sm font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact_phone"
                    name="contact_phone"
                    value={formData.contact_phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. +49 123 456789"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer with fixed buttons */}
        <div className="px-6 py-4 border-t border-gray-700 rounded-lg bg-[#1e1e1e]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="create_another"
                className="w-4 h-4 bg-[#2a2a2a] border border-gray-700 rounded focus:ring-blue-500"
              />
              <label htmlFor="create_another" className="ml-2 text-sm">
                Create another
              </label>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="companyForm"
                className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
