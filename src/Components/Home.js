import React from 'react';
import LandingPage from './Landingpage';
import Trusted from './Trusted';
import Layout from './Layout';

function Home() {
  return (
    <div>
      <LandingPage />
      <Trusted />
      <Layout/>
    </div>
  );
}

export default Home;
