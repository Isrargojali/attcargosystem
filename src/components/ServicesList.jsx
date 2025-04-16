import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "Truck",
    title: "Real-Time Shipment Tracking",
    description: "Get live updates on your shipment location and status."
  },
  {
    icon: "Globe",
    title: "Global Freight Forwarding",
    description: "We handle cross-border shipping via air, sea, and land."
  },
  {
    icon: "Shield",
    title: "Cargo Insurance",
    description: "Ensure your shipments are protected from risks."
  },
  {
    icon: "Warehouse",
    title: "Warehousing & Distribution",
    description: "Safe storage and timely delivery tailored to your needs."
  }
];

const ServicesList = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
