
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  bgColor?: string;
}

const PricingCard = ({ name, price, description, features, isPopular, ctaText, bgColor }: PlanProps) => (
  <div className={`rounded-xl shadow-lg overflow-hidden ${bgColor || 'bg-white'} relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
    {isPopular && (
      <div className="absolute top-0 right-0">
        <div className="bg-redstart-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      </div>
    )}
    <div className="p-6 md:p-8">
      <h3 className="text-xl font-semibold text-redstart-dark mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-redstart-dark">{price}</span>
        {price !== 'Custom' && <span className="text-redstart-gray">/month</span>}
      </div>
      <p className="text-redstart-gray mb-6">{description}</p>
      <Button 
        className={isPopular ? 
          "w-full bg-redstart-primary hover:bg-redstart-secondary text-white" : 
          "w-full bg-white border border-redstart-teal text-redstart-teal hover:bg-redstart-teal hover:text-white"
        }
      >
        {ctaText}
      </Button>
    </div>
    <div className="border-t border-redstart-gray-light p-6 md:p-8">
      <p className="font-medium text-redstart-dark mb-4">What's included:</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-redstart-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-redstart-gray">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small teams just getting started",
      features: [
        "Up to 5 team members",
        "Basic analytics dashboard",
        "1GB storage",
        "Email support",
        "API access"
      ],
      ctaText: "Start free trial",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "10GB storage",
        "Priority email support",
        "API access",
        "Custom integrations",
        "Performance reporting"
      ],
      ctaText: "Start free trial",
      isPopular: true,
      bgColor: "bg-gradient-to-br from-white to-redstart-gray-light"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with complex requirements",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Unlimited storage",
        "24/7 phone & email support",
        "Advanced API access",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment options"
      ],
      ctaText: "Contact sales",
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-redstart-dark">
            Simple, transparent <span className="text-redstart-primary">pricing</span>
          </h2>
          <p className="text-lg text-redstart-gray max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              bgColor={plan.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
