export default function MessageBar() {
  // Sample message data
  const messages = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
      },
      message: "Hey! Just wanted to follow up on the project timeline. Are we still on track for the Friday deadline?",
      timestamp: "2 min ago",
      isOnline: true,
    },
    {
      id: 2,
      user: {
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      message: "The new design looks amazing! I've reviewed all the components and they're perfect.",
      timestamp: "15 min ago",
      isOnline: false,
    },
    {
      id: 3,
      user: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
      },
      message: "Can we schedule a quick call tomorrow morning? I have some ideas for the user interface improvements.",
      timestamp: "1 hour ago",
      isOnline: true,
    },
    {
      id: 4,
      user: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DK",
      },
      message: "Thanks for the update! Everything looks good on my end. Let me know if you need anything else.",
      timestamp: "3 hours ago",
      isOnline: false,
    },
  ]

  return (
    <div className="w-full sm:w-80 bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
        <p className="text-sm text-gray-500 mt-1">Recent conversations</p>
      </div>

      {/* Messages List */}
      <div className="divide-y divide-gray-50">
        {messages.map((message) => (
          <div key={message.id} className="p-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
            <div className="flex items-start space-x-3">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {message.user.initials}
                </div>
                {/* Online indicator */}
                {message.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                )}
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-900 truncate">{message.user.name}</h4>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{message.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{message.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-150">
          View all messages
        </button>
      </div>
    </div>
  )
}
