import React, { useState, useEffect } from 'react';
import { Bell, User, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-blue-600 mr-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
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
            <h1 className={`text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}>
              AssetFlow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }`}>
              Dashboard
            </a>
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
            } font-medium`}>
              Requests
            </a>
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }`}>
              Assets
            </a>
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
            }`}>
              Reports
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'
            }`}>
              <Bell size={20} />
            </button>
            <button className={`p-2 rounded-full transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'
            }`}>
              <User size={20} />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-3 text-blue-600 bg-blue-50 rounded-md font-medium">
            Requests
          </a>
          <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
            Assets
          </a>
          <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
            Reports
          </a>
        </nav>
      )}
    </header>
  );
};