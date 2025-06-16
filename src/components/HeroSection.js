import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            DESIGN<br/>
            DECLARES<br/>
            <span className="text-red-500">UK</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-red-500" />
      </div>
    </section>
  );
};

export default HeroSection;