
import Navbar from "@/components/Navbar";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-finmate-dark">
      <Navbar />
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">How FinMate Works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#1E2435] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-finmate-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Connect Your Accounts</h2>
            <p className="text-gray-300">
              Securely link your bank accounts, credit cards, and other financial services to get a complete picture of your finances.
            </p>
          </div>
          
          <div className="bg-[#1E2435] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-finmate-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Track & Analyze</h2>
            <p className="text-gray-300">
              Our platform automatically categorizes and analyzes your transactions, creating insightful reports and visualizations.
            </p>
          </div>
          
          <div className="bg-[#1E2435] p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-finmate-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Optimize & Grow</h2>
            <p className="text-gray-300">
              Get personalized recommendations and insights to help you save more, reduce debt, and grow your wealth over time.
            </p>
          </div>
        </div>
        
        <div className="bg-[#1E2435] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Your Security is Our Priority</h2>
          <p className="text-gray-300 text-center mb-6">
            FinMate uses bank-level encryption and security practices to ensure your financial data is always protected.
            We never store your account credentials and use read-only access to your financial information.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-[#131722] p-4 rounded-md w-24 text-center">
              <p className="text-xs text-gray-400 mb-1">Encryption</p>
              <p className="font-medium">256-bit</p>
            </div>
            <div className="bg-[#131722] p-4 rounded-md w-24 text-center">
              <p className="text-xs text-gray-400 mb-1">Verified by</p>
              <p className="font-medium">SOC2</p>
            </div>
            <div className="bg-[#131722] p-4 rounded-md w-24 text-center">
              <p className="text-xs text-gray-400 mb-1">Data Policy</p>
              <p className="font-medium">No Selling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
