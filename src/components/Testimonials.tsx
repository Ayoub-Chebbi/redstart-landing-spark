
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, position, company, rating }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-redstart-gray-light">
    <div className="flex mb-4">
      {Array(5).fill(0).map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          className={i < rating ? "fill-redstart-primary text-redstart-primary" : "text-redstart-gray-light"} 
        />
      ))}
    </div>
    <p className="text-redstart-gray mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-redstart-gray-light flex items-center justify-center text-redstart-dark font-semibold">
        {author.charAt(0)}
      </div>
      <div className="ml-3">
        <div className="font-medium text-redstart-dark">{author}</div>
        <div className="text-sm text-redstart-gray">{position}, {company}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Redstart transformed our workflow. We've seen a 30% increase in team productivity since implementation.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechVision",
      rating: 5
    },
    {
      quote: "The analytics dashboard provides insights that have directly led to improved customer retention for our business.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthLoop",
      rating: 5
    },
    {
      quote: "Easy to integrate, powerful to use. Redstart has become an essential part of our tech stack.",
      author: "Emma Rodriguez",
      position: "Product Manager",
      company: "InnovateCorp",
      rating: 4
    },
    {
      quote: "The ROI we've seen from Redstart has been outstanding. It paid for itself within the first quarter.",
      author: "David Kim",
      position: "CEO",
      company: "StartupsInc",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-gradient-to-br from-redstart-gray-light to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-redstart-dark">
            Trusted by <span className="text-redstart-primary">innovative teams</span>
          </h2>
          <p className="text-lg text-redstart-gray max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with Redstart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
