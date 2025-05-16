import Card from "./Card"

export default function TeamCard() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Team Lead",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-400"
      case "offline":
        return "bg-gray-400"
      case "away":
        return "bg-yellow-400"
      default:
        return "bg-gray-400"
    }
  }

  const onlineCount = teamMembers.filter((member) => member.status === "online").length

  return (
    <Card
      title="Team"
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="4.93" x2="9.17" y1="4.93" y2="9.17" />
            <line x1="14.83" x2="19.07" y1="14.83" y2="19.07" />
            <line x1="14.83" x2="19.07" y1="9.17" y2="4.93" />
            <line x1="14.83" x2="18.36" y1="9.17" y2="5.64" />
            <line x1="4.93" x2="9.17" y1="19.07" y2="14.83" />
          </svg>
          <span className="text-4xl font-bold text-blue-600">
            {onlineCount}/{teamMembers.length}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4">team members online</p>

        <div className="w-full">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Your Team</h4>
          <ul className="divide-y divide-gray-100 -mx-2">
            {teamMembers.map((member) => (
              <li key={member.id} className="py-2 px-2 flex items-center">
                <div className="relative mr-3">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={`${member.name}'s avatar`}
                    className="h-8 w-8 rounded-full"
                  />
                  <span
                    className={`absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-1 ring-white ${getStatusColor(member.status)}`}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.position}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
