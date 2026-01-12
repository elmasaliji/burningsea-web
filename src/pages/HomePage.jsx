import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/ui/button';
import { HeroNavigation } from '../components/HeroNavigation';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { CountdownTimer } from '../components/CountdownTimer';
import { Logo } from '../components/Logo';
import { Sparkles, Music, Users, Calendar, ArrowRight, ArrowDown, Flame, Waves, Tent, MapPin, Bus, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Floating Particle Component
const FloatingParticle = ({ type, delay, size, left, top }) => {
  const particleRef = useRef(null);
  
  useEffect(() => {
    if (!particleRef.current) return;
    
    gsap.to(particleRef.current, {
      y: type === 'fire' ? -100 : 100,
      x: Math.random() * 50 - 25,
      opacity: 0,
      duration: 3 + Math.random() * 2,
      delay: delay,
      repeat: -1,
      ease: 'power1.out',
    });
  }, [delay, type]);

  return (
    <div
      ref={particleRef}
      className={`absolute rounded-full pointer-events-none ${
        type === 'fire' 
          ? 'bg-gradient-to-t from-primary via-accent to-yellow-300' 
          : 'bg-gradient-to-b from-secondary via-blue-400 to-cyan-200'
      }`}
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        filter: 'blur(1px)',
      }}
    />
  );
};

// Generate random particles
const generateParticles = (count, type) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type,
    delay: Math.random() * 3,
    size: 4 + Math.random() * 8,
    left: Math.random() * 100,
    top: type === 'fire' ? 60 + Math.random() * 40 : Math.random() * 40,
  }));
};

