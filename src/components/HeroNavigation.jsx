import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles, Music, Ticket, Users, HelpCircle, Briefcase } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { name: 'Festival', path: '/', icon: Sparkles },
  { name: 'Kids Area', path: '/kids', icon: Sparkles },
  { name: 'Programm', path: '/adult', icon: Music },
  { name: 'Tickets', path: '/tickets', icon: Ticket },
  { name: 'Partner', path: '/partner', icon: Briefcase },
  { name: 'FAQ', path: '/faq', icon: HelpCircle },
];

export const HeroNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Menu Button - Top Right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
            {isOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </div>
        </div>
      </button>

      {/* Centered Logo with colored background */}
      <Link to="/" className="fixed top-6 left-1/2 -translate-x-1/2 z-50 group hidden md:block">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 backdrop-blur-md rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-r from-primary/80 via-accent/60 to-secondary/80 backdrop-blur-md border-2 border-white/30 px-4 py-2 rounded-2xl hover:from-primary/90 hover:via-accent/70 hover:to-secondary/90 transition-all duration-300 group-hover:scale-105 shadow-lg">
            <Logo className="h-14 w-auto" withGlow={false} />
          </div>
        </div>
      </Link>

      {/* Mobile Logo - Top Left with color */}
      <Link to="/" className="fixed top-6 left-6 z-50 group md:hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-md border-2 border-white/30 p-2 rounded-2xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group-hover:scale-105">
            <Logo className="h-12 w-auto" withGlow={false} />
          </div>
        </div>
      </Link>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-96 bg-gradient-to-br from-background/98 via-primary/5 to-secondary/5 backdrop-blur-xl border-l border-border shadow-2xl z-40 transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-8 pt-24">
          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 animate-slide-in-right"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <item.icon className="text-primary" size={24} />
                </div>
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <Link
              to="/tickets"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gradient-to-r from-primary via-accent to-primary-glow text-white text-center py-4 px-6 rounded-xl font-bold text-lg shadow-glow-fire hover:scale-105 transition-all duration-300"
            >
              Tickets kaufen
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-40 left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default HeroNavigation;