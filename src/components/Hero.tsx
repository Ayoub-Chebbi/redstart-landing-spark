
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-white to-redstart-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-redstart-primary/10 text-redstart-primary text-sm font-medium mb-2 w-fit">
              New feature release
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-redstart-dark">
              <span className="text-redstart-primary">Innovate</span> faster <br/>with Redstart
            </h1>
            <p className="text-lg md:text-xl text-redstart-gray max-w-xl">
              Streamline your workflow, accelerate your growth, and stay ahead of the competition with our cutting-edge platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-redstart-primary hover:bg-redstart-secondary text-white">
                Get started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-redstart-teal text-redstart-teal hover:bg-redstart-teal hover:text-white">
                Book a demo
              </Button>
            </div>
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-redstart-gray-light flex items-center justify-center text-xs font-medium`}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-redstart-gray">
                <span className="font-semibold">500+</span> companies already using Redstart
              </p>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-redstart-primary/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-redstart-teal/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="relative bg-white border border-redstart-gray-light rounded-2xl shadow-lg overflow-hidden p-1">
              <div className="bg-gradient-to-br from-redstart-primary to-redstart-secondary rounded-xl p-6 text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-semibold">Redstart Analytics</div>
                  <div className="text-sm bg-white/20 px-2 py-1 rounded">Live</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm opacity-80 mb-2">Growth Metrics</div>
                    <div className="h-8 bg-white/20 rounded-md"></div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm opacity-80 mb-2">User Engagement</div>
                    <div className="h-8 bg-white/20 rounded-md"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Revenue</div>
                      <div className="font-semibold">↑ 37%</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-2">Retention</div>
                      <div className="font-semibold">↑ 24%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
