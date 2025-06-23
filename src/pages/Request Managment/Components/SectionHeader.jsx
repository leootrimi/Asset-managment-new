"use client"
import { ChevronDownCircleIcon, ChevronUpCircleIcon } from "lucide-react"

const SectionHeader = ({ title, count, section, isExpanded, onToggle }) => {
  return (
    <div
      className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={() => onToggle(section)}
    >
      <div className="flex items-center space-x-2">
        {isExpanded ? <ChevronDownCircleIcon size={18} /> : <ChevronUpCircleIcon size={18} />}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-sm text-gray-500">({count} requests)</span>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs">3</span>
          <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
            2
          </span>
          <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">
            1
          </span>
        </div>
        <button className="px-3 py-1 bg-gradient-to-tr from-blue-500 to-blue-700 text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Process Requests
        </button>
      </div>
    </div>
  )
}

export default SectionHeader
