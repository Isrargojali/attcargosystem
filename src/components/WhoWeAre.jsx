import React from 'react'
import ImageSection from './ImageSection'

import aboutImage1 from '../assets/about1.jpg';

const WhoWeAre = () => {
  return (
    <>
       
                <div className="mt-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto px-4 py-10">
                  <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
                    <p className="mt-6 text-gray-700 leading-relaxed">
                      Baba International Traders is a leading provider of logistics and global trade solutions.
                      With years of expertise, we ensure secure cargo tracking, efficient customs clearance, and
                      seamless global shipments. Our mission is to connect businesses worldwide with reliable and
                      cost-effective logistics services.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <ImageSection
                      src={aboutImage1}
                      alt="Company Overview"
                      className="w-full max-w-xl object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
    </>
  )
}

export default WhoWeAre