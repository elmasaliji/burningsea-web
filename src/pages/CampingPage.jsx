import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tent, Users, Zap, Crown, Wifi, Plug, Droplet, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const campingOptions = [
  {
    id: 'kids',
    icon: Tent,
    name: 'Kids Camping',
    price: 'Kostenlos',
    capacity: '2-6 Personen',
    color: 'from-kids-primary to-kids-secondary',
    features: [
      { icon: Users, text: 'Sicherer Familienbereich' },
      { icon: Droplet, text: 'Sanitäre Anlagen in der Nähe' },
      { icon: '🌙', text: 'Ruhezone ab 22:00 Uhr' },
      { icon: '🎨', text: 'Direkt an der Kids Area' },
    ],
    popular: false
  },
  {
    id: 'standard',
    icon: Tent,
    name: 'Standard Camping',
    price: '55,40 €',
    capacity: '1-2 Personen',
    color: 'from-secondary to-secondary-light',
    features: [
      { icon: Tent, text: 'Stellplatz für Zelt' },
      { icon: Droplet, text: 'Sanitäre Anlagen' },
      { icon: '⚡', text: 'Strom-Zugang möglich' },
      { icon: '🚿', text: 'Duschen inklusive' },
    ],
    popular: false
  },
  {
    id: 'premium',
    icon: Zap,
    name: 'Premium Camping',
    price: '249,00 €',
    capacity: '2 Personen',
    color: 'from-primary to-accent',
    features: [
      { icon: Zap, text: 'Größerer Stellplatz' },
      { icon: '🎵', text: 'Näher zu den Stages' },
      { icon: Droplet, text: 'Premium Sanitäranlagen' },
      { icon: Plug, text: 'Stromanschluss inklusive' },
    ],
    popular: true
  },
  {
    id: 'village',
    icon: Crown,
    name: 'Village Camping',
    price: '549,00 €',
    capacity: '4 Personen',
    color: 'from-accent to-primary',
    features: [
      { icon: Crown, text: 'Großer Premium-Stellplatz' },
      { icon: '🎪', text: 'Direkt am Festival-Gelände' },
      { icon: '✨', text: 'Exclusive Sanitäranlagen' },
      { icon: Wifi, text: 'Lounge-Zugang + WLAN' },
    ],
    popular: false
  },
];

export const CampingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-secondary/10 to-kids-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-secondary to-secondary-light rounded-full mb-6 shadow-glow-water">
              <Tent className="text-white" size={48} strokeWidth={2} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Camping
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Übernachte direkt am Festival-Gelände und erlebe das Festival von Anfang bis Ende!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {campingOptions.map((option, index) => (
              <div
                key={option.id}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Beliebt
                    </span>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-10 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:opacity-20 transition-all duration-500`} />
                
                <Card className={`relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md p-8 rounded-3xl border-2 transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-2xl h-full flex flex-col ${
                  option.popular ? 'border-primary/40' : 'border-transparent hover:border-secondary/20'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <option.icon className="text-white" size={32} strokeWidth={2} />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">
                    {option.name}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {option.price}
                    </div>
                    <div className="text-sm text-foreground/60">{option.capacity}</div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/70">
                        {typeof feature.icon === 'string' ? (
                          <span className="text-xl flex-shrink-0">{feature.icon}</span>
                        ) : (
                          <feature.icon className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90 text-white shadow-lg`}
                  >
                    <Link to="/tickets">
                      Jetzt buchen
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </Card>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-secondary/20">
                <h2 className="font-heading text-3xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Camping-Infos
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center text-foreground">
                      <Clock className="mr-2 text-secondary" size={24} />
                      Check-in & Check-out
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      <strong>Check-in:</strong> Freitag ab 12:00 Uhr<br />
                      <strong>Check-out:</strong> Sonntag bis 14:00 Uhr<br />
                      Früher Check-in nach Verfügbarkeit möglich.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center text-foreground">
                      <Tent className="mr-2 text-secondary" size={24} />
                      Was du mitbringen solltest
                    </h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li>• Zelt & Schlafsack</li>
                      <li>• Isomatte oder Luftmatratze</li>
                      <li>• Taschenlampe</li>
                      <li>• Persönliche Hygieneartikel</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampingPage;