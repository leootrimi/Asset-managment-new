import { Search, Calendar, List, FileText, Users, MoreHorizontal, Plus } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 p-4 md:p-6 border-b md:border-b-0 md:border-r">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Good evening Sandro!</h1>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <Calendar size={16} />
              <span>Wednesday, July 26</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Pins</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <List size={16} />
                <span>Kickoff meeting</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <List size={16} />
                <span>Getting started handy guide</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <List size={16} />
                <span>Brief of the new client's project</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <List size={16} />
                <span>Sandro's project</span>
              </li>
            </ul>
          </div>
        </aside>

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
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow text-blue-600 font-bold text-xl">
                <h1 className="text-4xl text-gray-500">5</h1>
              </div>

              <div>
                <h3 className="text-lg text-white font-semibold text-gray-800">Work from home</h3>
                <p className="text-sm text-gray-50">Days remaining</p>
              </div>

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

          {/* Quick Access */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Quick Links */}
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col">
                <h3 className="text-gray-700 font-medium mb-2 mt-2 px-4 text-white">Quick Links</h3>
                <div className="space-y-3 bg-white p-4 border rounded-3xl flex-1 overflow-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
                      <span className="text-pink-500 text-xs">Dr</span>
                    </div>
                    <span className="text-gray-700">Dribbble</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-500 text-xs">Be</span>
                    </div>
                    <span className="text-gray-700">Behance</span>
                  </div>
                </div>
              </div>


              {/* Files */}
              <div className="rounded-3xl bg-gray-700 overflow-hidden h-60 flex flex-col">
                <h3 className="text-gray-700 font-medium mb-2 mt-2 px-4 text-white">Quick Access</h3>
                <div className="space-y-3 bg-white p-4 border rounded-3xl flex-1 overflow-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <FileText size={14} className="text-green-500" />
                    </div>
                    <span className="text-gray-700">Q3 Gameplan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      <FileText size={14} className="text-gray-500" />
                    </div>
                    <span className="text-gray-400">Spreadsheet</span>
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

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                    <Users size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Team management</h3>
                    <p className="text-gray-500 text-sm">2 Persons</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img src="/placeholder.svg?height=30&width=30" alt="Avatar" className="rounded-full" />
                    <span className="text-gray-700">Jess Munroe</span>
                  </div>
                  <span className="text-gray-500 text-sm">2min ago</span>
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                    <FileText size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Highlights</h3>
                    <p className="text-gray-500 text-sm">1 Person</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img src="/placeholder.svg?height=30&width=30" alt="Avatar" className="rounded-full" />
                    <span className="text-gray-700">Suzi Hu</span>
                  </div>
                  <span className="text-gray-500 text-sm">3h ago</span>
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                    <FileText size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Productivity</h3>
                    <p className="text-gray-500 text-sm">1 Person</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img src="/placeholder.svg?height=30&width=30" alt="Avatar" className="rounded-full" />
                    <span className="text-gray-700">Jake Jones</span>
                  </div>
                  <span className="text-gray-500 text-sm">1d ago</span>
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
