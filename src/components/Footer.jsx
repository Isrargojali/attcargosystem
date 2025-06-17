import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShippingFast, FaBoxOpen } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#008CBA] text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300">
              BABA INTERNATIONAL Traders (SMC-Private) Limited is your trusted partner in global trade, offering cargo tracking, import/export solutions, logistics, and customs clearance to streamline your shipments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Cargo Tracking", path: "/track-cargo" },
                { name: "Trade Tools", path: "/trade-tools" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Services", path: "/services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-yellow-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {[
                { name: "Import Services", path: "/import-services" },
                { name: "Export Services", path: "/export-services" },
                { name: "Customs Clearance", path: "/customs-clearance" },
                { name: "Logistics", path: "/logistics" },
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="hover:text-yellow-400">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-400" />
                <a href="tel:+923455326201" className="hover:text-yellow-400">+92 345 5326201</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-400" />
                <a href="tel:+923555313913" className="hover:text-yellow-400">+92 355 5313913</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-400" />
                <a href="mailto:saeed.hussain@babainternationaltraders.com" className="hover:text-yellow-400">saeed.hussain@babainternationaltraders.com</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                <span>Affyatabad Sost Gojal Hunza Gilgit-Baltistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cargo Tracking Section */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold">Track Your Shipment</h2>
          <p className="text-gray-300">Enter your tracking number to get real-time updates on your cargo.</p>
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="p-2 rounded-l-lg text-black bg-white "
            />
            <button  onClick={() => window.open("https://www.weboc.gov.pk/", "_blank")} className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-500">
              Track Now <FaShippingFast className="inline ml-2" />
            </button>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 text-xl"><FaLinkedin /></a>
          </div>
          <p className="text-gray-300 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} BABA INTERNATIONAL Traders (SMC-Private) Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
