import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Mission from '../components/Mission/Mission';
import Features from '../components/Features/Features';
import Tracking from '../components/Tracking/Tracking';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Services />
      <Mission />
      <Features />
      <Tracking />
      <Footer />
    </div>
  );
};

export default Home;