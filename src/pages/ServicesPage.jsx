import React from "react";
import ServicesHero from "../components/ServicesHero";
import ServicesGrid from "../components/ServicesGrid";
import FeatureHighlights from "../components/FeatureHighLights";
import ContactCTA from "../components/ContactCTA";
import TrackingSteps from "../components/TrackingSteps";

const Services = () => {
  return (
    <div className="flex flex-col py-12 md:py-20 md:px-6 lg:px-8">
      <ServicesHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-12  ">
        <ServicesGrid />
        <FeatureHighlights />

       <TrackingSteps />
      </div>
      <ContactCTA />
    </div>
  );
};

export default Services;