export const HomePage = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const countdownRef = useRef(null);
  const infoRef = useRef(null);
  const shuttleRef = useRef(null);
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const [hoveredSide, setHoveredSide] = useState(null);
  const [fireParticles] = useState(() => generateParticles(15, 'fire'));
  const [waterParticles] = useState(() => generateParticles(15, 'water'));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animations
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2,
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.hero-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: 'back.out(1.7)',
      });

      gsap.from('.scroll-indicator', {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      });

      // Countdown Section
      gsap.from(countdownRef.current, {
        scrollTrigger: {
          trigger: countdownRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Info Cards Animation
      gsap.from('.info-card', {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Info Title Animation
      gsap.from('.info-title', {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Shuttle Section Parallax
      gsap.from('.shuttle-card', {
        scrollTrigger: {
          trigger: shuttleRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -5 : 5),
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // About Section Text Reveal
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Video Section 3D Tilt
      gsap.from('.video-container', {
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 80%',
        },
        rotateX: 20,
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Continuous floating animation for decorative elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });

      // Background gradient shift
      gsap.to('.gradient-shift', {
        backgroundPosition: '100% 100%',
        duration: 10,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-background">
      <HeroNavigation />
      <FloatingTicketButton />

      {/* ========== HERO SECTION - Split Screen ========== */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 gradient-shift" style={{ backgroundSize: '200% 200%' }} />

        {/* Fire Particles - Kids Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none">
          {fireParticles.map((p) => (
            <FloatingParticle key={`fire-${p.id}`} {...p} />
          ))}
        </div>

        {/* Water Particles - Adult Side */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none">
          {waterParticles.map((p) => (
            <FloatingParticle key={`water-${p.id}`} {...p} />
          ))}
        </div>

        {/* Kids Side - Left */}
        <Link
          to="/kids"
          className={`relative flex-1 group overflow-hidden transition-all duration-700 min-h-[50vh] md:min-h-screen ${
            hoveredSide === 'kids' ? 'md:flex-[1.3]' : hoveredSide === 'adult' ? 'md:flex-[0.7]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('kids')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Background with Parallax */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=1200&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-kids-primary/85 via-kids-secondary/75 to-primary/60" />
            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 via-transparent to-white/5" />
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float-element" />
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl float-element" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6 sm:p-8 text-center">
            <div className="transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2">
              <div className="relative">
                <Sparkles className="hero-title w-14 sm:w-20 h-14 sm:h-20 mb-4 sm:mb-6 mx-auto drop-shadow-2xl" strokeWidth={1.5} />
                <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h2 className="hero-title font-heading text-5xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 tracking-tight drop-shadow-lg">
                Kids Area
              </h2>
              <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-light max-w-lg mx-auto opacity-90">
                Kreativität, Abenteuer & Spaß für unsere Kleinsten
              </p>
              <div className="flex items-center justify-center space-x-3 text-lg sm:text-xl font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-2">
                  <span>Entdecken</span>
                  <ArrowRight className="animate-pulse" size={24} />
                </span>
              </div>
            </div>
          </div>

          {/* Age Badge */}
          <div className="hero-badge absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-white font-bold text-base sm:text-lg border border-white/30 shadow-2xl">
            <span className="flex items-center space-x-2">
              <span className="text-2xl">🎨</span>
              <span>3-14 Jahre</span>
            </span>
          </div>
        </Link>

        {/* Center Logo - Transparent with GLOW Effect - BIGGER */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
          {/* Animated Glow Rings Container */}
          <div className="relative flex items-center justify-center">
            {/* Outermost Rotating Rainbow Ring */}
            <div 
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, #FF6B4A, #FFD93D, #6BCB77, #4D96FF, #C9379D, #FF6B4A)',
                filter: 'blur(70px)',
                opacity: 0.9,
                animation: 'spin 8s linear infinite',
              }}
            />
            
            {/* Second Fire Ring */}
            <div 
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, #FFD700 0%, #FF8C00 40%, #FF4500 70%, transparent 100%)',
                filter: 'blur(55px)',
                opacity: 0.85,
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            
            {/* Third Cyan Ring */}
            <div 
              className="absolute w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, #00FFFF 0%, #00CED1 50%, transparent 100%)',
                filter: 'blur(45px)',
                opacity: 0.75,
                animation: 'pulse 2.5s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            />
            
            {/* Inner Bright White Ring */}
            <div 
              className="absolute w-72 h-72 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,230,150,0.7) 40%, transparent 80%)',
                filter: 'blur(35px)',
                opacity: 0.9,
                animation: 'pulse 1.8s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
            
            {/* Logo - Transparent, No Background, MUCH BIGGER */}
            <div 
              className="relative"
              style={{
                filter: 'drop-shadow(0 0 25px rgba(255,255,255,0.95)) drop-shadow(0 0 50px rgba(255,200,100,0.8)) drop-shadow(0 0 75px rgba(255,140,0,0.6))',
              }}
            >
              <Logo className="h-56 sm:h-72 w-auto" variant="white" withGlow={false} />
            </div>
          </div>
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-4">
          <a
            href="https://instagram.com/burningsea"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-pink-400 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://tiktok.com/@burningsea"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-black hover:border-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>

        {/* Adult Side - Right */}
        <Link
          to="/adult"
          className={`relative flex-1 group overflow-hidden transition-all duration-700 min-h-[50vh] md:min-h-screen ${
            hoveredSide === 'adult' ? 'md:flex-[1.3]' : hoveredSide === 'kids' ? 'md:flex-[0.7]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('adult')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Background with Parallax */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1582711012124-a56cf82307a0?w=1200&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/85 via-primary/75 to-accent/60" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/10 via-transparent to-white/5" />
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-32 right-16 w-40 h-40 bg-secondary/20 rounded-full blur-2xl float-element" />
          <div className="absolute bottom-32 left-16 w-28 h-28 bg-primary/20 rounded-full blur-xl float-element" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6 sm:p-8 text-center">
            <div className="transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2">
              <div className="relative">
                <Music className="hero-title w-14 sm:w-20 h-14 sm:h-20 mb-4 sm:mb-6 mx-auto drop-shadow-2xl" strokeWidth={1.5} />
                <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h2 className="hero-title font-heading text-5xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 tracking-tight drop-shadow-lg">
                Programm
              </h2>
              <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 font-light max-w-lg mx-auto opacity-90">
                Live-Musik, DJs & unvergessliche Festival-Vibes
              </p>
              <div className="flex items-center justify-center space-x-3 text-lg sm:text-xl font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-2">
                  <span>Entdecken</span>
                  <ArrowRight className="animate-pulse" size={24} />
                </span>
              </div>
            </div>
          </div>

          {/* Age Badge */}
          <div className="hero-badge absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full text-white font-bold text-base sm:text-lg border border-white/30 shadow-2xl">
            <span className="flex items-center space-x-2">
              <span className="text-2xl">🎵</span>
              <span>16+ Jahre</span>
            </span>
          </div>
        </Link>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center text-white/80">
          <span className="text-sm mb-2 font-medium">Mehr entdecken</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-2 h-3 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========== COUNTDOWN SECTION ========== */}
      <section ref={countdownRef} className="relative py-20 sm:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2djR2NGgtNHYtNGgtNHYtNGg0di00aDR2NGg0em0wIDhjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl float-element" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl float-element" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CountdownTimer />
        </div>
      </section>

      {/* ========== VIDEO SECTION (Moved after Countdown) ========== */}
      <section ref={videoRef} className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl float-element" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl float-element" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Erlebe Burning Sea
              </span>
            </h2>
            
            {/* Video Container with 3D Effect */}
            <div className="video-container relative group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-[40px] blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500" />
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 transform transition-all duration-700 group-hover:scale-[1.02]">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="absolute -inset-6 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                        <Play className="text-white ml-2" size={48} />
                      </div>
                    </div>
                    <p className="text-white text-2xl sm:text-3xl font-bold mb-3">Promo-Video kommt bald!</p>
                    <p className="text-white/70 text-lg">Erste Eindrücke vom Festival</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/20 rounded-full float-element" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-white/20 rounded-full float-element" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FESTIVAL INFO SECTION ========== */}
      <section ref={infoRef} className="relative py-20 sm:py-32 overflow-hidden">
        {/* Multi-layer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
        
        {/* Animated Shapes */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-kids-primary/10 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl float-element" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="info-title font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Burning Sea Festival 2026
              </span>
            </h2>
            <p className="info-title text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Das erste Familien- und Jugendfestival mit echtem Festivalfeeling am Stotternheimer See
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
            {/* Card 1 - When */}
            <div className="info-card relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-primary/10 to-primary-glow/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary/20 group-hover:border-primary/40 group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-primary/30">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-foreground">Wann?</h3>
                <p className="text-foreground/70 text-lg sm:text-xl font-medium leading-relaxed">
                  Sommer 2026
                </p>
                <p className="text-foreground/50 text-sm mt-2">(Genaues Datum folgt bald)</p>
              </div>
            </div>

            {/* Card 2 - For Whom */}
            <div className="info-card relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-secondary/10 to-secondary-light/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-secondary/20 group-hover:border-secondary/40 group-hover:-translate-y-2 group-hover:-rotate-1">
                <div className="bg-gradient-to-br from-secondary to-secondary-light w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-lg shadow-secondary/30">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-foreground">Für Wen?</h3>
                <p className="text-foreground/70 text-lg sm:text-xl font-medium leading-relaxed">
                  Familien & Jugendliche
                </p>
                <p className="text-foreground/50 text-sm mt-2">Kids Area (3-14 J.) + Adult Area (16+)</p>
              </div>
            </div>

            {/* Card 3 - What */}
            <div className="info-card relative group perspective-1000 sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-accent/20 group-hover:border-accent/40 group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="bg-gradient-to-br from-accent to-primary w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-accent/30">
                  <Music className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-foreground">Was?</h3>
                <p className="text-foreground/70 text-lg sm:text-xl font-medium leading-relaxed">
                  Live-Musik, Workshops
                </p>
                <p className="text-foreground/50 text-sm mt-2">Aktivitäten & Festivalfeeling</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white text-lg sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link to="/tickets" className="flex items-center space-x-3">
                <span>Jetzt Tickets sichern</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== SHUTTLE BUS SECTION ========== */}
      <section ref={shuttleRef} className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10" />
        
        {/* Animated Road Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-foreground to-transparent" />
        </div>

        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl float-element" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-secondary via-accent to-primary rounded-full mb-8 shadow-2xl shadow-secondary/30 float-element">
                <Bus className="text-white" size={40} />
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                  Shuttle-Bus Service
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
                Kostenlose Shuttle-Busse zwischen Erfurt Hauptbahnhof und dem Festival-Gelände
              </p>
            </div>

            {/* Shuttle Cards */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 mb-12">
              {/* To Festival */}
              <div className="shuttle-card relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                      <ArrowRight className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold">Hin-Fahrt zum Festival</h3>
                  </div>
                  <div className="space-y-5 text-foreground/80">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <strong className="text-foreground text-lg">Start:</strong>
                        <p className="text-base">Erfurt Hauptbahnhof (Busbahnhof, Steig 5)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Calendar className="text-accent mt-1 flex-shrink-0" size={24} />
                      <div>
                        <strong className="text-foreground text-lg">Zeiten:</strong>
                        <p className="text-base">Erste Fahrt: Freitag 10:00 Uhr</p>
                        <p className="text-base">Letzte Fahrt: Samstag 02:00 Uhr</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Waves className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <strong className="text-foreground text-lg">Takt & Dauer:</strong>
                        <p className="text-base">Alle 20 Minuten • Ca. 25 Minuten Fahrtzeit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* From Festival */}
              <div className="shuttle-card relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <ArrowDown className="text-white rotate-90" size={24} />
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold">Rück-Fahrt vom Festival</h3>
                  </div>
                  <div className="space-y-5 text-foreground/80">
                    <div className="flex items-start space-x-4">
                      <Tent className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <strong className="text-foreground text-lg">Start:</strong>
                        <p className="text-base">Festival-Gelände (Haupteingang)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Calendar className="text-accent mt-1 flex-shrink-0" size={24} />
                      <div>
                        <strong className="text-foreground text-lg">Zeiten:</strong>
                        <p className="text-base">Erste Fahrt: Samstag 14:00 Uhr</p>
                        <p className="text-base">Letzte Fahrt: Sonntag 04:00 Uhr</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Waves className="text-secondary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <strong className="text-foreground text-lg">Takt & Dauer:</strong>
                        <p className="text-base">Alle 15 Min. (ab 22:00) • Ca. 25 Min. Fahrtzeit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Notice */}
            <div className="shuttle-card relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-r from-accent/10 via-secondary/10 to-primary/10 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-accent/20 text-center shadow-xl">
                <p className="text-xl sm:text-2xl text-foreground leading-relaxed">
                  <strong className="text-2xl sm:text-3xl block mb-3">💚 Kostenlos für alle Festival-Besucher!</strong>
                  <span className="text-foreground/80">Zeige einfach dein Ticket (digital oder ausgedruckt) beim Einsteigen vor.</span>
                </p>
                <p className="text-foreground/60 text-base mt-4">Keine Reservierung notwendig - First come, first served!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section ref={aboutRef} className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted/30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl float-element" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h2 className="about-text font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Das sind wir
              </span>
            </h2>
            
            {/* Content */}
            <div className="space-y-8 text-lg">
              <p className="about-text text-xl sm:text-2xl text-foreground/90 leading-relaxed font-medium text-center max-w-3xl mx-auto">
                Weil wir glauben, dass Familien und junge Menschen echte Festivalmomente erleben sollen – gemeinsam.
              </p>
              
              <p className="about-text text-foreground/70 leading-relaxed">
                Unser Familien- und Jugendfestival ist aus der Idee entstanden, Spiel, Kreativität, Wissen und 
                Abenteuer mit dem Gefühl eines „richtigen" Festivals zu verbinden: Musik, Stimmung, Begegnungen und 
                dieses besondere Kribbeln, das man nur auf Festivals spürt.
              </p>

              {/* Highlight Box 1 */}
              <div className="about-text relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 sm:p-10 border border-primary/20">
                  <div className="flex items-start space-x-4">
                    <Flame className="text-primary flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-foreground">Dieses Festival findet zum allerersten Mal statt.</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Das macht es für uns besonders – und für euch einzigartig. Wir starten mit neuen Ideen, viel 
                        Herzblut und dem Wunsch, etwas zu schaffen, das es so in unserer Region noch nicht gibt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="about-text font-heading text-2xl sm:text-3xl font-bold mt-12 text-foreground">
                Festivalfeeling für alle Generationen
              </h3>
              <p className="about-text text-foreground/70 leading-relaxed">
                Uns ist wichtig, dass sich unser Festival nicht wie eine klassische Veranstaltung anfühlt, 
                sondern wie ein echtes Festival:
              </p>
              
              {/* Feature List */}
              <ul className="about-text space-y-4">
                <li className="flex items-start space-x-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Music className="text-white" size={20} />
                  </span>
                  <span className="text-foreground/80 pt-2">Musik, Bühnenprogramm und lebendige Atmosphäre</span>
                </li>
                <li className="flex items-start space-x-4 p-4 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <span className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-white" size={20} />
                  </span>
                  <span className="text-foreground/80 pt-2">Offene Bereiche zum Entdecken, Mitmachen und Verweilen</span>
                </li>
                <li className="flex items-start space-x-4 p-4 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </span>
                  <span className="text-foreground/80 pt-2">Eine bunte Mischung aus Action, Kreativität, Wissen und Entspannung</span>
                </li>
              </ul>

              <p className="about-text text-foreground/70 leading-relaxed">
                Kinder dürfen spielen und staunen, Jugendliche sich ausprobieren und wiederfinden – und Eltern 
                das Festivalgefühl gemeinsam mit ihren Kindern erleben.
              </p>

              {/* Highlight Box 2 */}
              <div className="about-text relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 sm:p-10 text-center border border-secondary/20">
                  <Waves className="mx-auto mb-4 text-secondary" size={40} />
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-foreground">Unser Anfang</h3>
                  <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                    Dieses erste Festival ist der Start von etwas Neuem. Mit euch möchten wir ein Festival aufbauen, 
                    das mitwächst, sich weiterentwickelt und vielleicht eines Tages für viele Familien und Jugendliche 
                    ein fester Termin im Jahr wird.
                  </p>
                  <p className="text-foreground font-bold mt-6 text-xl sm:text-2xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Seid dabei – von Anfang an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
