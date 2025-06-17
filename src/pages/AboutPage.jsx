import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSection from "../components/ImageSection";
import aboutImg from '../assets/about.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person3.jpg';
import person3 from '../assets/person2.jpg';
import heroImg from '../assets/hero.jpg';
import image3 from '../assets/about1.jpg';
import { Package, Users, Laptop, Truck, CheckCircle, Shield, DollarSign } from 'lucide-react';

const teamMembers = [
  { image: person1, name: "Saeed Hussain", position: "CEO" }
];

const values = [
  {
    title: "Integrity",
    desc: "We prioritize honesty and transparency in all our dealings.",
    icon: <Package size={48} className="text-[#008CBA]" />
  },
  {
    title: "Customer Focus",
    desc: "Your satisfaction is at the heart of everything we do.",
    icon: <Users size={48} className="text-[#008CBA]" />
  },
  {
    title: "Innovation",
    desc: "We embrace new technology for seamless logistics.",
    icon: <Laptop size={48} className="text-[#008CBA]" />
  }
];

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-50 text-center py-12 md:py-20 md:px-6 lg:px-8">

      {/* Hero Banner */}
      <div
        className="relative w-full min-h-[300px] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image3})` }}>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-[#2C3E50] px-4 py-2 rounded-md">
          About Us
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-2 lg:px-12">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-[#2C3E50] mb-6">About BABA INTERNATIONAL</h1>
            <p className="text-lg text-[#6C7A89] mb-12">
              BABA INTERNATIONAL Traders (SMC-Private) Limited, under the leadership of our CEO Saeed Hussain, 
              has established itself as a premier logistics and international trade facilitator in the Gilgit-Baltistan region.
            </p>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#2C3E50]">Who We Are</h2>
            <p className="mt-6 text-[#6C7A89] leading-relaxed">
              Baba International Traders is a leading provider of logistics and global trade solutions.
              With years of expertise, we ensure secure cargo tracking, efficient customs clearance, and
              seamless global shipments. Our mission is to connect businesses worldwide with reliable and
              cost-effective logistics services.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <ImageSection
              src={heroImg}
              alt="Company Overview"
              className="w-full max-w-xl object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-14 text-center py-16 mx-0">
          <h2 className=" font-bold text-[#2C3E50] text-2xl sm:text-3xl md:text-4xl">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 px-4 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{value.title}</h3>
                <p className="text-[#6C7A89] mt-3">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 gap-6">
          <div className="md:w-1/2 flex justify-center">
            <ImageSection
              src={aboutImg}
              alt="Why Choose Us"
              className="w-full max-w-xl object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105  sm:max-w-sm md:max-w-md"
            />
          </div>
          <div className="text-content text-center md:text-left">
            <h2 className="font-bold text-[#2C3E50] mb-6 text-2xl sm:text-3xl md:text-4xl">Why Choose Us?</h2>
            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                <Truck size={24} className="text-blue-600 mt-1" />
                <p className="text-[#6C7A89]">Reliable and fast international shipping</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle size={24} className="text-green-600 mt-1" />
                <p className="text-[#6C7A89]">Secure tracking with real-time updates</p>
              </li>
              <li className="flex items-start gap-4">
                <Shield size={24} className="text-yellow-500 mt-1" />
                <p className="text-[#6C7A89]">Experienced and professional logistics team</p>
              </li>
              <li className="flex items-start gap-4">
                <DollarSign size={24} className="text-red-500 mt-1" />
                <p className="text-[#6C7A89]">Cost-effective and transparent pricing</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        {/* Team Section */}
        <div className="mt-14 px-2 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="font-bold text-[#2C3E50] mb-8 text-2xl sm:text-3xl md:text-4xl">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-xl transition transform hover:scale-105"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full p-4 h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50]">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6C7A89] mt-1">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-yellow-500  py-16 px-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-white">Ready to Ship with Us?</h2>
        <p className="mt-4 text-xl text-white">Get in touch with our team to start your seamless logistics journey.</p>
        <button
          onClick={() => navigate("/contact")}
          className="cursor-pointer mt-6 px-8 py-4 bg-white text-yellow-500 font-semibold rounded-md shadow-md  hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
