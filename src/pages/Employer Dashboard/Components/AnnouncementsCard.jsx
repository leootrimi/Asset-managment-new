import Card from "./Card"

export default function AnnouncementsCard() {
  const announcements = [
    {
      id: 1,
      title: "Office Closure",
      content: "The office will be closed on July 4th for Independence Day.",
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "New Health Benefits",
      content: "We've updated our health benefits package. Check your email for details.",
      date: "1 day ago",
    },
    {
      id: 3,
      title: "Quarterly Meeting",
      content: "Don't forget about the quarterly meeting next Friday at 2 PM.",
      date: "2 days ago",
    },
  ]

  return (
    <Card
      title="Announcements"
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
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" x2="12" y1="9" y2="13" />
          <line x1="12" x2="12.01" y1="17" y2="17" />
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
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="text-4xl font-bold text-blue-600">{announcements.length}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">new announcements</p>

        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Updates</h4>
          <ul className="divide-y divide-gray-100 -mx-2">
            {announcements.map((announcement) => (
              <li key={announcement.id} className="py-2 px-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold text-gray-900">{announcement.title}</h4>
                  <p className="text-xs text-gray-500 ml-2">{announcement.date}</p>
                </div>
                <p className="text-xs text-gray-600 mt-1">{announcement.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
