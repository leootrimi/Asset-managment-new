import DaysOffTable from "./DaysOffTable";
import EmptySchedulingList from "./EmptySchedulingList";

const Status = {
  Approved: 'Approved',
  Rejected: 'Rejected',
  Pending: 'Pending'
}

const daysOff = [
  {
    id: 1,
    appliedIn: '2025-05-27',
    from: '2025-06-01',
    till: '2025-06-07',
    status: Status.Approved
  },
  {
    id: 2,
    appliedIn: '2025-05-27',
    from: '2025-06-01',
    till: '2025-06-07',
    status: Status.Pending
  }
];

export default function DaysOffScheduled() {
  return (
    <>
      {daysOff.length === 0 ?
        (<EmptySchedulingList />)
        :
        (<DaysOffTable daysOff={daysOff} />)}
    </>
  );
}