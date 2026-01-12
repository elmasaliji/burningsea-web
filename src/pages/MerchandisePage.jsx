import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ShoppingBag, Shirt, CupSoda, Backpack, Badge as BadgeIcon } from 'lucide-react';

const merchItems = [
  {
    icon: Shirt,
    name: 'Festival T-Shirt',
    price: '29,90 €',
    color: 'from-primary to-accent',
    description: 'Hochwertiges Bio-Baumwolle T-Shirt mit exklusivem Burning Sea Design',
    sizes: 'S, M, L, XL, XXL'
  },
  {
    icon: '🧢',
    name: 'Festival Cap',
    price: '19,90 €',
    color: 'from-secondary to-secondary-light',
    description: 'Stylische Cap mit gesticktem Logo - perfekt gegen die Sommersonne',
    sizes: 'One Size'
  },
  {
    icon: Backpack,
    name: 'Festival Rucksack',
    price: '39,90 €',
    color: 'from-kids-primary to-kids-secondary',
    description: 'Praktischer Rucksack mit vielen Fächern für alle Festival-Essentials',
    sizes: '20L Volumen'
  },
  {
    icon: CupSoda,
    name: 'Mehrwegbecher Set',
    price: '12,90 €',
    color: 'from-accent to-primary',
    description: 'Umweltfreundliches 3er Set mit Festival-Design',
    sizes: '0,5L'
  },
  {
    icon: '🧣',
    name: 'Festival Bandana',
    price: '14,90 €',
    color: 'from-secondary to-accent',
    description: 'Vielseitig einsetzbar - als Kopftuch, Halstuch oder Accessoire',
    sizes: '55x55cm'
  },
  {
    icon: BadgeIcon,
    name: 'Pin-Set',
    price: '9,90 €',
    color: 'from-primary to-secondary',
    description: '5 exklusive Burning Sea Pins zum Sammeln und Tauschen',
    sizes: '5 Stück'
  },
];

export const MerchandisePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-glow-fire">
              <ShoppingBag className="text-white" size={48} strokeWidth={2} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Merchandise
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Exklusive Burning Sea Festival Artikel - Limitiert verfügbar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {merchItems.map((item, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:opacity-20 transition-all duration-500`} />
                
                <Card className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md p-8 rounded-3xl border-2 border-transparent hover:border-primary/20 transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-2xl h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg mx-auto`}>
                    {typeof item.icon === 'string' ? (
                      <span className="text-4xl">{item.icon}</span>
                    ) : (
                      <item.icon className="text-white" size={36} strokeWidth={2} />
                    )}
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-2 text-foreground text-center">
                    {item.name}
                  </h3>
                  
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 text-center">
                    {item.price}
                  </div>

                  <p className="text-foreground/70 text-center mb-4 flex-1">
                    {item.description}
                  </p>

                  <div className="text-sm text-foreground/60 text-center mb-6">
                    Größe/Umfang: {item.sizes}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white shadow-lg`}
                  >
                    In den Warenkorb
                  </Button>
                </Card>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-primary/20 text-center">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    📦 Versand & Abholung
                  </span>
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <strong>Vorbestellung:</strong> Bestelle jetzt online und spare 10%! Abholung am Merchandise-Stand auf dem Festival.<br />
                  <strong>Versand:</strong> Nach dem Festival verschicken wir deine Bestellung versandkostenfrei zu dir nach Hause.<br />
                  <strong>Festival-Stand:</strong> Alle Artikel sind auch direkt am Festival-Gelände erhältlich (solange Vorrat reicht).
                </p>
                <div className="inline-flex items-center space-x-2 bg-accent/20 px-6 py-3 rounded-full">
                  <span className="text-2xl">✨</span>
                  <span className="font-semibold text-foreground">Limitierte Auflage - Sichere dir jetzt dein Lieblingsstück!</span>
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

export default MerchandisePage;
