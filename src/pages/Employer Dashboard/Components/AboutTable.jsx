import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployerEquipments from "./Employer Equipments/EmployerEquipments"
import DaysOffScheduled from "./Days Off/DaysOffScheduled"
import EmployerActivity from "./EmployerActivity"

export default function AboutTable({ checkinList, equpipments }) {
  return (
    <div className="pb-5 sm:pb-0 mb-6">

      <Tabs defaultValue="equipments" className="mt-1">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="equipments">Your equipments</TabsTrigger>
          <TabsTrigger value="days">Days off Scheduled</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        {/* Tab contents */}
        <TabsContent value="equipments">
          <EmployerEquipments checkinsList={checkinList} equipments={equpipments} />
        </TabsContent>

        <TabsContent value="days">
          <DaysOffScheduled checkinsList={checkinList} equipments={equpipments} />
        </TabsContent>

        <TabsContent value="activity">
          <EmployerActivity checkinsList={checkinList} equipments={equpipments} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
