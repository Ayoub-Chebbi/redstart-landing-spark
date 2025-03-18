
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-redstart-primary">Red<span className="text-redstart-teal">start</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-redstart-dark hover:text-redstart-primary transition-colors duration-200 font-medium">Features</a>
            <a href="#testimonials" className="text-redstart-dark hover:text-redstart-primary transition-colors duration-200 font-medium">Testimonials</a>
            <a href="#plans" className="text-redstart-dark hover:text-redstart-primary transition-colors duration-200 font-medium">Plans</a>
            <a href="#contact" className="text-redstart-dark hover:text-redstart-primary transition-colors duration-200 font-medium">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-redstart-teal text-redstart-teal hover:bg-redstart-teal hover:text-white">
              Log in
            </Button>
            <Button className="bg-redstart-primary hover:bg-redstart-secondary text-white">
              Register
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-redstart-dark hover:text-redstart-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-4 py-2 space-y-1">
          <a href="#features" className="block py-2 text-redstart-dark hover:text-redstart-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="block py-2 text-redstart-dark hover:text-redstart-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#plans" className="block py-2 text-redstart-dark hover:text-redstart-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Plans</a>
          <a href="#contact" className="block py-2 text-redstart-dark hover:text-redstart-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <div className="pt-2 pb-3 flex flex-col space-y-2">
            <Button variant="outline" className="border-redstart-teal text-redstart-teal hover:bg-redstart-teal hover:text-white w-full justify-center">
              Log in
            </Button>
            <Button className="bg-redstart-primary hover:bg-redstart-secondary text-white w-full justify-center">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
