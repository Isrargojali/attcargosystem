import React, { useState } from "react";
import { Link } from "react-router-dom";

// This component simulates the different tracking options
const TrackTools = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");

  // Handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to government portal
    window.open("https://www.weboc.gov.pk/", "_blank");
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8  md:py-16 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#2C3E50]">Track Tools</h2>
        <p className="text-lg text-[#6C7A89] mt-4">
          Use the tools below to track your cargo shipments. Choose the option that best fits your shipment's tracking information.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:px-40 ">
        {/* Track by Tracking Number */}
        <div className="bg-white shadow-lg p-8 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-[#2C3E50]">Track by Tracking Number</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter Tracking Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            />
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-[#008CBA] hover:bg-[#0077a8] text-white rounded-md transition duration-300"
            >
              Track Shipment
            </button>
          </form>
        </div>

        {/* Track by Reference Number */}
        <div className="bg-white shadow-lg p-8 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-[#2C3E50]">Track by Reference Number</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              placeholder="Enter Reference Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
            />
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-[#008CBA] hover:bg-[#0077a8] text-white rounded-md  transition duration-300"
            >
              Track Shipment
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:px-40">
        {/* Track by Shipment Type */}
        <div className="bg-white shadow-lg p-8 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-[#2C3E50]">Track by Shipment Type</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <select
              value={shipmentType}
              onChange={(e) => setShipmentType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 text-[#6C7A89]"
            >
              <option value="">Select Shipment Type</option>
              <option value="air">Air Cargo</option>
              <option value="sea">Sea Freight</option>
              <option value="road">Road Transport</option>
            </select>
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-[#008CBA] hover:bg-[#0077a8] text-white rounded-md  transition duration-300"
            >
              Track Shipment
            </button>
          </form>
        </div>

        {/* Track by Delivery Status */}
        <div className="bg-white shadow-lg p-8 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-[#2C3E50]">Track by Delivery Status</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <select
              value={deliveryStatus}
              onChange={(e) => setDeliveryStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 text-[#6C7A89]"
            >
              <option value="">Select Delivery Status</option>
              <option value="in-transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="delayed">Delayed</option>
              <option value="pending">Pending</option>
            </select>
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-[#008CBA] hover:bg-[#0077a8] text-white rounded-md  transition duration-300"
            >
              Track Shipment
            </button>
          </form>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-yellow-500 text-white py-16 px-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold">Need Help with Tracking?</h2>
        <p className="mt-4 text-xl">
          If you encounter any issues or need additional assistance with tracking your shipment, don't hesitate to reach out.
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-yellow-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transform transition duration-300 hover:scale-105">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>

      {/* Government Portal Tracking */}
      <div className="mt-10 text-center">
        <p className="mb-2 text-gray-700">Want to track your shipment via the official government portal?</p>
        <a
          href="https://www.weboc.gov.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Track via Government Portal
        </a>
      </div>
    </div>
  );
};

export default TrackTools;
