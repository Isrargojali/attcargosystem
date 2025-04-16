import { UserPlus, FileText, LocateFixed } from "lucide-react";

const TrackingSteps = () => {
  return (
    <section className="py-16 px-6 bg-white border-t">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#34495E]">Easy Steps to Visibility</h2>
        <p className=" mt-2 text-[#6C7A89]">
          Start tracking your containers in 3 easy steps without the need for technical skills or additional team members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <UserPlus className="text-blue-600 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-blue-700 mb-2">1. Sign Up</h3>
          <p className="text-[#6C7A89]">
            Join our platform with our easy online application.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <FileText className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">2. Complete Shipment Details</h3>
          <p className="text-[#6C7A89]">
            Easily upload your container information, using your container ID, origin, and destination, to initiate real-time tracking.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <LocateFixed className="text-purple-600 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-purple-700 mb-2">3. Start Tracking</h3>
          <p className="text-[#6C7A89]">
            Take control of your container's whereabouts instantly by activating tracking and stay informed throughout the entire journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackingSteps;
