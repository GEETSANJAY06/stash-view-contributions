
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-finmate-blue flex items-center justify-center text-white font-bold mr-2">
          F
        </div>
        <Link to="/" className="text-xl md:text-2xl font-bold text-white">
          FinMate
        </Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-finmate-blue transition-colors">
          Home
        </Link>
        <Link to="/services" className="text-white hover:text-finmate-blue transition-colors">
          Services
        </Link>
        <Link to="/how-it-works" className="text-white hover:text-finmate-blue transition-colors">
          How it works
        </Link>
        <Link to="/about-us" className="text-white hover:text-finmate-blue transition-colors">
          About us
        </Link>
        <Link to="/contact" className="text-white hover:text-finmate-blue transition-colors">
          Contact
        </Link>
      </div>

      <div className="flex space-x-2">
        <Link to="/login">
          <Button variant="ghost" className="text-white">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-finmate-blue hover:bg-finmate-bright-blue text-white">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
