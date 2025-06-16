import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ActsSection = () => {
  const { isVisible, sectionsRef } = useScrollAnimation();

  const acts = [
    {
      title: "Sound the Alarm",
      description: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice."
    },
    {
      title: "Start the Journey",
      description: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start."
    },
    {
      title: "Bring Clients with Us",
      description: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress."
    },
    {
      title: "Measure What We Make",
      description: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    },
    {
      title: "Redefine 'Good'",
      description: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    },
    {
      title: "Educate, Accelerate",
      description: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
    },
    {
      title: "Design for Justice",
      description: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
    },
    {
      title: "Amplify Voices for Change",
      description: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change."
    }
  ];

  return (
    <section 
      id="acts" 
      className="py-20 px-4"
      ref={el => sectionsRef.current[1] = el}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">8 Acts of Emergency</h2>
        <p className="text-xl text-gray-300 mb-16 leading-relaxed">
          What does it take to Declare? It's accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
        </p>
        
        <div className="space-y-8">
          {acts.map((act, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                isVisible.acts ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="bg-gray-100 text-black p-6 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-3xl mr-4">{index + 1}</span>
                  {act.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-200 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActsSection;