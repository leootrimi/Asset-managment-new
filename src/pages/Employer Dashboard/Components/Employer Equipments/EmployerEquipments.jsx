import EquipmentTable from "./EqupimentTable";
import EmptySchedulingList from "../Days Off/EmptySchedulingList";
import { Laptop2Icon } from "lucide-react";

export default function EmployerEquipments({ equipments }) {
  return (
    <div className="px-4 sm:px-4 lg:px-0">
      { !equipments || equipments.length === 0 ?
       ( <EmptySchedulingList
        icon={Laptop2Icon}
        title="You don't own any company equpiment yet!"
        description="Go to equipment and request for any necessary tool."
        />)
       : 
      ( <EquipmentTable equipments={equipments} />)
    }
    </div>
  );
}
