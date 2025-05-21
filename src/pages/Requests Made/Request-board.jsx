"use client"

import { useState } from "react"
import { Search, Filter, Plus } from 'lucide-react'
import RequestColumn from "./Request-column"
import { mockRequests } from "./mock-data"

export default function RequestBoard() {
  const [requests, setRequests] = useState(mockRequests)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRequests = requests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.requester.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.assetType.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const pendingRequests = filteredRequests.filter((request) => request.status === "pending")
  const approvedRequests = filteredRequests.filter((request) => request.status === "approved")
  const rejectedRequests = filteredRequests.filter((request) => request.status === "rejected")

  const updateRequestStatus = (id, newStatus) => {
    setRequests(requests.map((request) => (request.id === id ? { ...request, status: newStatus } : request)))
  }

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex flex-col space-y-6">
        <header className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Asset Requests</h1>
            <p className="text-gray-500">Manage equipment requests from employees</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Plus className="mr-2 h-4 w-4" />
              New Request
            </button>
          </div>
        </header>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search by title, requester, or asset type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <RequestColumn
            title="Pending"
            count={pendingRequests.length}
            requests={pendingRequests}
            status="pending"
            updateStatus={updateRequestStatus}
            className="border-t-amber-500"
          />
          <RequestColumn
            title="Approved"
            count={approvedRequests.length}
            requests={approvedRequests}
            status="approved"
            updateStatus={updateRequestStatus}
            className="border-t-emerald-500"
          />
          <RequestColumn
            title="Rejected"
            count={rejectedRequests.length}
            requests={rejectedRequests}
            status="rejected"
            updateStatus={updateRequestStatus}
            className="border-t-rose-500"
          />
        </div>
      </div>
    </div>
  )
}
