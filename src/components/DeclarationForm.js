import React, { useState } from 'react';

const DeclarationForm = () => {
  const [declarationType, setDeclarationType] = useState('');
  const [formData, setFormData] = useState({
    website: '',
    country: 'United Kingdom',
    discipline: '',
    email: '',
    reason: '',
    consent1: false,
    consent2: false
  });

  const declarationTypes = [
    'As a business',
    'As an individual', 
    'As a public institution',
    'As a team or department'
  ];

  const disciplines = [
    'Graphic Design',
    'Digital Design',
    'Industrial Design',
    'Service Design',
    'Communication Design'
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Declaration submitted:', { declarationType, ...formData });
    alert('Declaration submitted successfully!');
  };

  return (
    <section id="declare" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Declare Emergency Now</h2>
        <p className="text-gray-300 mb-12 leading-relaxed">
          Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
        </p>

        <div className="border border-gray-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-8">I am Declaring Emergency</h3>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Declaration Type */}
            <div className="space-y-4">
              {declarationTypes.map((type) => (
                <label key={type} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="declarationType"
                    value={type}
                    checked={declarationType === type}
                    onChange={(e) => setDeclarationType(e.target.value)}
                    className="w-4 h-4 text-red-500"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Website *</label>
                <input
                  type="url"
                  required
                  className="w-full p-3 bg-black border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Country *</label>
                <select
                  className="w-full p-3 bg-black border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                >
                  <option>United Kingdom</option>
                  <option>Global Supporter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Discipline *</label>
                <select
                  className="w-full p-3 bg-black border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                  value={formData.discipline}
                  onChange={(e) => setFormData({...formData, discipline: e.target.value})}
                >
                  <option value="">Select discipline</option>
                  {disciplines.map((discipline) => (
                    <option key={discipline} value={discipline}>{discipline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-black border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Why are you declaring? In a sentence or two, tell us why you're joining Design Declares.
                </label>
                <textarea
                  rows={6}
                  className="w-full p-3 bg-black border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-red-500"
                    checked={formData.consent1}
                    onChange={(e) => setFormData({...formData, consent1: e.target.checked})}
                  />
                  <span className="text-sm text-gray-300">
                    I consent for my data to be used for the purpose of this Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on the site and social media as outlined in our Privacy Policy.
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-red-500"
                    checked={formData.consent2}
                    onChange={(e) => setFormData({...formData, consent2: e.target.checked})}
                  />
                  <span className="text-sm text-gray-300">
                    I would like to be added to the Design Declares newsletter and receive further updates.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Declare Emergency Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DeclarationForm;