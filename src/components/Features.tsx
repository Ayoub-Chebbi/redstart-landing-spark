
import React from 'react';
import { Activity, BarChart3, Zap, Shield, Users, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <div className={cn(
    "bg-white p-6 rounded-xl shadow-sm border border-redstart-gray-light hover:shadow-md transition-all duration-300",
    className
  )}>
    <div className="w-12 h-12 rounded-lg bg-redstart-primary/10 flex items-center justify-center text-redstart-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-redstart-dark">{title}</h3>
    <p className="text-redstart-gray">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Activity size={24} />,
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful analytics dashboard. Track performance in real-time.",
      className: "border-l-4 border-l-redstart-primary"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Performance Metrics",
      description: "Visualize your growth with comprehensive performance tracking and reporting tools.",
      className: "border-l-4 border-l-redstart-secondary"
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Our optimized platform ensures maximum speed and efficiency for all your operations.",
      className: "border-l-4 border-l-redstart-light"
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Bank-level security protocols to keep your data safe and your customers protected.",
      className: "border-l-4 border-l-redstart-teal"
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Seamlessly work together with your team members in a unified workspace.",
      className: "border-l-4 border-l-redstart-teal-light"
    },
    {
      icon: <Layers size={24} />,
      title: "Integrations",
      description: "Connect with your favorite tools and services through our extensive API and integrations.",
      className: "border-l-4 border-l-redstart-primary"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-redstart-dark">
            Powerful features for <span className="text-redstart-primary">modern teams</span>
          </h2>
          <p className="text-lg text-redstart-gray max-w-2xl mx-auto">
            Everything you need to streamline your workflow, boost productivity, and drive growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
