
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Zap, Shield, Clock, Users } from 'lucide-react';

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  ctaText: string;
  highlighted?: boolean;
}

const PlanCard = ({ icon, title, description, features, price, ctaText, highlighted }: PlanCardProps) => (
  <div 
    className={`relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden ${
      highlighted 
        ? 'bg-gradient-to-br from-redstart-teal to-redstart-teal-light border-0 shadow-lg' 
        : 'bg-white border border-redstart-gray-light shadow-md'
    }`}
  >
    <div className={`p-8 ${highlighted ? 'text-white' : 'text-redstart-dark'}`}>
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-white/90' : 'text-redstart-gray'}`}>{description}</p>
      
      <div className="mb-6">
        <div className="text-3xl font-bold">{price}</div>
        {price !== 'Custom' && <div className={`text-sm mt-1 ${highlighted ? 'text-white/70' : 'text-redstart-gray'}`}>per user / month</div>}
      </div>
      
      <Button 
        className={highlighted
          ? "w-full bg-white text-redstart-teal hover:bg-redstart-gray-light"
          : "w-full bg-redstart-primary hover:bg-redstart-secondary text-white"
        }
      >
        {ctaText}
      </Button>
    </div>
    
    <div className={`border-t ${highlighted ? 'border-white/20' : 'border-redstart-gray-light'} p-8`}>
      <p className={`font-medium text-sm mb-4 ${highlighted ? 'text-white' : 'text-redstart-dark'}`}>INCLUDED FEATURES:</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm">
            <Check size={16} className={`mr-2 mt-0.5 flex-shrink-0 ${highlighted ? 'text-white' : 'text-redstart-primary'}`} />
            <span className={highlighted ? 'text-white/90' : 'text-redstart-gray'}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      icon: <Zap size={36} className="text-redstart-primary" />,
      title: "Basic",
      price: "$29",
      description: "Essential features for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "1GB storage",
        "Email support",
        "API access"
      ],
      ctaText: "Register",
      highlighted: false,
    },
    {
      icon: <Shield size={36} className="text-white" />,
      title: "Professional",
      price: "$79",
      description: "Everything you need for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "10GB storage",
        "Priority support",
        "API access",
        "Single sign-on",
        "Custom integrations"
      ],
      ctaText: "Register",
      highlighted: true,
    },
    {
      icon: <Users size={36} className="text-redstart-primary" />,
      title: "Enterprise",
      price: "Custom",
      description: "Advanced features for large organizations",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Unlimited storage",
        "24/7 dedicated support",
        "Advanced API access",
        "SAML & SSO",
        "Dedicated account manager"
      ],
      ctaText: "Contact sales",
      highlighted: false,
    }
  ];

  return (
    <section id="plans" className="py-16 md:py-24 px-4 bg-redstart-gray-light/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-redstart-dark">
            Choose your <span className="text-redstart-primary">plan</span>
          </h2>
          <p className="text-lg text-redstart-gray max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include a 14-day trial period.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index}
              icon={plan.icon}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <Clock size={48} className="text-redstart-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-redstart-dark mb-4">
              Need a custom solution?
            </h3>
            <p className="text-redstart-gray mb-8">
              Our team can build a tailored package for your specific requirements.
              Let's discuss how we can help your organization succeed.
            </p>
            <Button size="lg" className="bg-redstart-teal hover:bg-redstart-teal-light text-white px-8">
              Schedule a consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
