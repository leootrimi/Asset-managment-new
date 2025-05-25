import { useState } from "react";
import { Search, Calendar, List, FileText, Users, MoreHorizontal, Plus, HomeIcon, ThermometerIcon, TreePalmIcon, GemIcon } from "lucide-react"
import AboutTable from "./Components/AboutTable";
import { Laptop, Mouse, Headphones, Monitor } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MessageBar from "./Components/MessageBar";


export default function Dashboard() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardStates = [
    { title: 'Work from home', days: 5, description: 'Days remaining' },
    { title: 'Holidays', days: 10, description: 'Days remaining' },
    { title: 'Sick leave', days: 3, description: 'Days available' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardStates.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardStates.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row pr-4">
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Search Bar */}
          <div className="mb-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search across the pins you've saved"
                className="w-full border rounded-full py-2 pl-10 pr-4 text-gray-700"
              />
            </div>
            <button className="bg-gray-700 text-white rounded-full px-4 py-2 flex items-center justify-center gap-1">
              <Plus size={16} />
              <span>Add People</span>
            </button>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl p-6 bg-gradient-to-br from-gray-600 to-gray-900 flex items-center space-x-4 overflow-hidden">
              {/* Left Chevron */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Content */}
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full w-20 h-20 ml-2 flex items-center justify-center shadow text-blue-600 font-bold text-xl">
                  <h1 className="text-4xl text-gray-500">{cardStates[currentIndex].days}</h1>
                </div>

                <div>
                  <h3 className="text-lg text-white font-semibold text-gray-800">
                    {cardStates[currentIndex].title}
                  </h3>
                  <p className="text-sm text-gray-50">{cardStates[currentIndex].description}</p>
                </div>
              </div>

              {/* Right Chevron */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Background Lines */}
              <svg
                className="absolute right-4 top-4 h-full w-1/2 opacity-60 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="100" x2="100" y2="0" stroke="#f5f5f5" strokeWidth="4" />
                <line x1="20" y1="100" x2="100" y2="20" stroke="#f5f5f5" strokeWidth="4" />
              </svg>
            </div>

            <div className="relative rounded-xl p-6 bg-gradient-to-br from-gray-600 to-gray-900 flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
              {/* Left section */}
              <h1 className="text-3xl text-white font-semibold">05<span className="text-sm">h</span> 23<span className="text-sm">min</span></h1>
              <div className="text-center sm:text-left">
                <h3 className="text-xl text-white font-semibold text-gray-800">You’re checked in</h3>
                <p className="text-gray-50 mt-1">Checked in <span className="font-medium">2h 14m ago</span></p>
                <button className="mt-4 bg-white hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md shadow-sm">
                  Check Out
                </button>
              </div>
              {/* Right section with SVG */}
              <svg
                className="absolute right-4 top-4 h-full w-1/2 opacity-60 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="100" x2="100" y2="0" stroke="#f5f5f5" strokeWidth="4" />
                <line x1="20" y1="100" x2="100" y2="20" stroke="#f5f5f5" strokeWidth="4" />
              </svg>
            </div>

          </div>

          <AboutTable />

          {/* Quick Access */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Quick Links */}
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col">
                <h3 className="text-gray-700 font-medium mb-2 mt-2 px-4 text-white">Holidays choice</h3>
                <div className="space-y-3 bg-white p-4 border rounded-3xl flex-1 overflow-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
                      <HomeIcon className="size-4 text-pink-800" />
                    </div>
                    <span className="text-gray-700">Work from home</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                      <ThermometerIcon className="size-4 text-red-800" />
                    </div>
                    <span className="text-gray-700">Out sick leave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <TreePalmIcon className="size-4 text-blue-800" />
                    </div>
                    <span className="text-gray-700">Days off work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <GemIcon className="size-4 text-green-800" />
                    </div>
                    <span className="text-gray-700">Wedding leave</span>
                  </div>
                </div>
              </div>


              {/* Files */}
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col">
                <h3 className="text-gray-700 font-medium mb-2 mt-2 px-4 text-white">Equipment findings</h3>
                <div className="space-y-3 bg-white p-4 border rounded-3xl flex-1 overflow-auto">

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      <Laptop className="w-4 h-4 text-gray-800" />
                    </div>
                    <span className="text-gray-700">Laptop</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                      <Mouse className="w-4 h-4 text-yellow-800" />
                    </div>
                    <span className="text-gray-700">Mouse</span>
                  </div>

                  {/* Headphones */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                      <Headphones className="w-4 h-4 text-purple-800" />
                    </div>
                    <span className="text-gray-700">Headphones</span>
                  </div>

                  {/* Monitor */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <Monitor className="w-4 h-4 text-green-800" />
                    </div>
                    <span className="text-gray-700">Monitor</span>
                  </div>
                </div>
              </div>

              {/* Meetings */}
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col">
                <h3 className="text-gray-700 font-medium mb-2 mt-2 px-4 text-white">Meetings</h3>
                <div className="space-y-3 bg-white p-4 border rounded-3xl flex-1 overflow-auto">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center text-blue-500 text-xs">
                      <span>12:00</span>
                      <span>14:00</span>
                    </div>
                    <span className="text-gray-700">Stakeholders Meeting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
         <aside className="flex-shrink-0">
          <MessageBar />
        </aside>
      </div>
    </div>
  )
}
