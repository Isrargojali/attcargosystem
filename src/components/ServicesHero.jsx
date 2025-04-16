import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[400px] bg-[#EAF6FF] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-[#2C3E50] font-bold mb-4 text-4xl md:text-5xl">
          Reliable Logistics. Real-Time Tracking.
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[#34495E]">
          Explore our range of services designed to make your cargo shipments smarter, faster, and safer.
        </p>
        <div className="mt-8 space-x-4">
          {/* Get a Quote Button */}
          <Link
            to="/get-quote"
            className="inline-block bg-[#008CBA] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#0074a8] transition duration-300"
          >
            Get a Quote
          </Link>

          {/* Track Cargo Button */}
          <Link
            to="/track-cargo"
            className="inline-block bg-[#2C3E50] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#1a2733] transition duration-300"
          >
            Track Cargo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
