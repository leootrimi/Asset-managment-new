import {
    UserIcon,
    CalendarIcon,
    ClockIcon,
    ComputerDesktopIcon,
    TableCellsIcon,
    ViewColumnsIcon,
  } from '@heroicons/react/24/outline'
  
  const items = [
    {
      title: 'Create an Employer',
      description: 'Make sure to have all neccessary data filled in.',
      icon: UserIcon,
      background: 'bg-pink-500',
    },
    {
      title: 'Create an Event',
      description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
      icon: CalendarIcon,
      background: 'bg-yellow-500',
    },
    {
      title: 'Create an Equipment',
      description: 'Great for mood boards and inspiration.',
      icon: ComputerDesktopIcon,
      background: 'bg-green-500',
    },
    {
      title: 'Create a Board',
      description: 'Track tasks in different stages of your project.',
      icon: ViewColumnsIcon,
      background: 'bg-blue-500',
    },
    {
      title: 'Create a Spreadsheet',
      description: 'Lots of numbers and things — good for nerds.',
      icon: TableCellsIcon,
      background: 'bg-indigo-500',
    },
    {
      title: 'Create a Timeline',
      description: 'Get a birds-eye-view of your procrastination.',
      icon: ClockIcon,
      background: 'bg-purple-500',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function NewDataOption() {
    return (
      <div className='mt-5 px-4'>
        <h2 className="text-base font-semibold text-gray-900">New things coming?</h2>
        <p className="mt-1 text-sm text-gray-500">
          Select one of the option below and start a new adventure.
        </p>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="flow-root">
              <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div
                  className={classNames(item.background, 'flex size-16 shrink-0 items-center justify-center rounded-lg')}
                >
                  <item.icon aria-hidden="true" className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#" className="focus:outline-none">
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span>{item.title}</span>
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  