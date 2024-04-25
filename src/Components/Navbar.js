import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#FFFFFF', padding: '1rem 0' }}>
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center mr-8">
          <img src="logo.jpg" alt="Logo" className="w-10 h-10 mr-2" />
        </div>

        
        <div className="flex justify-center items-center flex-1 space-x-6">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Solutions</a>
          <a href="#">About Us</a>
        </div>

        
        <div className="flex items-center ml-8">
          <a href="#" style={{ boxShadow: '0px 0px 8px #5E52B6', color: '#5E52B6', background: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginLeft: '1rem' }}>Login</a>
          <a href='#' style={{ background: '#5E52B6', color: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginLeft: '1rem' }}>Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
