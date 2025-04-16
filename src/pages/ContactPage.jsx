import React, { useState } from "react";

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
        <div className="mt-6 space-y-4">
          <div>
            <strong className="text-[#2C3E50]">Phone:</strong> +1 (800) 123-4567
          </div>
          <div>
            <strong className="text-[#2C3E50]">Email:</strong> support@yourcompany.com
          </div>
          <div>
            <strong className="text-[#2C3E50]">Address:</strong> 123 Main Street, Suite 101, City, State, 12345
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
