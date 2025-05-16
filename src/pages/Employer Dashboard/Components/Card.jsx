export default function Card({ title, icon, children, className = "" }) {
    return (
      <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
        {title && (
          <div className="px-5 py-4 border-b border-gray-300">
            <div className="flex items-center">
              {icon && <span className="text-blue-600 mr-2">{icon}</span>}
              <h3 className="text-base font-medium text-gray-700">{title}</h3>
            </div>
          </div>
        )}
        <div className="px-5 py-4 max-h-64">{children}</div>
      </div>
    )
  }
  