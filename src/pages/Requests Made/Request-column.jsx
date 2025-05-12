"use client"

import { useState } from "react"
import { Clock, Check, X, MoreHorizontal } from 'lucide-react'

export default function RequestColumn({ title, count, requests, status, updateStatus, className }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "approved":
        return <Check className="h-4 w-4 text-emerald-500" />
      case "rejected":
        return <X className="h-4 w-4 text-rose-500" />
    }
  }

  return (
    <div className={`flex flex-col rounded-lg border-t-4 bg-white p-4 shadow-sm ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getStatusIcon(status)}
          <h2 className="font-semibold">{title}</h2>
          <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {count}
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        {requests.length === 0 ? (
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-gray-300 p-4">
            <p className="text-sm text-gray-500">No requests</p>
          </div>
        ) : (
          requests.map((request) => <RequestCard key={request.id} request={request} updateStatus={updateStatus} />)
        )}
      </div>
    </div>
  )
}

function RequestCard({ request, updateStatus }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return (
          <span className="inline-flex items-center rounded-full border border-rose-500 px-2.5 py-0.5 text-xs font-medium text-rose-500">
            High
          </span>
        )
      case "medium":
        return (
          <span className="inline-flex items-center rounded-full border border-amber-500 px-2.5 py-0.5 text-xs font-medium text-amber-500">
            Medium
          </span>
        )
      case "low":
        return (
          <span className="inline-flex items-center rounded-full border border-emerald-500 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
            Low
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium">{request.title}</h3>
          <div className="relative">
            <button
              className="rounded-full p-1 hover:bg-gray-100"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <MoreHorizontal className="h-4 w-4 text-gray-500" />
              <span className="sr-only">Actions</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
                {request.status !== "pending" && (
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      updateStatus(request.id, "pending")
                      setDropdownOpen(false)
                    }}
                  >
                    Mark as Pending
                  </button>
                )}
                {request.status !== "approved" && (
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      updateStatus(request.id, "approved")
                      setDropdownOpen(false)
                    }}
                  >
                    Approve
                  </button>
                )}
                {request.status !== "rejected" && (
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      updateStatus(request.id, "rejected")
                      setDropdownOpen(false)
                    }}
                  >
                    Reject
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mb-3 text-sm text-gray-500">
          <p>Requested by: {request.requester}</p>
          <p>Asset: {request.assetType}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getPriorityBadge(request.priority)}
            <span className="text-xs text-gray-500">{new Date(request.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
