
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-redstart-teal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-redstart-light">transform</span> your business?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl">
              Reach out to our team for a personalized demo or to discuss how Redstart can help you achieve your business goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-1">Email Us</h3>
                  <p className="opacity-90">info@redstart.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-1">Call Us</h3>
                  <p className="opacity-90">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-1">Live Chat</h3>
                  <p className="opacity-90">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 text-redstart-dark">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-redstart-gray">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-redstart-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-redstart-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-redstart-gray">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-redstart-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-redstart-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1 text-redstart-gray">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 border border-redstart-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-redstart-primary"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-redstart-gray">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-redstart-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-redstart-primary"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button className="w-full bg-redstart-primary hover:bg-redstart-secondary text-white">
                Send message
              </Button>
              
              <p className="text-xs text-redstart-gray text-center">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
