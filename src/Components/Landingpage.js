// LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="max-w-[1437px] mx-auto px-12 py-4 opacity-100 bg-[#EFEEF8]">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">Automated Systems Spend and Payables</h1>
          <p className="text-lg mb-4">Effectively manage your payments at any time and from any location, allowing you to organize budgets and allocate funds for a diverse range expenses with ease.</p>
          <div>
            <button className="bg-[#5E52B6] text-white border border-[#5E52B6] px-4 py-2 rounded-lg mr-4">Get Started</button>
            <button className="bg-[#EFEEF8] text-[#5E52B6] border border-[#5E52B6] px-4 py-2 rounded-lg">Speak to Sales</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img src="chart.jpg" alt="Pesha" className="w-460 h-460" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
