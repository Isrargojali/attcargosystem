import React from "react";
import {
  FaDatabase,
  FaFileInvoiceDollar,
  FaCalculator,
} from "react-icons/fa";

const tools = [
  {
    title: "Clearance Data",
    icon: <FaDatabase className="text-4xl sm:text-5xl" />,
    link: "https://www.weboc.gov.pk/(S(0tfd5xjjb24bvsfchm2rxyhq))/DownloadValuationData.aspx",
  },
  {
    title: "Tariff & SROs",
    icon: <FaFileInvoiceDollar className="text-4xl sm:text-5xl" />,
    link: "https://www.weboc.gov.pk/(S(0tfd5xjjb24bvsfchm2rxyhq))/Shared/TariffList.aspx",
  },
  {
    title: "Duty Calculator",
    icon: <FaCalculator className="text-4xl sm:text-5xl" />,
    link: "https://www.weboc.gov.pk/(S(0tfd5xjjb24bvsfchm2rxyhq))/Shared/ItemGeneralDutyCalculator.aspx",
  },
];

const TrackTools = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50]">
          Trade Tools
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#6C7A89] mt-3 max-w-2xl mx-auto">
          Use these official tools to calculate duties, access SROs, and view clearance data.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 sm:p-8 flex flex-col items-center text-center group min-h-[200px] focus:outline-none focus:ring-2 focus:ring-[#008CBA]"
          >
            <div className="text-[#008CBA] mb-4 group-hover:scale-110 transition">
              {tool.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] group-hover:text-[#0077a8]">
              {tool.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrackTools;
