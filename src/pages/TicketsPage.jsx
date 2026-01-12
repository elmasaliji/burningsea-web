import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Check, Sparkles, Music, Users, Tent, Plus, ExternalLink } from 'lucide-react';

const ticketCategories = [
  {
    id: 'phase1',
    name: 'Phase 1',
    status: 'Aktuell verfügbar',
    badge: 'Jetzt kaufen',
    badgeVariant: 'default',
    tickets: [
      {
        id: 'day-kid-p1',
        name: 'Tages Ticket Kind',
        price: '9,90',
        originalPrice: null,
        description: 'Tagesticket für Kinder (3-14 Jahre)',
        features: [
          'Zugang zur gesamten Kids Area',
          'Alle Workshops & Aktivitäten inklusive',
          'Ice Jam Stage',
          'Gültig für 1 Tag',
        ],
        icon: Sparkles,
        color: 'from-kids-primary to-kids-secondary',
        stock: 1500,
      },
      {
        id: 'day-adult-p1',
        name: 'Tages Ticket Erwachsene',
        price: '35,40',
        originalPrice: null,
        description: 'Tagesticket für Erwachsene (16+ Jahre)',
        features: [
          'Zugang zu allen Stages',
          'The Spot Mainstage',
          'Rave Tower Techno Stage',
          'Gültig für 1 Tag',
        ],
        icon: Music,
        color: 'from-primary to-secondary',
        stock: 2000,
      },
      {
        id: 'family-p1',
        name: 'Familien Ticket',
        price: '62,40',
        originalPrice: null,
        description: '2 Erwachsene + 2 Kinder',
        features: [
          'Zugang zu allen Bereichen',
          'Kids & Adult Area',
          'Alle Stages & Aktivitäten',
          'Gültig für 1 Tag',
          'Spart bis zu 20%',
        ],
        icon: Users,
        color: 'from-accent to-primary',
        popular: true,
        stock: 500,
      },
      {
        id: 'weekend-family-p1',
        name: 'Familien Weekend',
        price: '149,90',
        originalPrice: null,
        description: '2 Erwachsene + 2 Kinder für 2 Tage',
        features: [
          'Zugang zu allen Bereichen',
          '2 Tage Festival-Erlebnis',
          'Kids & Adult Area',
          'Alle Stages & Aktivitäten',
          'Beste Preis-Leistung',
        ],
        icon: Users,
        color: 'from-kids-primary to-secondary',
        popular: true,
        stock: 1000,
      },
      {
        id: 'weekend-pass-p1',
        name: 'Weekend Pass',
        price: '89,40',
        originalPrice: null,
        description: 'Erwachsene für 2 Tage',
        features: [
          'Zugang zu allen Adult Stages',
          '2 Tage volles Programm',
          'The Spot + Rave Tower',
          'Chill-Out Bereiche',
        ],
        icon: Music,
        color: 'from-secondary to-primary',
        stock: 1000,
      },
    ],
  },
  {
    id: 'earlybird',
    name: 'Early Bird',
    status: 'Ausverkauft',
    badge: 'Sold Out',
    badgeVariant: 'secondary',
    tickets: [
      {
        id: 'weekend-family-eb',
        name: 'Familien Weekend',
        price: '99,80',
        originalPrice: '149,90',
        description: '2 Erwachsene + 2 Kinder',
        features: ['Beste Early Bird Konditionen', 'Limitiert auf 500 Stück', 'Ausverkauft'],
        icon: Users,
        color: 'from-kids-primary to-secondary',
        soldOut: true,
        stock: 0,
      },
      {
        id: 'weekend-pass-eb',
        name: 'Weekend Pass',
        price: '59,40',
        originalPrice: '89,40',
        description: 'Erwachsene für 2 Tage',
        features: ['Frühbucher-Vorteil', 'Limitiert auf 500 Stück', 'Ausverkauft'],
        icon: Music,
        color: 'from-secondary to-primary',
        soldOut: true,
        stock: 0,
      },
    ],
  },
];

const campingOptions = [
  {
    id: 'kids-camping',
    name: 'Kids Camping',
    price: '0,00',
    description: 'Camping-Platz für Familien mit Kindern',
    features: ['Sicherer Familienbereich', 'Sanitäre Anlagen in der Nähe', 'Ruhezone', 'Kostenlos'],
    icon: Tent,
    stock: 500,
  },
  {
    id: 'pax-camping',
    name: 'Pax Camping',
    price: '55,40',
    description: 'Standard Camping-Platz',
    features: ['Stellplatz für Zelt/Wohnwagen', 'Sanitäre Anlagen', 'Strom-Zugang möglich'],
    icon: Tent,
    stock: 50,
  },
  {
    id: 'adult-camping',
    name: 'Adult Online Camping',
    price: '249,00',
    description: 'Premium Camping für 2 Personen',
    features: [
      'Größerer Stellplatz',
      'Näher zu den Stages',
      'Premium Sanitäranlagen',
      'Stromanschluss inklusive',
    ],
    icon: Tent,
    popular: true,
    stock: 260,
  },
  {
    id: 'village-camping',
    name: 'Village Camping',
    price: '549,00',
    description: 'VIP Camping für 4 Personen',
    features: [
      'Großer Premium-Stellplatz',
      'Direkt am Festival-Gelände',
      'Exclusive Sanitäranlagen',
      'Lounge-Zugang',
      'Strom & WLAN',
    ],
    icon: Tent,
    premium: true,
    stock: 20,
  },
];

