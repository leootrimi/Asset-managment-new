import React from 'react';
import { Header } from './components/HeroHeader';
import { HeroSection } from './components/HeroSection';
import { AssetCards } from './components/AssetCards';
import { Footer } from './components/Footer';

export const RequestPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow">
        {/* <HeroSection /> */}
        <AssetCards />
      </main>
      <Footer />
    </div>
  );
};