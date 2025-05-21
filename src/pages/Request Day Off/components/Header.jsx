import React, { useState, useEffect } from 'react';
import { Bell, User, Menu, X, Calendar } from 'lucide-react';

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
            <div className="text-emerald-600 mr-2">
              <Calendar size={32} />
            </div>
            <h1 className={`text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}>
              TimeOff
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-800 hover:text-emerald-600'
            }`}>
              Dashboard
            </a>
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-800 hover:text-emerald-600'
            } font-medium`}>
              My Requests
            </a>
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-800 hover:text-emerald-600'
            }`}>
              Calendar
            </a>
            <a href="#" className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-800 hover:text-emerald-600'
            }`}>
              Team
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
            
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-3 text-emerald-600 bg-emerald-50 rounded-md font-medium">
            My Requests
          </a>
          <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
            Calendar
          </a>
          <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
            Team
          </a>
        </nav>
      )}
    </header>
  );
};