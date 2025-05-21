import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <div 
        className="absolute right-0 top-0 -mt-10 -mr-20 h-[500px] w-[500px] rounded-full bg-teal-500 opacity-20 blur-3xl"
        style={{ filter: 'blur(100px)' }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Request Time Off
          </h2>
          <p className="text-lg md:text-xl mb-8 text-emerald-100 max-w-2xl">
            Submit your time off request easily. Choose from various leave types and manage your work-life balance effectively.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 shadow-sm transition-all duration-200">
              <Calendar size={20} className="mr-2" />
              View My Balance
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-emerald-300 text-base font-medium rounded-md text-white hover:bg-emerald-800 hover:border-emerald-800 transition-all duration-200">
              Leave Policy
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};