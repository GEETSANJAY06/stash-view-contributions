
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="Cash Stash Stats"
            description="Track and analyze your cash flow with detailed statistics and visualizations."
            linkTo="/cash-stash-stats"
            buttonText="View"
          />
          <ServiceCard
            title="Money Moves"
            description="Monitor your investments and financial activities with real-time updates."
            linkTo="/money-moves"
            buttonText="View"
          />
          <ServiceCard
            title="Financial Advice"
            description="Get personalized recommendations to help you achieve your financial goals."
            linkTo="/financial-advice"
            status="coming-soon"
            buttonText="View"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
