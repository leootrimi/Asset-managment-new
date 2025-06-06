const checkins = [
  {
    id: 1,
    date: '2025-06-01',
    checkInTime: '09:00 AM',
    checkOutTime: '05:00 PM',
    status: 'Completed',
  },
  {
    id: 2,
    date: '2025-06-02',
    checkInTime: '10:00 AM',
    checkOutTime: null,
    status: 'Active',
  },
  {
    id: 3,
    date: '2025-06-01',
    checkInTime: '09:00 AM',
    checkOutTime: '05:00 PM',
    status: 'Completed',
  },
  {
    id: 4,
    date: '2025-06-02',
    checkInTime: '10:00 AM',
    checkOutTime: null,
    status: 'Active',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EmployerActivity() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-6 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Check-In Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Check-Out Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {checkins.map((checkin, index) => (
                    <tr
                      key={checkin.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="relative py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {checkin.date}
                        {index !== 0 && (
                          <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
                        )}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {checkin.checkInTime}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {checkin.checkOutTime || '—'}
                      </td>
                      <td className="px-3 py-4 text-sm">
                        <span
                          className={classNames(
                            checkin.status === 'Active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800',
                            'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium'
                          )}
                        >
                          {checkin.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}