"use client"

import { useState } from "react"
import Header from "./Components/Header"
import EquipmentRequestCard from "./Components/EquipmentRequestCard"
import HolidayRequestCard from "./Components/HolidayRequestCard"
import CheckinsListCard from "./Components/CheckinsListCard"
import TasksCard from "./Components/TasksCard"
import AnnouncementsCard from "./Components/AnnouncementsCard"
import TeamCard from "./Components/TeamCard"
import { useProjectStore } from "../../stores/projectStore"

export default function EmployerDashboard() {

  const selectedProject = useProjectStore((state) => state.selectedProject);
  const [user] = useState({
    name: "John",
    position: "Senior Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  })
  
  return (
    <div className="min-h-scree flex justify-center">
      <div className="max-w-7xl sm:px-2 py-4">
        <Header user={user} />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HolidayRequestCard />
          <EquipmentRequestCard />
          {/* <TasksCard /> */}
          <CheckinsListCard />
          <AnnouncementsCard />
          <TeamCard />
        </div>
      </div>
    </div>
  )
}
