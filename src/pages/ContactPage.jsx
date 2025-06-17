import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Clear form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#2C3E50]">Contact Us</h2>
        <p className="text-lg text-[#6C7A89] mt-4">
          We are here to assist you. Please provide the necessary information and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 shadow-lg rounded-lg">
        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50]">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50]">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#008CBA] hover:bg-[#0077a8] text-white rounded-md  transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-900">Thank You!</h3>
            <p className="text-lg text-gray-700 mt-4">
              We have received your message and will get back to you as soon as possible. Our team will reach out to you shortly.
            </p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center text-gray-700">
        <h3 className="text-2xl font-semibold text-[#2C3E50]">Our Office Information</h3>
        <p className="mt-4">Feel free to contact us through any of the following methods:</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaPhone className="text-4xl text-[#008CBA] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-center">
              <a href="tel:+923455326201" className="hover:text-[#008CBA]">+92 345 5326201</a>
            </p>
            <p className="text-gray-600 text-center">
              <a href="tel:+923555313913" className="hover:text-[#008CBA]">+92 355 5313913</a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaEnvelope className="text-4xl text-[#008CBA] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">
              <a href="mailto:saeed.hussain@babainternationaltraders.com" className="hover:text-[#008CBA]">
                saeed.hussain@babainternationaltraders.com
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-4xl text-[#008CBA] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600 text-center">
              Affyatabad Sost Gojal Hunza<br />
              Gilgit-Baltistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
