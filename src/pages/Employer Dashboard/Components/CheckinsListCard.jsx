import Card from "./Card";

export default function CheckinsListCard() {
  // This would typically come from an API
  const checkins = [
    { id: 1, type: "Check In", time: "08:45 AM", date: "Today" },
    { id: 2, type: "Check Out", time: "05:30 PM", date: "Today" },
    { id: 3, type: "Check In", time: "09:00 AM", date: "Yesterday" },
    { id: 4, type: "Check Out", time: "06:15 PM", date: "Yesterday" },
  ]

  return (
    <Card
      title="Check-ins"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      }
    >
      <div className="flex flex-col items-center py-2">
        <div className="flex items-center mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 mr-2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
          <span className="text-4xl font-bold text-blue-600">8:45</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">Last check-in time</p>

        <div className="w-full max-h-40 overflow-y-auto pr-2">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Activity</h4>
          <ul className="divide-y divide-gray-100 -mx-2">
            {checkins.map((checkin) => (
              <li key={checkin.id} className="py-2 px-2 flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <span
                    className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${
                      checkin.type === "Check In" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <span
                      className={`text-xs font-medium ${
                        checkin.type === "Check In" ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {checkin.type === "Check In" ? "IN" : "OUT"}
                    </span>
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{checkin.type}</p>
                  <p className="text-xs text-gray-500">
                    {checkin.date} at {checkin.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
