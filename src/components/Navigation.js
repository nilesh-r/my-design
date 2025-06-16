import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                DESIGN<br/>
                DECLARES<br/>
                <span className="text-red-500">UK</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
                <a href="#about" className="hover:text-red-500 transition-colors">About</a>
                <a href="#declare" className="hover:text-red-500 transition-colors">Declare</a>
                <a href="#toolkit" className="hover:text-red-500 transition-colors">Toolkit</a>
              </div>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#declare" onClick={() => setIsMenuOpen(false)}>Declare</a>
            <a href="#toolkit" onClick={() => setIsMenuOpen(false)}>Toolkit</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;