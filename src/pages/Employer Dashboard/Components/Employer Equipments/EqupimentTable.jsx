import { useNavigate } from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function EquipmentTable({ equipments }) {
  const navigate = useNavigate()

  function navigateToEquipment(id) {
    navigate(`/equipment/${id}`)
  }

  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Type</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Tag</TableHead>
            <TableHead>Serial No.</TableHead>
            <TableHead>Using Since</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {equipments.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.type}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tag}</TableCell>
              <TableCell>{item.serialNo}</TableCell>
              <TableCell>{item.assignedDate}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateToEquipment(item._id)}
                  disabled={item.isCurrent}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
