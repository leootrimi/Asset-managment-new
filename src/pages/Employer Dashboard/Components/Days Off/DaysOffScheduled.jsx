import { useEffect, useState } from "react";
import DaysOffTable from "./DaysOffTable";
import EmptySchedulingList from "./EmptySchedulingList";
import { apiRequest } from "../../../../services/ApiCalls";

const Status = {
  Approved: 'Approved',
  Rejected: 'Rejected',
  Pending: 'Pending'
}

export default function DaysOffScheduled() {
  const [daysOff, setDaysOff] = useState([])

  useEffect(() => {
    async function fetchHolidaysSchedled() {
      try {
        const response = await apiRequest({ endpoint: '/holidays' })
        setDaysOff(response)        
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchHolidaysSchedled()
  }, [])

  return (
    <>
      {daysOff.length === 0 ?
        (<EmptySchedulingList />)
        :
        (<DaysOffTable daysOff={daysOff} />)}
    </>
  );
}