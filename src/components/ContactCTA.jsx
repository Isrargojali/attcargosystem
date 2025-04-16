import { useNavigate } from "react-router-dom";
const ContactCTA = () => {
    const navigate= useNavigate();
    return (
      <section className="bg-[#EAF6FF] text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold text-[#2C3E50] ">Need a Custom Logistics Solution?</h2>
        <p className="mt-4 text-lg text-[#6C7A89]">Our team is ready to tailor services to your business needs.</p>
        <button onClick={() => navigate("/contact")} className="cursor-pointer mt-6 px-8 py-3  bg-[#008CBA] text-white font-semibold rounded-md shadow hover:bg-[#0074a8] transition">
          Contact Us
        </button>
      </section>
    );
  };
  
  export default ContactCTA;
  