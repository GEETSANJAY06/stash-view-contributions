
import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-finmate-dark">
      <Navbar />
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About FinMate</h1>
        
        <div className="bg-[#1E2435] p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            At FinMate, our mission is to empower individuals with the tools, insights, and knowledge to take control 
            of their financial futures. We believe that financial wellness should be accessible to everyone, 
            regardless of their background or current financial situation.
          </p>
          <p className="text-gray-300">
            Through innovative technology and data-driven insights, we aim to make financial management intuitive, 
            educational, and even enjoyable, helping our users build wealth and achieve their financial goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1E2435] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-300">
              FinMate was founded in 2023 by a team of finance professionals and technology experts who were 
              frustrated by the complexity and inaccessibility of existing financial tools. We set out to create a 
              solution that combines powerful financial analytics with a user-friendly experience.
            </p>
            <p className="text-gray-300 mt-4">
              Today, we're proud to serve thousands of users who rely on FinMate to track their finances, 
              make informed decisions, and work toward their financial goals.
            </p>
          </div>
          
          <div className="bg-[#1E2435] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-finmate-blue rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span><strong className="text-white">Transparency</strong> - We believe in being open and honest about how we use your data and how our platform works.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-finmate-blue rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span><strong className="text-white">Security</strong> - Protecting your financial information is our top priority.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-finmate-blue rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span><strong className="text-white">Innovation</strong> - We're constantly improving our technology to provide you with better insights and tools.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-finmate-blue rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span><strong className="text-white">Empowerment</strong> - We aim to give you the knowledge and tools to make confident financial decisions.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[#1E2435] p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Join the FinMate Community</h2>
          <p className="text-gray-300 mb-6">
            Be part of our growing community of financially empowered individuals. Sign up today and take the first 
            step toward better financial management.
          </p>
          <button className="bg-finmate-blue hover:bg-finmate-bright-blue text-white px-6 py-3 rounded-md font-medium">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
