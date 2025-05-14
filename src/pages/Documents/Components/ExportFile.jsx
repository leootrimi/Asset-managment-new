export default function ExportFile({ title, description, icon }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 hover:shadow-md transition-all duration-200 w-full">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            <div className="ml-4">{icon}</div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="inline-flex items-center px-3 py-1.5 border border-teal-500 text-xs font-medium rounded text-teal-700 bg-teal-50 hover:bg-teal-100">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              PDF
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-teal-500 text-xs font-medium rounded text-teal-700 bg-teal-50 hover:bg-teal-100">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Excel
            </button>
          </div>
        </div>
      )
  }
