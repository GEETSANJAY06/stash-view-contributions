
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be where form submission logic would go
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-finmate-dark">
      <Navbar />
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#1E2435] border-none text-white p-6">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-[#131722] border-gray-700 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-[#131722] border-gray-700 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="bg-[#131722] border-gray-700 text-white min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-finmate-blue hover:bg-finmate-bright-blue text-white"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-[#1E2435] border-none text-white p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 mb-1">Email</p>
                  <p className="text-finmate-blue">support@finmate.com</p>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-1">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <p className="text-gray-300 mb-1">Hours</p>
                  <p>Monday - Friday: 9AM - 5PM EST</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-[#1E2435] border-none text-white p-6">
              <h3 className="text-xl font-semibold mb-4">FAQ</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Is my financial data secure with FinMate?</p>
                  <p className="text-gray-300">Yes, we use bank-level 256-bit encryption and never store your account credentials.</p>
                </div>
                
                <div>
                  <p className="font-medium mb-1">How much does FinMate cost?</p>
                  <p className="text-gray-300">FinMate offers a free basic plan and premium plans starting at $9.99/month.</p>
                </div>
                
                <div>
                  <p className="font-medium mb-1">Can I connect multiple bank accounts?</p>
                  <p className="text-gray-300">Absolutely! You can connect and manage all your financial accounts in one place.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
