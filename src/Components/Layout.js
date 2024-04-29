import React from 'react';

function Layout() {
  return (
    <div className="flex flex-wrap" style={{ width: '1200px', height: '2160px', padding: '48px 0 96px 0', gap: '0' }}>
      
      <div className="w-full md:w-1/2 px-4 flex items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Automated Systems Spend and Payables</h1>
          <p className="text-lg mb-4">Effectively manage your payments at any time and from any location, allowing you to organize budgets and allocate funds for a diverse range expenses with ease.</p>
        </div>
      </div>
      
      
      <div className="w-full md:w-1/2 px-4" >
        <div className="w-460 h-460">
          <img src="chart2.jpg" alt="Pesha" className="w-full h-full" />
        </div>
      </div>

    
      <div className="w-full md:w-1/2 px-4 ">
        <img src='accounts.jpg' alt='pesha' className="w-460 h-460" />
      </div>
      <div className="w-full md:w-1/2 px-4 flex items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Optimize Invoice Management</h1>
          <p className="text-lg mb-4">Generate and dispatch invoices instantly, incorporating direct payment links for convenience. Effortlessly monitor invoice payments, ensuring seamless tracking and management without hassle or delay.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 flex items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Effortlessly integrate with your accounting software</h1>
          <p className="text-lg mb-4">Enhance operational efficiency by streamlining processes, diminishing manual data entry tasks, and accelerating payment reconciliation procedures. Experience seamless synchronization and integration between Tende and your accounting system, facilitating swift and accurate transfer of information to optimize financial management workflows and drive business productivity.</p>
        </div>
      </div>
      
      
      <div className="w-full md:w-1/2 px-4" style={{ backgroundColor: '#FFEAD0' }}>
        <img src="chart2.jpg" alt="Pesha" className="w-460 h-460" />
      </div>
      
    </div>
  );
}

export default Layout;
