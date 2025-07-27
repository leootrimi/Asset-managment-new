import { Palmtree, Thermometer, Heart, GraduationCap, Baby, Users, Clock, Plus } from 'lucide-react';
import { LeaveTypeCard } from './LeaveTypeCard';
import LeaveRequestDrawer from './LeaveRequestDrawer';
import { useState } from 'react';

export const LeaveTypeCards = () => {
  const [isOpen, setIsOpen] = useState(false)
  const leaveTypes = [
    {
      icon: Palmtree,
      title: 'Vacation Leave',
      description: 'Annual leave for holidays and personal time off.',
      color: 'bg-emerald-500',
      daysRemaining: 15,
      lastUsed: '2024-01-15'
    },
    {
      icon: Thermometer,
      title: 'Sick Leave',
      description: 'Time off for illness or medical appointments.',
      color: 'bg-red-500',
      daysRemaining: 10,
      lastUsed: '2024-02-20'
    },
    {
      icon: Heart,
      title: 'Personal Leave',
      description: 'Time off for personal matters and commitments.',
      color: 'bg-purple-500',
      daysRemaining: 5,
      lastUsed: '2024-03-01'
    },
    {
      icon: GraduationCap,
      title: 'Study Leave',
      description: 'Time off for educational purposes and exams.',
      color: 'bg-blue-500',
      daysRemaining: 8,
      lastUsed: null
    },
    {
      icon: Baby,
      title: 'Parental Leave',
      description: 'Leave for new parents and family care.',
      color: 'bg-pink-500',
      daysRemaining: 90,
      lastUsed: null
    },
    {
      icon: Users,
      title: 'Bereavement',
      description: 'Compassionate leave for family matters.',
      color: 'bg-indigo-500',
      daysRemaining: 5,
      lastUsed: null
    },
    {
      icon: Clock,
      title: 'Time in Lieu',
      description: 'Compensatory time off for overtime work.',
      color: 'bg-amber-500',
      daysRemaining: 3,
      lastUsed: '2024-02-10'
    },
    {
      icon: Plus,
      title: 'Other Leave',
      description: 'Request other types of leave not listed above.',
      color: 'bg-gray-500',
      daysRemaining: '-',
      lastUsed: null
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Choose Leave Type</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the type of leave you'd like to request. Each category has different policies and approval processes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {leaveTypes.map((leave, index) => (
          <LeaveTypeCard 
            key={index}
            icon={leave.icon}
            title={leave.title}
            description={leave.description}
            color={leave.color}
            daysRemaining={leave.daysRemaining}
            lastUsed={leave.lastUsed}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all duration-200 transform hover:scale-105">
          View Leave Calendar
        </button>
      </div>

      <LeaveRequestDrawer open={isOpen} setIsOpen={setIsOpen} />

    </section>
  );
};