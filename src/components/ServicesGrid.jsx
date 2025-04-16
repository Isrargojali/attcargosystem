import React from "react";
import { Truck, Shield, Warehouse, MapPin, Globe, Bell } from "lucide-react";

const services = [
  {
    icon: <Truck size={40} className="text-blue-600" />,
    title: "Real-Time Shipment Tracking",
    desc: "Track every shipment in real-time across borders with precision and ease.",
  },
  {
    icon: <MapPin size={40} className="text-green-600" />,
    title: "Last-Mile Delivery",
    desc: "Ensure timely and safe delivery to the final destination with optimized routes.",
  },
  {
    icon: <Warehouse size={40} className="text-purple-600" />,
    title: "Warehousing Solutions",
    desc: "Secure, scalable warehousing options to manage your inventory globally.",
  },
  {
    icon: <Shield size={40} className="text-yellow-600" />,
    title: "Cargo Insurance",
    desc: "Protect your goods with flexible cargo insurance plans tailored for you.",
  },
  {
    icon: <Globe size={40} className="text-red-600" />,
    title: "Freight Forwarding",
    desc: "We move your cargo globally — by air, sea, or land — on time, every time.",
  },
  {
    icon: <Bell size={40} className="text-pink-600" />,
    title: "Automated Alerts",
    desc: "Get instant updates via SMS or Email about your shipment’s location & delays.",
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50]">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((s, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105">
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-center text-[#2C3E50]">{s.title}</h3>
            <p className="mt-3 text-[#34495E] text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
