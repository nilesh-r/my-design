import React, { useState } from 'react';

const ToolkitSection = () => {
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', { email, newsletterConsent });
    alert('Subscribed successfully!');
  };

  return (
    <section id="toolkit" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">The Design Declares Newsletter and Toolkit</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-800 p-8 rounded-lg mb-8">
              <h3 className="text-6xl font-bold mb-4">TOOLKIT</h3>
              <div className="bg-white text-black p-4 rounded">
                <h4 className="font-bold mb-2">Design Declares Toolkit</h4>
                <div className="text-sm text-gray-700">
                  <div className="mb-2">📋 Resources and Methods</div>
                  <div className="mb-2">🎯 8 Acts of Emergency</div>
                  <div className="mb-2">📊 Impact Measurement</div>
                  <div>🌱 Sustainable Design</div>
                </div>
              </div>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
              Download the Design Declares Toolkit
            </button>
          </div>
          
          <div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
            </p>
            
            <p className="text-gray-300 mb-8">
              Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-3 bg-black border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  className="mt-1 w-4 h-4 text-red-500"
                  checked={newsletterConsent}
                  onChange={(e) => setNewsletterConsent(e.target.checked)}
                />
                <span className="text-sm text-gray-300">
                  I would like to be added to the Design Declares newsletter and receive further updates.
                </span>
              </label>
              <button 
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;