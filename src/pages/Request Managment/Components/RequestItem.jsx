import { formatToDayMonth } from "../../../services/DateConverter"

const RequestItem = ({ request, section, showBottomBorder }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "APPROVED":
                return "bg-green-100 text-green-800"
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "IN_REVIEW":
                return "bg-blue-100 text-blue-800"
            case "TO DO":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getTypeColor = (type) => {
        const colors = {
            ANNUAL_LEAVE: "bg-purple-100 text-purple-800",
            "Vacation Leave": "bg-blue-100 text-blue-800",
            "Sick Leave": "bg-red-100 text-red-800",
            HARDWARE: "bg-indigo-100 text-indigo-800",
            SOFTWARE: "bg-cyan-100 text-cyan-800",
            FURNITURE: "bg-orange-100 text-orange-800",
            WORKSPACE: "bg-green-100 text-green-800",
            TRAINING: "bg-pink-100 text-pink-800",
            FACILITIES: "bg-teal-100 text-teal-800",
        }
        return colors[type] || "bg-gray-100 text-gray-800"
    }

    const getPriorityIcon = (priority) => {
        if (priority === 1) return "🔴"
        if (priority === 2) return "🟡"
        return "🟢"
    }

    const getInitials = (assignee) => {
        return assignee
    }

    return (

        <div
            className={`flex items-center justify-between p-3 ${showBottomBorder ? 'border-b border-gray-200' : ''
                } hover:bg-gray-50 transition-colors`}
        >
            <div className="flex items-center space-x-3 flex-1">

                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-600">{request.employer_name}</span>
                        <span className="bg-gray-500 w-0.5 h-4"></span>
                        <span className="text-sm text-gray-800">{request.type}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`}>
                            {request.type.replace("_", " ")}
                        </span>
                        {(request.fromDate && request.toDate) && <span className="text-xs text-gray-500">{`${formatToDayMonth(request.fromDate)} - ${formatToDayMonth(request.toDate)}`}</span>}
                        {request.department && <span className="text-xs text-gray-500">{request.department}</span>}
                        {request.description && <span className="text-xs text-gray-500">{request.description}</span>}
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(request.status)}`}>
                    {request.status.toUpperCase()}
                </span>
            </div>
        </div>
    )
}

export default RequestItem
