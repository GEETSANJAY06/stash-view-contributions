
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Github, ArrowLeft } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would implement actual authentication here
    console.log("Logging in with:", email, password);
    // For demo purposes, just navigate to home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-finmate-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#151820] rounded-lg p-6 relative">
        <Link to="/" className="absolute top-4 left-4 text-white hover:text-finmate-blue">
          <ArrowLeft size={20} />
        </Link>
        
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-gray-400 mb-6">Enter your credentials to access your account</p>
        
        <div className="flex gap-4 mb-6">
          <Button 
            variant="outline" 
            className="w-full bg-transparent border border-gray-700 text-white hover:bg-gray-800"
          >
            <Github className="mr-2" size={20} />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="w-full bg-transparent border border-gray-700 text-white hover:bg-gray-800"
          >
            <svg 
              className="mr-2" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
                fill="#4285F4" 
              />
              <path 
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
                fill="#34A853" 
              />
              <path 
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
                fill="#FBBC05" 
              />
              <path 
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
                fill="#EA4335" 
              />
            </svg>
            Google
          </Button>
        </div>
        
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#151820] px-2 text-gray-400">OR CONTINUE WITH</span>
          </div>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <Input 
              id="email"
              type="email" 
              placeholder="m@example.com" 
              className="bg-transparent border-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <Input 
              id="password"
              type="password" 
              className="bg-transparent border-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200"
          >
            Login
          </Button>
        </form>
        
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-finmate-blue hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
