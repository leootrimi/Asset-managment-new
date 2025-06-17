import React, { useState } from 'react';
import { format } from 'date-fns';
import LeaveRequestDrawer from './LeaveRequestDrawer';

export const LeaveTypeCard = ({ icon: Icon, title, description, color, daysRemaining, lastUsed, setIsOpen }) => {

  return (
    <>
      <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:translate-y-[-4px] flex flex-col min-h-[300px]">
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 ${color} transform origin-left transition-transform duration-300 group-hover:scale-x-100`}
          style={{ transform: 'scaleX(0.7)' }}
        ></div>

        <div className="p-6 flex flex-col flex-grow">
          <div className={`inline-flex items-center justify-center p-3 rounded-lg ${color.replace('bg-', 'bg-opacity-10 text-').replace('-500', '-600')} mb-4`}>
            <Icon size={24} />
          </div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-800">{daysRemaining} days</div>
              <div className="text-sm text-gray-500">remaining</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>Last used: {lastUsed ? format(new Date(lastUsed), 'MMM d, yyyy') : 'Never'}</span>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className={`mt-auto w-full inline-flex items-center justify-center px-4 py-2 rounded-md font-medium ${color.replace('bg-', 'text-white bg-')} hover:bg-opacity-90 transition-colors duration-200`}
          >
            Request Leave
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
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

    </>
  );
};