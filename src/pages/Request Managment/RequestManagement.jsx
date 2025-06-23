"use client"

import { useEffect, useState } from "react"
import RequestSection from "./Components/RequestSection"
import { initialRequests } from "./Components/mock-data"
import { apiRequest } from "../../services/ApiCalls"
import { useProjectStore } from "../../stores/projectStore"

const RequestManagement = () => {
  const [requests, setRequests] = useState(initialRequests)
  const [holidayRequest, setHolidayRequest] = useState([])
  const selectedProject = useProjectStore.getState().selectedProject;
  const [expandedSections, setExpandedSections] = useState({
    holidays: true,
    equipment: true,
    other: true,
  })

  useEffect(() => {
    async function fetchHolidayRequest() {
      try {
        const response = await apiRequest({
          endpoint: `/holidays/upcoming/requests?companyId=${selectedProject._id}`
        })
        setHolidayRequest(response)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchHolidayRequest()
  }, [])

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sections = [
    {
      key: "holidays",
      title: "Holiday Requests",
      requests: holidayRequest,
    },
    {
      key: "equipment",
      title: "Equipment Requests",
      requests: requests.equipment,
    },
    {
      key: "other",
      title: "Other Requests",
      requests: requests.other,
    },
  ]


  return (
    <div className="max-w-full px-4 min-h-screen">
      <div className=" rounded-lg shadow-sm borderoverflow-hidden space-y-4">
        {sections.map((section) => (
          <RequestSection
            key={section.key}
            title={section.title}
            sectionKey={section.key}
            requests={section.requests}
            isExpanded={expandedSections[section.key]}
            onToggleSection={toggleSection}
          />
        ))}
      </div>
    </div>
  )
}

export default RequestManagement
