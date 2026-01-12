import React from 'react';

// Official Burning Sea Logo URLs
const LOGO_WHITE = 'https://customer-assets.emergentagent.com/job_c2b02708-6274-417f-b582-146786ea07ad/artifacts/vpb5v00u_1000083373.png';
const LOGO_BLACK = 'https://customer-assets.emergentagent.com/job_c2b02708-6274-417f-b582-146786ea07ad/artifacts/xk66old1_1000083372.png';

export const Logo = ({ className = '', variant = 'white', withGlow = false, glowColor = 'rainbow' }) => {
  // Use white logo by default, black for light backgrounds when explicitly requested
  const logoSrc = variant === 'black' ? LOGO_BLACK : LOGO_WHITE;
  
  // Glow effect styles
  const getGlowStyle = () => {
    if (!withGlow) return {};
    
    switch (glowColor) {
      case 'fire':
        return {
          filter: 'drop-shadow(0 0 20px hsl(12 88% 62%)) drop-shadow(0 0 40px hsl(30 100% 60%)) drop-shadow(0 0 60px hsl(45 100% 60%))',
        };
      case 'water':
        return {
          filter: 'drop-shadow(0 0 20px hsl(189 85% 52%)) drop-shadow(0 0 40px hsl(200 90% 58%)) drop-shadow(0 0 60px hsl(220 80% 60%))',
        };
      case 'rainbow':
      default:
        return {
          filter: 'drop-shadow(0 0 15px hsl(12 88% 62%)) drop-shadow(0 0 30px hsl(45 100% 60%)) drop-shadow(0 0 45px hsl(189 85% 52%))',
        };
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow background layer for enhanced effect */}
      {withGlow && (
        <div 
          className="absolute inset-0 blur-2xl opacity-60 animate-pulse"
          style={{
            background: glowColor === 'fire' 
              ? 'radial-gradient(ellipse at center, hsl(30 100% 60% / 0.5) 0%, hsl(12 88% 62% / 0.3) 40%, transparent 70%)'
              : glowColor === 'water'
              ? 'radial-gradient(ellipse at center, hsl(189 85% 65% / 0.5) 0%, hsl(200 90% 58% / 0.3) 40%, transparent 70%)'
              : 'radial-gradient(ellipse at center, hsl(45 100% 65% / 0.5) 0%, hsl(12 88% 62% / 0.3) 30%, hsl(189 85% 52% / 0.2) 50%, transparent 70%)',
            transform: 'scale(1.5)',
          }}
        />
      )}
      
      {/* Logo Image */}
      <img
        src={logoSrc}
        alt="Burning Sea Festival"
        className="relative z-10 w-full h-full object-contain"
        style={getGlowStyle()}
      />
    </div>
  );
};

// Legacy SVG Logo for backwards compatibility
export const LogoSVG = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dynamic Water Waves */}
      <g opacity="0.8">
        <path
          d="M 0 60 Q 10 55, 20 60 T 40 60 T 60 60 T 80 60 T 100 60 T 120 60 T 140 60 T 160 60 T 180 60 T 200 60 L 200 80 L 0 80 Z"
          fill="url(#waterGradient)"
          className="animate-wave"
        />
        <path
          d="M 0 65 Q 15 60, 30 65 T 60 65 T 90 65 T 120 65 T 150 65 T 180 65 T 200 65 L 200 80 L 0 80 Z"
          fill="url(#waterGradient2)"
          opacity="0.6"
          className="animate-wave"
          style={{ animationDelay: '0.5s' }}
        />
      </g>
      
      {/* Central Flame */}
      <g transform="translate(100, 20)">
        {/* Outer flame glow */}
        <ellipse cx="0" cy="20" rx="18" ry="30" fill="url(#flameGlow)" opacity="0.3" className="animate-pulse-glow" />
        
        {/* Main flame */}
        <path
          d="M 0 45 C -12 30, -14 18, -8 6 C -5 0, 0 -8, 0 -12 C 0 -8, 5 0, 8 6 C 14 18, 12 30, 0 45 Z"
          fill="url(#flameGradient)"
          className="animate-float"
        />
        
        {/* Inner flame */}
        <path
          d="M 0 35 C -7 25, -8 18, -4 10 C -2 6, 0 3, 0 0 C 0 3, 2 6, 4 10 C 8 18, 7 25, 0 35 Z"
          fill="url(#innerFlame)"
          className="animate-pulse-glow"
        />
        
        {/* Core */}
        <ellipse cx="0" cy="18" rx="2.5" ry="10" fill="url(#coreGradient)" opacity="0.95" />
      </g>
      
      {/* Text - BURNING SEA */}
      <text
        x="100"
        y="72"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="url(#textGradient)"
        textAnchor="middle"
        letterSpacing="4"
      >
        BURNING SEA
      </text>
      
      {/* Decorative particles */}
      <circle cx="40" cy="15" r="1.5" fill="url(#flameGradient)" opacity="0.7" className="animate-pulse-glow" />
      <circle cx="160" cy="15" r="1.5" fill="url(#waterGradient)" opacity="0.7" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      <circle cx="50" cy="25" r="1" fill="url(#flameGradient)" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <circle cx="150" cy="25" r="1" fill="url(#waterGradient)" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(189, 85%, 52%)" />
          <stop offset="50%" stopColor="hsl(200, 90%, 58%)" />
          <stop offset="100%" stopColor="hsl(189, 85%, 52%)" />
        </linearGradient>
        
        <linearGradient id="waterGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(200, 90%, 58%)" />
          <stop offset="50%" stopColor="hsl(189, 85%, 52%)" />
          <stop offset="100%" stopColor="hsl(200, 90%, 58%)" />
        </linearGradient>
        
        <radialGradient id="flameGlow">
          <stop offset="0%" stopColor="hsl(45, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(12, 88%, 62%)" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(12, 88%, 62%)" />
          <stop offset="30%" stopColor="hsl(25, 95%, 60%)" />
          <stop offset="60%" stopColor="hsl(35, 100%, 62%)" />
          <stop offset="100%" stopColor="hsl(45, 100%, 68%)" />
        </linearGradient>
        
        <linearGradient id="innerFlame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(30, 100%, 62%)" stopOpacity="0.95" />
          <stop offset="50%" stopColor="hsl(45, 100%, 68%)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="hsl(55, 100%, 75%)" stopOpacity="0.7" />
        </linearGradient>
        
        <linearGradient id="coreGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(50, 100%, 75%)" />
          <stop offset="100%" stopColor="hsl(60, 100%, 88%)" />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(12, 88%, 62%)" />
          <stop offset="25%" stopColor="hsl(30, 100%, 60%)" />
          <stop offset="50%" stopColor="hsl(45, 100%, 60%)" />
          <stop offset="75%" stopColor="hsl(189, 85%, 52%)" />
          <stop offset="100%" stopColor="hsl(200, 90%, 58%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
