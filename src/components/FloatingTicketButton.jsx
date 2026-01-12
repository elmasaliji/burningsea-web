import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Sparkles } from 'lucide-react';

export const FloatingTicketButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      to="/tickets"
      className={`fixed left-6 bottom-6 z-40 group transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        {/* Multiple glow layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-2xl opacity-60 animate-pulse-glow" />
        <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-40 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        
        {/* Main button with glassmorphism */}
        <div className="relative bg-gradient-to-br from-primary/90 via-primary to-primary-glow backdrop-blur-sm px-5 py-4 rounded-2xl shadow-2xl hover:shadow-glow-fire hover:scale-110 transition-all duration-300 flex items-center space-x-3 border border-white/20">
          {/* Animated ticket icon */}
          <div className="relative">
            <Ticket className="text-white" size={24} />
            <Sparkles className="absolute -top-1 -right-1 text-accent" size={12} />
          </div>
          
          <div className="hidden sm:block">
            <div className="text-white font-bold text-base leading-none">Tickets</div>
            <div className="text-white/80 text-xs">Jetzt sichern!</div>
          </div>
        </div>

        {/* Rotating rings */}
        <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 animate-spin" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 rounded-2xl border-2 border-secondary/30 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
        
        {/* Corner accents */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>
    </Link>
  );
};

export default FloatingTicketButton;