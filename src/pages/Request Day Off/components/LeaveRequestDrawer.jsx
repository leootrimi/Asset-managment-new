"use client"

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { apiRequest, getUserRolesFromIdToken } from "../../../services/ApiCalls"
import { useEffect } from "react"

export default function LeaveRequestDrawer({ open, setIsOpen }) {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  useEffect(() => {
  const user = userMetaData()
  if (user && user.name) {
    setFormData((prev) => ({
      ...prev,
      employeeName: user.name,
    }))
  }
}, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const userMetaData = () => {
  const user = getUserRolesFromIdToken()
  return user
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await apiRequest({
         endpoint: '/holidays',
          method: 'POST', 
          body: {
            'fromDate': formData.startDate,
            'toDate': formData.endDate,
            'type': formData.leaveType
          } })
    } catch (error) {
    }
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className="relative z-60">
        <div className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-800 px-6 py-6">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-xl font-semibold text-white">Leave Request Form</DialogTitle>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-blue-100">
                      Please fill out all required fields to submit your leave request.
                    </p>
                  </div>

                  {/* Form Content */}
                  <div className="flex-1 px-6 py-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Employee Information */}
                      <div className=" rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Employee Information</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="employeeName"
                              id="employeeName"
                              required
                              value={formData.employeeName}
                              onChange={handleInputChange}
                              disabled={true}
                              className="block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                              Employee ID *
                            </label>
                            <input
                              type="text"
                              name="employeeId"
                              id="employeeId"
                              required
                              value={formData.employeeId}
                              onChange={handleInputChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                              placeholder="Enter your employee ID"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Leave Details */}
                      <div className=" rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Leave Details</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700 mb-2">
                              Leave Type *
                            </label>
                            <select
                              name="leaveType"
                              id="leaveType"
                              required
                              value={formData.leaveType}
                              onChange={handleInputChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                            >
                              <option value="">Select leave type</option>
                              <option value="Annual Leave">Annual Leave</option>
                              <option value="Sick Leave">Sick Leave</option>
                              <option value="Personal Leave">Personal Leave</option>
                              <option value="Maternity Leave">Maternity Leave</option>
                              <option value="Paternity Leave">Paternity Leave</option>
                              <option value="Emergency Leave">Emergency Leave</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                                Start Date *
                              </label>
                              <input
                                type="date"
                                name="startDate"
                                id="startDate"
                                required
                                value={formData.startDate}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                              />
                            </div>
                            <div>
                              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                                End Date *
                              </label>
                              <input
                                type="date"
                                name="endDate"
                                id="endDate"
                                required
                                value={formData.endDate}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                              Reason for Leave *
                            </label>
                            <textarea
                              name="reason"
                              id="reason"
                              rows={4}
                              required
                              value={formData.reason}
                              onChange={handleInputChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border resize-none"
                              placeholder="Please provide a detailed reason for your leave request..."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Emergency Contact */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                              Contact Name
                            </label>
                            <input
                              type="text"
                              name="emergencyContact"
                              id="emergencyContact"
                              value={formData.emergencyContact}
                              onChange={handleInputChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                              placeholder="Emergency contact name"
                            />
                          </div>
                          <div>
                            <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="emergencyPhone"
                              id="emergencyPhone"
                              value={formData.emergencyPhone}
                              onChange={handleInputChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
                              placeholder="Emergency contact phone"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Form Actions */}
                      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-6 border-t border-gray-200">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Submit Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
