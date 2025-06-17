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
            <div className="p-6 bg-gray-900">
                <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                  <div>
                    <p>
                      As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.
                    </p>
                  </div>
                  <div>
                    <p>
                      Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.
                    </p>
                  </div>
                </div>
              </div>
          </details>
          <details className="border-b border-gray-700 pb-4">
            <summary className="text-xl cursor-pointer hover:text-red-500 transition-colors">
              Time for Change
            </summary>
              <div className="p-6 bg-gray-900">
                 <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.
                    </p>
                  <p>
                   It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.
                  </p>
                  <p>
                    This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.
                  </p>
                  <p>
                    And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.
                  </p>
                </div>
              </div>
          </details>
          <details className="border-b border-gray-700 pb-4">
            <summary className="text-xl cursor-pointer hover:text-red-500 transition-colors">
              Act with Urgency
            </summary>
            <div className="p-6 bg-gray-900">
                 <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                  <p className="mb-4">
                   We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.
                   </p>
                  <p>
                   This is the most important brief of our lives. Join us as we begin to design a climate-positive future.
                  </p>
                </div>
              </div>
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