const addons = [
  { id: 'vip', name: 'VIP Upgrade', price: '49,90', description: 'VIP-Bereich mit exklusiven Vorteilen' },
  { id: 'fridge', name: 'Miniкühlschrank', price: '50,00', description: 'Kühlschrank-Vermietung fürs Camping' },
  { id: 'powerbank', name: 'Powerbank', price: '89,80', description: 'Leih-Powerbank für das gesamte Festival' },
  { id: 'locker-s', name: 'Schließfach S', price: '15,00', description: 'Kleines Schließfach' },
  { id: 'locker-m', name: 'Schließfach M', price: '20,00', description: 'Mittleres Schließfach' },
  { id: 'locker-l', name: 'Schließfach L', price: '25,00', description: 'Großes Schließfach' },
];

export const TicketsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('phase1');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-fire">Tickets</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Sichere dir jetzt dein Ticket für das erste Burning Sea Festival 2026!
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Check className="text-success" size={18} />
                <span className="text-success font-medium">Sichere Bezahlung</span>
              </div>
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Check className="text-success" size={18} />
                <span className="text-success font-medium">Sofortige Bestätigung</span>
              </div>
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Check className="text-success" size={18} />
                <span className="text-success font-medium">Mobile Tickets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="phase1" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="phase1">Phase 1 - Verfügbar</TabsTrigger>
                <TabsTrigger value="earlybird">Early Bird - Sold Out</TabsTrigger>
              </TabsList>
            </div>

            {ticketCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="text-center mb-12">
                  <Badge
                    variant={category.badgeVariant}
                    className="text-lg px-6 py-2"
                  >
                    {category.badge}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.tickets.map((ticket) => (
                    <Card
                      key={ticket.id}
                      className={`relative overflow-hidden border-2 transition-all duration-300 ${
                        ticket.popular
                          ? 'border-primary shadow-glow-fire scale-105'
                          : ticket.soldOut
                          ? 'opacity-60 border-border'
                          : 'border-border hover:border-primary/50 hover:shadow-elegant'
                      }`}
                    >
                      {ticket.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                          Beliebt
                        </div>
                      )}
                      {ticket.soldOut && (
                        <div className="absolute top-0 right-0 bg-muted text-muted-foreground px-4 py-1 text-sm font-semibold">
                          Ausverkauft
                        </div>
                      )}

                      <div className="p-6">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${ticket.color} mb-4`}>
                          <ticket.icon className="text-white" size={32} strokeWidth={1.5} />
                        </div>

                        {/* Name */}
                        <h3 className="font-heading text-2xl font-bold mb-2">{ticket.name}</h3>
                        <p className="text-muted-foreground mb-4">{ticket.description}</p>

                        {/* Price */}
                        <div className="mb-6">
                          {ticket.originalPrice && (
                            <span className="text-muted-foreground line-through text-lg mr-2">
                              €{ticket.originalPrice}
                            </span>
                          )}
                          <span className="font-heading text-4xl font-bold">€{ticket.price}</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-6">
                          {ticket.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <Check className="text-success flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Stock Info */}
                        {!ticket.soldOut && ticket.stock && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                              <span>Verfügbar</span>
                              <span>{ticket.stock} Stück</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${Math.min((ticket.stock / 2000) * 100, 100)}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        <Button
                          className="w-full"
                          disabled={ticket.soldOut}
                          variant={ticket.soldOut ? 'secondary' : 'default'}
                          asChild={!ticket.soldOut}
                        >
                          {ticket.soldOut ? (
                            <span>Ausverkauft</span>
                          ) : (
                            <a
                              href="https://tickets.burningsea.de"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              Jetzt kaufen
                              <ExternalLink className="ml-2" size={16} />
                            </a>
                          )}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Camping Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Camping-Optionen
            </h2>
            <p className="text-xl text-muted-foreground">
              Übernachte direkt am Festival-Gelände
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campingOptions.map((option) => (
              <Card
                key={option.id}
                className={`relative overflow-hidden transition-all duration-300 ${
                  option.popular
                    ? 'border-2 border-secondary shadow-glow-water'
                    : option.premium
                    ? 'border-2 border-accent shadow-elegant'
                    : 'border border-border hover:border-secondary/50 hover:shadow-elegant'
                }`}
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-semibold">
                    Beliebt
                  </div>
                )}
                {option.premium && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                    Premium
                  </div>
                )}

                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 mb-4">
                    <option.icon className="text-secondary" size={28} />
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-2">{option.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>

                  <div className="mb-4">
                    <span className="font-heading text-3xl font-bold">€{option.price}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="text-success flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant="outline" asChild>
                    <a
                      href="https://tickets.burningsea.de/camping"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Buchen
                      <ExternalLink className="ml-2" size={14} />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Zusatz-Optionen
            </h2>
            <p className="text-xl text-muted-foreground">
              Erweitere dein Festival-Erlebnis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon) => (
              <Card key={addon.id} className="p-6 border-border hover:border-primary/50 hover:shadow-elegant transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">{addon.name}</h3>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                  <Plus className="text-primary flex-shrink-0" size={20} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold">€{addon.price}</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://tickets.burningsea.de/addons" target="_blank" rel="noopener noreferrer">
                      Hinzufügen
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold mb-6 text-center">
                Wichtige Informationen
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">✅ Inklusive</h3>
                  <ul className="space-y-1">
                    <li>• Zugang zu allen gebuchten Bereichen</li>
                    <li>• Alle Workshops & Aktivitäten</li>
                    <li>• Festival-Programm</li>
                    <li>• Sanitäre Anlagen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">❌ Nicht inklusive</h3>
                  <ul className="space-y-1">
                    <li>• Speisen & Getränke</li>
                    <li>• Camping-Equipment</li>
                    <li>• Merchandise</li>
                    <li>• Anreise</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <p className="text-center text-muted-foreground">
                  Alle Preise verstehen sich inklusive MwSt. und Gebühren. Änderungen vorbehalten.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TicketsPage;