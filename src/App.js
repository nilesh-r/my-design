import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BreakdownSection from './components/BreakdownSection';
import DonationSection from './components/DonationSection';
import ActsSection from './components/ActsSection';
import DeclarationForm from './components/DeclarationForm';
import NewsSection from './components/NewsSection';
import ToolkitSection from './components/ToolkitSection';
import SignatoriesCounter from './components/SignatoriesCounter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navigation />
      <HeroSection />
      <BreakdownSection />
      <DonationSection />
      <ActsSection />
      <DeclarationForm />
      <NewsSection />
      <ToolkitSection />
      <SignatoriesCounter />
      <Footer />
    </div>
  );
};

export default App;
