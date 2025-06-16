import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const BreakdownSection = () => {
  const { isVisible, sectionsRef } = useScrollAnimation();
  const fullHeroText = "The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...";
  const heroText = useTypingAnimation(fullHeroText, 50);

  return (
    <section 
      id="breakdown" 
      className="min-h-screen flex flex-col justify-center px-4 py-20"
      ref={el => sectionsRef.current[0] = el}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl mb-8 text-gray-400">This is Breakdown</h2>
        <div className={`transform transition-all duration-1000 ${isVisible.breakdown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <p className="text-4xl md:text-5xl leading-relaxed mb-12">
            {heroText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        
        <div className="space-y-6">
          <details className="border-b border-gray-700 pb-4">
            <summary className="text-xl cursor-pointer hover:text-red-500 transition-colors">
              The Role of Design
            </summary>
          </details>
          <details className="border-b border-gray-700 pb-4">
            <summary className="text-xl cursor-pointer hover:text-red-500 transition-colors">
              Time for Change
            </summary>
          </details>
          <details className="border-b border-gray-700 pb-4">
            <summary className="text-xl cursor-pointer hover:text-red-500 transition-colors">
              Act with Urgency
            </summary>
          </details>
        </div>

        <button className="mt-12 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
          View our D! Intro Video
        </button>
      </div>
    </section>
  );
};

export default BreakdownSection;