import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, motion } from 'framer-motion';
import EmployerEquipments from './Employer Equipments/EmployerEquipments';
import DaysOffScheduled from './Days Off/DaysOffScheduled';
import EmployerActivity from './EmployerActivity';

const tabs = [
  { name: 'Your equipments', href: '#', component: EmployerEquipments },
  { name: 'Days off Scheduled', href: '#', component: DaysOffScheduled },
  { name: 'Activity', href: '#', component: EmployerActivity },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AboutTable({ checkinList, equpipments}) {
  const [activeTab, setActiveTab] = useState(tabs.find((tab) => tab.name === 'Activity').name);
  const [prevTabIndex, setPrevTabIndex] = useState(tabs.findIndex((tab) => tab.name === 'Activity'));

  const handleTabClick = (tabName) => {
    const newTabIndex = tabs.findIndex((tab) => tab.name === tabName);
    setPrevTabIndex(tabs.findIndex((tab) => tab.name === activeTab));
    setActiveTab(tabName);
  };

  const activeTabIndex = tabs.findIndex((tab) => tab.name === activeTab);
  const ActiveComponent = tabs[activeTabIndex]?.component;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%', 
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const direction = activeTabIndex > prevTabIndex ? 1 : -1;

  return (
    <div className="pb-5 sm:pb-0 mb-6">
      <h3 className="text-base font-semibold text-gray-900">About you</h3>
      <div className="mt-3 sm:mt-4">
        <div className="grid grid-cols-1 sm:hidden">
          <select
            value={activeTab}
            onChange={(e) => handleTabClick(e.target.value)}
            aria-label="Select a tab"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
          />
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.name);
                }}
                aria-current={activeTab === tab.name ? 'page' : undefined}
                className={classNames(
                  activeTab === tab.name
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium cursor-pointer',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative mt-4" style={{ minHeight: '200px' }}>
          <AnimatePresence initial={false} custom={direction}>
            {ActiveComponent && (
              <motion.div
                key={activeTab}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="inset-0 w-full"
                style={{ transformOrigin: 'center' }}
              >
                <ActiveComponent checkinsList={checkinList} equipments={equpipments} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}