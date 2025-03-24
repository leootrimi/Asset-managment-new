// Sidebar.jsx
import { useState } from 'react';
import { 
  HomeIcon, 
  UserIcon, 
  CogIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', path: '/' },
    { icon: UserIcon, label: 'Profile', path: '/profile' },
    { icon: CogIcon, label: 'Settings', path: '/settings' },


  ];

  return (
    <div className="flex sticky top-0">
      {/* Sidebar */}
      <div 
        className={`backdrop-blur-md bg-white text-gray-100
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-52'} flex flex-col`} 
      >
        {/* Sidebar Header */}
        <div className="p-6 pb-8 ">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg" />
              <h1 className="text-xl font-semibold tracking-tight text-[#205781]">Matrics.io</h1>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mx-auto" />
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1"> {/* Added flex-1 to push footer down */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center px-6 py-4 text-[#205781] hover:bg-[#205781] 
                hover:text-white transition-all duration-200 group relative"
            >
              <item.icon className="w-6 h-6" />
              {!isCollapsed && (
                <span className="ml-4 font-medium">{item.label}</span>
              )}
              {/* Tooltip when collapsed */}
              {isCollapsed && (
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-sm
                  rounded-md opacity-0 group-hover:opacity-100 transition-opacity
                  duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Collapse Button at Bottom */}
        <div className="p-4 border-t border-gray-800/50">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center p-2 text-[#205781] 
              hover:bg-[#4F959D] hover:text-white transition-all duration-200 rounded-lg"
          >
            {isCollapsed ? (
              <>
                <ChevronRightIcon className="w-6 h-6" />
                {!isCollapsed && (
                  <span className="ml-2 font-medium">Expand</span>
                )}
              </>
            ) : (
              <>
                <ChevronLeftIcon className="w-6 h-6" />
                <span className="ml-2 font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;