import React from 'react';

export const AssetCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 ${color} transform origin-left transition-transform duration-300 group-hover:scale-x-100`}
        style={{ transform: 'scaleX(0.8)' }}
      ></div>

      <div className="p-6">
        <div className={`inline-flex items-center justify-center p-3 rounded-lg ${color.replace('bg-', 'bg-opacity-10 text-').replace('-500', '-600')} mb-4`}>
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className={`inline-flex items-center font-medium ${color.replace('bg-', 'text-').replace('-500', '-600')} transition-colors duration-200 hover:underline`}>
          Request
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};