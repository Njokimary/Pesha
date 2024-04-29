import React from 'react';
import LandingPage from './Landingpage';
import Trusted from './Trusted';
import Layout from './Layout';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <LandingPage />
      <Trusted />
      <Layout/>
      <Footer/>
    </div>
  );
}

export default Home;
