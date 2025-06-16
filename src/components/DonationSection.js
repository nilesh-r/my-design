import React from 'react';

const DonationSection = () => {
  const donationAmounts = [
    { amount: 10, label: 'Donate £10' },
    { amount: 20, label: 'Donate £20' },
    { amount: 50, label: 'Donate £50' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Donate to D!</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
        </p>
        <div className="flex flex-wrap gap-4">
          {donationAmounts.map((donation) => (
            <button 
              key={donation.amount}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
            >
              {donation.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;