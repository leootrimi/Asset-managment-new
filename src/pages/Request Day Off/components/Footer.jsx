import React from 'react';
import { HelpCircle, FileText, Clock, Calendar } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                <HelpCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-3">
                  Contact HR for questions about leave policies or request status.
                </p>
                <a href="#" className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center">
                  Contact HR
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Leave Policy</h3>
                <p className="text-gray-600 mb-3">
                  Learn about our leave policies, entitlements, and guidelines.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                  View Policy
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600 mr-4">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Request Status</h3>
                <p className="text-gray-600 mb-3">
                  Check the status of your leave requests and history.
                </p>
                <a href="#" className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                  Track Requests
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="text-emerald-600 mr-2">
              <Calendar size={24} />
            </div>
            <h1 className="text-lg font-semibold text-gray-800">TimeOff</h1>
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            © 2025 TimeOff. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};