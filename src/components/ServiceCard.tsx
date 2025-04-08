
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  linkTo: string;
  status?: "available" | "coming-soon";
}

const ServiceCard = ({ title, description, linkTo, status = "available" }: ServiceCardProps) => {
  return (
    <div className="bg-[#1E2435] p-6 md:p-8 rounded-lg flex flex-col h-full">
      <h3 className="text-xl md:text-2xl text-finmate-blue font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      {status === "available" ? (
        <Link to={linkTo}>
          <Button className="bg-finmate-blue hover:bg-finmate-bright-blue text-white">
            View
          </Button>
        </Link>
      ) : (
        <Button disabled className="bg-gray-600 text-white cursor-not-allowed">
          Coming Soon
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;
