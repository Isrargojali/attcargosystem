import React from 'react';
import { Package, Users, Laptop } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    desc: "We prioritize honesty and transparency in all our dealings.",
    icon: <Package size={48} className="text-blue-500" />
  },
  {
    title: "Customer Focus",
    desc: "Your satisfaction is at the heart of everything we do.",
    icon: <Users size={48} className="text-blue-500" />
  },
  {
    title: "Innovation",
    desc: "We embrace new technology for seamless logistics.",
    icon: <Laptop size={48} className="text-blue-500" />
  }
];

const OurValues = () => {
  return (
    <div className="mt-16 w-full bg-blue-500 py-16 px-4 lg:px-12 text-center">
      <h2 className="text-4xl font-bold text-white">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="max-w-xs md:max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex justify-center mb-3 text-themeColor">
              {value.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
            <p className="text-gray-600 mt-2">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
