import { format } from 'date-fns'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Status = {
  Approved: 'Approved',
  Rejected: 'Rejected',
  Pending: 'pending'
}

export default function DaysOffTable({ daysOff }) {
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
                      Applied in
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Leave Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {daysOff.map((daysOff, index) => (
                    <tr
                      key={daysOff.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="relative py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {format(new Date(daysOff.appliedDate), 'yyyy-MM-dd')}
                        {index !== 0 && (
                          <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />
                        )}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {format(new Date(daysOff.fromDate), 'yyyy-MM-dd')}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {format(new Date(daysOff.toDate), 'yyyy-MM-dd') || '—'}
                      </td>
                      <td className="px-3 py-4 text-sm flex">
                        <span
                          className={classNames(
                            daysOff.status === Status.Approved
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800',
                            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'
                          )}
                        >
                          {daysOff.status}
                        </span>
                        {index == 0 &&
                          <span className="relative ml-2 bg-gradient-to-br from-blue-700 to-blue-900 text-white text-xs items-center inline-flex font-medium px-2 rounded-xl">Latest</span>
                        }
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {daysOff.type}
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