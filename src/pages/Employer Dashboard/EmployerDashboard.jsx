import { useEffect, useState } from "react";
import { Search, CheckCircle, HomeIcon, ThermometerIcon, TreePalmIcon, GemIcon } from "lucide-react"
import AboutTable from "./Components/AboutTable";
import { Laptop, Mouse, Headphones, Monitor } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MessageBar from "./Components/MessageBar";
import { apiRequest } from "../../services/ApiCalls";
import useEmployerCheckinStore from "../../stores/employerCheckinStore";
import TimeSinceCheckin from "./Components/TimeSinceCheckin";
import useEmployerProfileStore from "../../stores/employerProfileStore";

export default function Dashboard() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasCheckedIn, setHasCheckedIn] = useState(null);
  const [canCheckIn, setCanCheckIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [cardStates, setCardStates] = useState([]);


  const { checkinsList, loading, error, hasCheckoutTimeInFirstCheckin, latestCheckinTime, fetchUserCheckins } = useEmployerCheckinStore();
  const { fetchEmployerEquipments, equipments, fetchEmployerDaysOff, holidays } = useEmployerProfileStore();

  useEffect(() => {
    const fetchAndCheck = async () => {
      await fetchUserCheckins();
      const hasCheckoutTime = hasCheckoutTimeInFirstCheckin();
      setCanCheckIn(hasCheckoutTime);
      const checkinTime = latestCheckinTime();

      setCheckInTime(checkinTime);
    }
    fetchAndCheck();
  }, [hasCheckedIn])

  useEffect(() => {
    const fetchEquipments = async () => {
      await fetchEmployerEquipments();
      await fetchEmployerDaysOff();
    }

    fetchEquipments();
  }, [])

  useEffect(() => {
    if (holidays) {
      setCardStates([
        { title: 'Work from home', days: holidays.workFromHomeDays, description: 'Days remaining' },
        { title: 'Holidays', days: holidays.daysOff, description: 'Days remaining' },
        { title: 'Sick leave', days: holidays.medicalLeaveDays, description: 'Days available' },
      ]);
    }
  }, [holidays]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardStates.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardStates.length - 1 ? 0 : prevIndex + 1));
  };

  const startCheckinTime = async () => {
    try {
      const response = await apiRequest({ endpoint: '/users-checkin', method: 'POST' });
      alert('You checked in successfully')
      setCheckInTime(response.checkinTime);
      setHasCheckedIn(true)
    } catch (error) {
      alert('something went wrong!')
    }
  }

  const userCheckout = async () => {
    try {
      const response = await apiRequest({ endpoint: '/users-checkin/checkout', method: 'POST' });
      alert('You checked out successfully')
      setHasCheckedIn(false)
    } catch (error) {
      alert('something went wrong!')
    }
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white">
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
            <button
              className={`${canCheckIn
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                : 'bg-gray-300 text-gray-500'
                }  rounded-full px-4 py-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition duration-200`}
              onClick={startCheckinTime}
              disabled={!canCheckIn}
            >
              <CheckCircle size={16} className="text-green-100" />
              <span>Check In</span>
            </button>

          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl p-6 bg-gradient-to-br from-gray-200 flex items-center space-x-4 overflow-hidden border-1 border-gray-300">
              {/* Left Chevron */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Content */}
              {cardStates[currentIndex] && (
                <div className="flex items-center space-x-4">
                  <div className="bg-white rounded-full w-20 h-20 ml-2 flex items-center justify-center shadow text-blue-600 font-bold text-xl">
                    <h1 className="text-4xl text-gray-500">{cardStates[currentIndex].days}</h1>
                  </div>

                  <div>
                    <h3 className="text-lg text-gray-700 font-semibold text-gray-800">
                      {cardStates[currentIndex].title}
                    </h3>
                    <p className="text-sm text-gray-500">{cardStates[currentIndex].description}</p>
                  </div>
                </div>
              )}


              {/* Right Chevron */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
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

            <div className="relative rounded-xl p-6 bg-gradient-to-br from-gray-200 flex flex-col sm:flex-row items-center gap-4 overflow-hidden border-1 border-gray-300">
              {/* Left section */}
              <TimeSinceCheckin checkInTime={checkInTime} canCheckIn={canCheckIn} />
              <div className="text-center sm:text-left z-50">
                <h3 className="text-xl font-semibold text-gray-800">{canCheckIn ? 'You are not checked in yet!' : 'You have checked in'}</h3>
                <p className="text-gray-600 mt-1">{canCheckIn ? 'Last checked in' : 'Checked in at'} <span className="font-medium">{latestCheckinTime()}</span></p>
                <button className={`${(canCheckIn) ? 'bg-gray-300 text-gray-500' : 'bg-gradient-to-r from-red-400 to-red-600 text-white'} mt-4 hover:bg-gray-200 px-4 py-1.5 rounded-2xl shadow-sm`}
                  disabled={canCheckIn}
                  onClick={userCheckout}
                >
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

          <hr className="border-t border-gray-300 my-4" />

          <AboutTable checkinList={checkinsList} equpipments={equipments} />

          <hr className="border-t border-gray-300 my-4" />


          {/* Quick Access */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Quick Links */}
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col transform transition duration-200 hover:-translate-y-1">
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
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col transform transition duration-200 hover:-translate-y-1">
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
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col transform transition duration-200 hover:-translate-y-1">
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
