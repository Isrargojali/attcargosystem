import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleTrack = () => {
    if (trackingNumber.trim() !== "") {
      navigate(`/track-cargo/${trackingNumber}`);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="flex flex-col items-center text-center px-6 py-12 md:py-20 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50]">
        Global Trade Made Simple
      </h1>
      <p className="text-lg md:text-xl text-[#6C7A89] mt-4 max-w-xl">
        Baba International Traders ensures secure cargo tracking, fast customs clearance, and efficient global logistics.
      </p>

      {/* Alert Message */}
      {showAlert && (
        <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md flex justify-between items-center w-full max-w-md">
          <span>Please enter a valid tracking number!</span>
          <button onClick={() => setShowAlert(false)} className="text-lg font-bold ml-4">
            ✖
          </button>
        </div>
      )}

      {/* Tracking Input */}
      <div className="mt-6 flex flex-col sm:flex-row items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="🔍 Enter Tracking Number"
          className="p-4 rounded-md sm:rounded-l-md sm:rounded-r-none text-black w-full sm:w-[400px] border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#008CBA] text-lg placeholder-gray-600"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <Button
          onClick={handleTrack}
          className="bg-[#008CBA] text-white px-10 py-4 sm:rounded-r-md sm:rounded-l-none hover:bg-[#0077a8] flex items-center justify-center w-full sm:w-[200px] cursor-pointer"
        >
          Track Now <FaShippingFast className="ml-2" />
        </Button>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Button
          onClick={() => navigate("/track-cargo")}
          className="bg-[#008CBA] text-white hover:bg-[#0077a8] w-full sm:w-auto cursor-pointer"
        >
          Track Your Shipment
        </Button>
        <Button
          onClick={() => navigate("/services")}
          className="bg-[#6C7A89] text-white hover:bg-[#5a6876] w-full sm:w-auto cursor-pointer"
        >
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default Hero;
