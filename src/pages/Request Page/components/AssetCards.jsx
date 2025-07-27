import React from 'react';
import { Laptop, Smartphone, Headphones, Monitor, Printer, Plus, BookOpen, Coffee } from 'lucide-react';
import { AssetCard } from './AssetCard';

export const AssetCards = () => {
  const assetTypes = [
    {
      icon: Laptop,
      title: 'Laptop',
      description: 'Request a new or replacement laptop for your work.',
      color: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device',
      description: 'Request a smartphone, tablet, or other mobile device.',
      color: 'bg-purple-500'
    },
    {
      icon: Monitor,
      title: 'Monitor',
      description: 'Request a new or additional monitor for your workspace.',
      color: 'bg-teal-500'
    },
    {
      icon: Headphones,
      title: 'Audio Equipment',
      description: 'Request headphones, microphones, or speakers.',
      color: 'bg-orange-500'
    },
    {
      icon: Printer,
      title: 'Peripherals',
      description: 'Request keyboards, mice, adapters, or other peripherals.',
      color: 'bg-indigo-500'
    },
    {
      icon: BookOpen,
      title: 'Software',
      description: 'Request licenses for software applications or tools.',
      color: 'bg-emerald-500'
    },
    {
      icon: Coffee,
      title: 'Office Supplies',
      description: 'Request general office supplies and equipment.',
      color: 'bg-amber-500'
    },
    {
      icon: Plus,
      title: 'Other',
      description: 'Request something not listed in the categories above.',
      color: 'bg-gray-500'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Select Asset Type</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the category that best matches the equipment you need. Our team will process your request promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assetTypes.map((asset, index) => (
          <AssetCard 
            key={index}
            icon={asset.icon}
            title={asset.title}
            description={asset.description}
            color={asset.color}
          />
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200 transform hover:scale-105">
          Submit Multiple Requests
        </button>
      </div>
    </section>
  );
};