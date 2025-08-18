import React from 'react';
import Hero from '../components/Hero';
import About from './AboutPage';
import Services from './ServicesPage';
import GetAQuote from './GetAQuote';
import TrackCargo from './TrackCargoPage';
import TrackTools from './TrackTools';
import ContactUs from './ContactPage';

const Homepage = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    {/* <TrackCargo /> */}
    <TrackTools />
    <ContactUs />
    
       
    

    </>
  )
}

export default Homepage;