import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

function getCheckinStatus(checkin, checkout) {
  return checkin && checkout ? "Completed" : "On going"
}

export default function EmployerActivity({ checkinsList }) {
  return (
    <div className="">
      <div className="rounded-md border shadow-sm overflow-x-auto p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Check-In Time</TableHead>
              <TableHead>Check-Out Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {checkinsList?.map((checkin) => {
              const status = getCheckinStatus(
                checkin.checkinTime,
                checkin.checkoutTime
              )

              return (
                <TableRow key={checkin._id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {checkin.checkinDate}
                  </TableCell>
                  <TableCell>🟢 {checkin.checkinTime}</TableCell>
                  <TableCell>🔴 {checkin.checkoutTime || "—"}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        status === "Completed" ? "success" : "secondary"
                      }
                      className={
                        status === "Completed"
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      }
                    >
                      {status}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
