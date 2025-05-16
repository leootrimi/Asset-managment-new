"use client"

import { useState } from "react"
import Card from "./Card"

export default function HolidayRequestCard() {
  const [showForm, setShowForm] = useState(false)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [reason, setReason] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Holiday request submitted:", { startDate, endDate, reason })
    alert("Holiday request submitted!")
    setStartDate("")
    setEndDate("")
    setReason("")
    setShowForm(false)
  }

  return (
    <Card
      title="Time Off"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      }
    >
        <div className="flex flex-col items-center py-4">
          <p className="text-gray-700 mb-2">Work From Home</p>
          <div className="flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600 mr-2"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-4xl font-bold text-blue-600">3,0</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">days available</p>

          <div className="flex w-full gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="flex-1 flex justify-center items-center py-2.5 px-4 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              Request Time Off
            </button>
            <button className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </button>
          </div>
        </div>
    </Card>
  )
}
