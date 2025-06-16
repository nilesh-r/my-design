import React from 'react';

const SignatoriesCounter = () => {
  return (
    <section className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl font-bold text-red-500 mb-4">#942</div>
        <div className="text-gray-400">Signatories and counting in 🇬🇧</div>
        
        <div className="mt-8">
          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
            Declare Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignatoriesCounter;