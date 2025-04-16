import React from "react";

const GetAQuote = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 lg:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-6 text-center">Get a Quote</h1>
        <p className="text-[#6C7A89] text-center mb-10">
          Fill out the form below to request a custom shipping and logistics quote. Our team will get back to you shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0074a8]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0074a8]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+1234567890"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0074a8]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Business Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0074a8]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#2C3E50] mb-1">Shipment Details</label>
            <textarea
              rows="5"
              placeholder="Type of goods, weight, origin, destination..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0074a8]"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="cursor-pointer mt-4 bg-[#008CBA] text-white px-8 py-3 rounded-md hover:bg-[#0074a8] transition shadow-md"
            >
              Request Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetAQuote;


// Purpose:

// This feature allows users to request an estimate or quote for their logistics or cargo shipment. It's a common feature on services-related websites, particularly for logistics or delivery services, where users can get an approximation of costs based on details like cargo size, weight, destination, and urgency.

// Users may need this functionality before committing to using your services, especially if they're planning shipments.

// Flow:

// When users click "Get a Quote", they are redirected to a form or page where they can input relevant shipment details (e.g., cargo type, destination, weight, etc.). Based on this information, the system can generate an estimated quote for the user.