import EquipmentTable from "./EqupimentTable";
import EmptySchedulingList from "../Days Off/EmptySchedulingList";
import { Laptop2Icon } from "lucide-react";

const plans = [
  // {
  //   id: 1,
  //   type: 'Laptop',
  //   name: 'MacBook Air M2',
  //   serialNo: '4GHASR324DDs',
  //   storage: '128 GB SSD disk',
  //   price: '$40',
  //   isCurrent: false,
  // },
  // {
  //   id: 2,
  //   type: 'Mouse',
  //   name: 'Logitech',
  //   serialNo: 'DD24SAM',
  //   storage: '256 GB SSD disk',
  //   price: '$80',
  //   isCurrent: true,
  // },
];

export default function EmployerEquipments() {
  return (
    <div className="px-4 sm:px-4 lg:px-0">
      { plans.length === 0 ?
       ( <EmptySchedulingList
        icon={Laptop2Icon}
        title="You don't own any company equpiment yet!"
        description="Go to equipment and request for any necessary tool."
        />)
       : 
      ( <EquipmentTable plans={plans} />)
    }
    </div>
  );
}
