
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const MoneyMoves = () => {
  return (
    <div className="min-h-screen bg-finmate-dark">
      <Navbar />
      <div className="container px-4 md:px-6 py-8">
        <Link to="/" className="text-finmate-blue hover:underline mb-2 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Money Moves</h1>
        <div className="p-8 bg-[#1E2435] rounded-lg text-center">
          <h2 className="text-2xl font-medium mb-4">Coming Soon</h2>
          <p className="text-gray-300 mb-6">
            We're working hard to bring you real-time investment tracking and financial activity monitoring.
            This feature will be available in the near future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoneyMoves;
