import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { MapPin, Bus, Car, Train, Info, Clock, Utensils, Heart } from 'lucide-react';

const guideItems = [
  {
    icon: MapPin,
    title: 'Anreise mit dem Auto',
    color: 'from-primary to-primary-glow',
    content: 'Gib in dein Navi folgende Adresse ein: Strandbad Stotternheimer See 19, 99095 Erfurt-Stotternheim. Parkplätze sind direkt am Gelände verfügbar (Parkgebühr nicht im Ticket enthalten).'
  },
  {
    icon: Train,
    title: 'Anreise mit dem Zug',
    color: 'from-secondary to-secondary-light',
    content: 'Nimm die Regionalbahn bis Erfurt Hauptbahnhof. Von dort fahren unsere kostenlosen Shuttle-Busse direkt zum Festival-Gelände (alle 20 Minuten).'
  },
  {
    icon: Bus,
    title: 'Shuttle-Busse',
    color: 'from-accent to-primary',
    content: 'Kostenlose Shuttle-Busse verkehren zwischen Erfurt Hauptbahnhof und dem Festival-Gelände. Abfahrt alle 20 Minuten von 10:00 bis 02:00 Uhr.'
  },
  {
    icon: Clock,
    title: 'Einlass-Zeiten',
    color: 'from-kids-primary to-kids-secondary',
    content: 'Camping-Einlass: Fr 12:00 Uhr | Festival-Einlass: Sa 10:00 Uhr | Kids Area: 10:00-20:00 Uhr | Adult Area: 10:00-04:00 Uhr'
  },
  {
    icon: Utensils,
    title: 'Essen & Trinken',
    color: 'from-secondary to-accent',
    content: 'Vielfältige Food-Trucks und Getränkestände auf dem gesamten Gelände. Vegetarische und vegane Optionen verfügbar. Eigene verschlossene PET-Flaschen erlaubt (keine Glasflaschen!).'
  },
  {
    icon: Heart,
    title: 'Medizinische Versorgung',
    color: 'from-primary to-secondary',
    content: 'Sanitätszelte sind auf dem gesamten Gelände verteilt und rund um die Uhr besetzt. In Notfällen wende dich an unser Security-Personal (erkennbar an gelben Westen).'
  },
];

export const FestivalGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 to-kids-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-glow-fire">
              <Info className="text-white" size={48} strokeWidth={2} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Festival Guide
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Alles was du für dein perfektes Festival-Erlebnis wissen musst!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {guideItems.map((item, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:opacity-20 transition-all duration-500`} />
                
                <Card className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md p-8 rounded-3xl border-2 border-transparent hover:border-primary/20 transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <item.icon className="text-white" size={32} strokeWidth={2} />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {item.content}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-primary/20">
                <h2 className="font-heading text-3xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Wichtige Infos
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">✅ Erlaubt</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li>• Verschlossene PET-Flaschen</li>
                      <li>• Sonnencreme & Mückenschutz</li>
                      <li>• Picknickdecken</li>
                      <li>• Kameras (keine Profi-Ausrüstung)</li>
                      <li>• Regenschirme & Regenjacken</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">❌ Verboten</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li>• Glasflaschen & Dosen</li>
                      <li>• Eigene alkoholische Getränke</li>
                      <li>• Feuerwerk & Pyrotechnik</li>
                      <li>• Waffen jeglicher Art</li>
                      <li>• Drohnen</li>
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

export default FestivalGuidePage;