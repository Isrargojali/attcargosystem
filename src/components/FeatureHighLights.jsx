const FeatureHighlights = () => {
    return (
      <section className="py-16 px-6  border-t border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7 Tracking Access</h3>
            <p className="text-[#34495E]">Monitor your shipments anytime from anywhere.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Advanced Analytics</h3>
            <p className="text-[#34495E]">Get insights into delivery performance and efficiency.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">Custom Integrations</h3>
            <p className="text-[#34495E]">Sync our system with your business tools via API.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureHighlights;
  