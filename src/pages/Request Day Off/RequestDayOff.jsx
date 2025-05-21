import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LeaveTypeCards } from './components/LeaveTypeCards';
import { Footer } from './components/Footer';

export const RequestDayOff = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LeaveTypeCards />
      </main>
      <Footer />
    </div>
  );
};