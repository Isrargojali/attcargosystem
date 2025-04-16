import React from "react";
import { CheckCircle } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-left">
      <div className="text-blue-500 mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
