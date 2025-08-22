import { formatToDayMonth } from "@/services/DateConverter"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Status = {
  Approved: "approved",
  Rejected: "rejected",
  Pending: "pending",
}

export default function DaysOffTable({ daysOff }) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Applied in</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Leave Type</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {daysOff.map((dayOff, index) => (
            <TableRow key={dayOff._id} className="hover:bg-gray-50">
              <TableCell className="font-medium">
                {formatToDayMonth(dayOff.appliedDate)}
              </TableCell>

              <TableCell>{formatToDayMonth(dayOff.fromDate)}</TableCell>

              <TableCell>{formatToDayMonth(dayOff.toDate) || "—"}</TableCell>

              <TableCell className="flex items-center space-x-2">
                <span
                  className={classNames(
                    dayOff.status === Status.Approved
                      ? "bg-green-100 text-green-800"
                      : dayOff.status === Status.Rejected
                      ? "bg-red-100 text-red-800"
                      : "bg-orange-100 text-orange-800",
                    "inline-flex items-center rounded-full px-2.5 py-2 text-xs font-medium "
                  )}
                >
                  {dayOff.status.toUpperCase()}
                </span>

                {index === 0 && (
                  <span className="bg-gradient-to-br from-blue-700 to-blue-900 text-white text-xs font-medium px-2 py-1.5 rounded-xl">
                    Latest
                  </span>
                )}
              </TableCell>

              <TableCell>{dayOff.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
