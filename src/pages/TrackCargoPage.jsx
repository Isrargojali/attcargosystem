import React, { useState } from "react";

const TrackCargo = () => {
  const [trackingId, setTrackingId] = useState("");
  const [cargoDetails, setCargoDetails] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = () => {
    if (trackingId.trim() === "") {
      setError("Please enter a valid tracking ID.");
      setCargoDetails(null);
      return;
    }
    // Redirect to government portal
    window.open("https://www.weboc.gov.pk/", "_blank");
  };

  return (
    <div className="bg-gray-100 py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
          Track Your Cargo
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077a8]"
          />
          <button
            onClick={handleTrack}
            className=" cursor-pointer bg-[#008CBA] hover:bg-[#0077a8] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Track
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {cargoDetails && (
          <div className="mt-6 space-y-4 text-gray-800">
            <p><strong>Tracking ID:</strong> {cargoDetails.id}</p>
            <p><strong>Status:</strong> {cargoDetails.status}</p>
            <p><strong>Estimated Delivery:</strong> {cargoDetails.estimatedDelivery}</p>
            <p><strong>Origin:</strong> {cargoDetails.origin}</p>
            <p><strong>Destination:</strong> {cargoDetails.destination}</p>
            <p><strong>Current Location:</strong> {cargoDetails.currentLocation}</p>
            <p><strong>Weight:</strong> {cargoDetails.weight}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#2C3E50]">Tracking History</h3>
              <ul className="space-y-2 mt-4">
                {cargoDetails.trackingHistory.map((entry, index) => (
                  <li key={index} className="flex justify-between text-gray-700">
                    <span>{entry.date}</span>
                    <span>{entry.event}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#2C3E50]">Additional Information</h3>
              <p><strong>Carrier:</strong> {cargoDetails.additionalInfo.carrier}</p>
              <p><strong>Contact:</strong> {cargoDetails.additionalInfo.contactNumber}</p>
              <p><strong>Customs Cleared:</strong> {cargoDetails.additionalInfo.customsCleared ? "Yes" : "No"}</p>
              <p><strong>Delivery Time:</strong> {cargoDetails.additionalInfo.deliveryTime}</p>
            </div>
          </div>
        )}
      </div>

      {/* Government Portal Tracking */}
      <div className="mt-8 text-center">
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

export default TrackCargo;


// Purpose:

// This feature is for users who have already shipped a cargo and want to track its current status, location, or delivery progress. This typically includes inputting a tracking number to get real-time information.

// It's a post-shipment feature used by users to monitor their cargo once it's in transit.

// Flow:

// Users enter a tracking ID, and they can see the status, current location, estimated delivery time, and shipment history of their cargo.

// This service helps customers stay informed about the delivery process