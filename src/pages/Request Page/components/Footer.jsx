import React from 'react';
import { HelpCircle, FileText, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                <HelpCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-3">
                  Contact the IT support team for any questions about your equipment request.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Contact Support
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
                <h3 className="font-semibold text-gray-900 mb-2">Request Policy</h3>
                <p className="text-gray-600 mb-3">
                  Learn about our equipment request policy, approval process, and guidelines.
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
                  Check the status of your existing equipment requests and order history.
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
            <div className="text-blue-600 mr-2">
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
              >
                <rect width="18" height="10" x="3" y="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-gray-800">AssetFlow</h1>
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            © 2025 AssetFlow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};