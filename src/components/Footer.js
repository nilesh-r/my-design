import React, { useState } from 'react';

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');

  const handleFooterSubscribe = (e) => {
    e.preventDefault();
    console.log('Footer newsletter subscription:', footerEmail);
    alert('Subscribed successfully!');
  };

  return (
    <footer className="bg-red-500 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl mb-4">
              DESIGN<br/>DECLARES
            </h3>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sign up to the D! Newsletter</h4>
            <form onSubmit={handleFooterSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 text-black rounded"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-white text-red-500 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-sm">
            <p>
              This website has been built following the carbon principles of low-bandwidth and heart-centric. We're also working towards the true understanding of living systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;