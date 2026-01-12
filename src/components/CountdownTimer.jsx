import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const festivalDate = new Date('2026-07-15T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = festivalDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
        <Card className="relative bg-card/80 backdrop-blur-md border-2 border-primary/20 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl min-w-[70px] sm:min-w-[100px] group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
          <div className="text-3xl sm:text-5xl font-heading font-bold text-gradient-fire">
            {value.toString().padStart(2, '0')}
          </div>
        </Card>
      </div>
      <span className="text-xs sm:text-sm font-medium text-muted-foreground mt-2 sm:mt-3 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="w-full">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Festival startet in</h3>
        <p className="text-sm sm:text-base text-muted-foreground">Sichere dir jetzt dein Ticket!</p>
      </div>
      
      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 flex-wrap">
        <TimeUnit value={timeLeft.days} label="Tage" />
        <div className="text-2xl sm:text-4xl font-bold text-primary">:</div>
        <TimeUnit value={timeLeft.hours} label="Stunden" />
        <div className="text-2xl sm:text-4xl font-bold text-primary">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minuten" />
        <div className="text-2xl sm:text-4xl font-bold text-primary">:</div>
        <TimeUnit value={timeLeft.seconds} label="Sekunden" />
      </div>
    </div>
  );
};

export default CountdownTimer;