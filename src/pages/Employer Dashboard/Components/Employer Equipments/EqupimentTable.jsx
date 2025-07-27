import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EquipmentTable({ equipments }) {

    const navigate = useNavigate();

    function navigateToEquipment(id) {
      navigate(`/equipment/${id}`)
    }
  return (
    <div className="-mx-4 mt-5 ring-1 ring-gray-600 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Type</th>
            <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Name</th>
            <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Tag</th>
            <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Serial No.</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Using since</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Select</span></th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((plan, planIdx) => (
            <tr key={plan._id}>
              <td className={classNames(planIdx === 0 ? '' : 'border-t border-transparent', 'relative py-4 pl-4 pr-3 text-sm sm:pl-6')}>
                <div className="font-medium text-gray-900">
                  {plan.type}
                  {plan.isCurrent && <span className="ml-1 text-indigo-600">(Current Plan)</span>}
                </div>
                <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                  <span>{plan.name} / {plan.serialNo}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>{plan.storage}</span>
                </div>
                {planIdx !== 0 && <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" />}
              </td>
              <td className={classNames(planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell')}>{plan.name}</td>
              <td className={classNames(planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell')}>{plan.tag}</td>
              <td className={classNames(planIdx === 0 ? '' : 'border-t border-gray-200', 'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell')}>{plan.serialNo}</td>
              <td className={classNames(planIdx === 0 ? '' : 'border-t border-gray-200', 'px-3 py-3.5 text-sm text-gray-500')}>
                <div className="">{plan.assignedDate}</div>
              </td>
              <td className={classNames(planIdx === 0 ? '' : 'border-t border-transparent', 'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6')}>
                <button
                  type="button"
                  disabled={plan.isCurrent}
                  className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  onClick={() => navigateToEquipment(plan._id)}
                >
                  View<span className="sr-only">, {plan.type}</span>
                </button>
                {planIdx !== 0 && <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
