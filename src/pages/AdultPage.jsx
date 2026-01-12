import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Music, Radio, Zap, ArrowRight, Users, Clock } from 'lucide-react';

const stages = [
  {
    id: 'mainstage',
    name: 'The Spot',
    subtitle: 'Mainstage',
    emoji: '🎉',
    description: 'Die Mainstage ist das Herzstück des Festivals: coole Bands, fetzige DJs und epische Shows sorgen dafür, dass kein Beat verpasst wird. Hier trifft Action auf Vibes, jeder Move wird gefeiert und jedes Highlight haut richtig rein – genau der Place-to-be für alle, die das Festival richtig erleben wollen!',
    tagline: 'Hier geht die Party ab!',
    color: 'from-primary to-accent',
    image: 'https://images.unsplash.com/photo-1582711012124-a56cf82307a0?w=1200&q=80',
  },
  {
    id: 'techno',
    name: 'Rave Tower',
    subtitle: 'Techno Stage',
    emoji: '⚡',
    description: 'Die Techno Stage ist der Place-to-be für alle, die Bass, Beats und richtig fette Vibes lieben. Treibende DJ-Sets, hypnotische Sounds und nonstop Party lassen jeden Puls höher schlagen – hier wird die Nacht zum ultimativen Rave-Erlebnis!',
    tagline: 'Hier pulsiert die Nacht!',
    color: 'from-secondary to-primary',
    image: 'https://images.unsplash.com/photo-1658046413536-6e5933dfd939?w=1200&q=80',
  },
];

const festivalHighlights = [
  {
    icon: Music,
    title: 'Live Acts',
    description: 'Bands und Künstler:innen, die richtig rocken',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Radio,
    title: 'DJ Sets',
    description: 'Von House bis Techno – Beats für jeden Geschmack',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Zap,
    title: 'Festival Vibes',
    description: 'Echtes Festivalgefühl von morgens bis spät nachts',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Neue Leute kennenlernen und gemeinsam feiern',
    color: 'bg-kids-primary/10 text-kids-primary',
  },
];

export const AdultPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1684348406379-950ef79e81c9?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-background/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 animate-fade-in-up">
              <Zap size={20} />
              <span className="font-semibold">16+ Jahre</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Performance Area
            </h1>

            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
              Live-Musik, pulsierende Beats und unvergessliche Festival-Momente am Stotternheimer See
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow-fire text-lg"
              >
                <Link to="/tickets">
                  Tickets sichern
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-md text-lg"
              >
                <Link to="#lineup">Line-Up ansehen</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Festival Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Was dich erwartet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ein Festival-Erlebnis, das alle Sinne anspricht
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {festivalHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-border group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${highlight.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <highlight.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="lineup" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Unsere Stages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zwei Bühnen, unterschiedliche Vibes – ein unvergessliches Festival-Erlebnis
            </p>
          </div>

          <div className="space-y-20">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={stage.image}
                      alt={stage.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-40 group-hover:opacity-30 transition-opacity`} />
                    
                    {/* Stage Badge */}
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                      <span className="text-white font-bold text-lg">{stage.emoji} {stage.name}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="max-w-xl">
                    <div className={`inline-block bg-gradient-to-r ${stage.color} text-transparent bg-clip-text mb-4`}>
                      <p className="text-sm font-bold uppercase tracking-wider">{stage.subtitle}</p>
                    </div>
                    
                    <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                      {stage.name}
                    </h3>
                    
                    <p className="text-2xl font-semibold text-primary mb-6">
                      {stage.tagline}
                    </p>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Line-Up Card */}
                    <Card className="p-6 bg-card border-border">
                      <div className="flex items-center space-x-3 mb-6">
                        <Clock className="text-primary" size={24} />
                        <h4 className="font-heading text-xl font-semibold">Line-Up {stage.name}</h4>
                      </div>
                      
                      {stage.id === 'mainstage' ? (
                        <div className="space-y-6">
                          {/* Samstag */}
                          <div>
                            <h5 className="font-bold text-primary mb-3">📅 Samstag</h5>
                            <ul className="space-y-2 text-sm">
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">16:00</span>
                                <span className="font-semibold">Summer Collective</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">18:00</span>
                                <span className="font-semibold">The Burning Hearts</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">20:00</span>
                                <span className="font-semibold">DJ Sunrise</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-primary/10 border border-primary/20">
                                <span className="font-mono text-muted-foreground">22:00</span>
                                <span className="font-bold text-primary">🌟 Headliner TBA</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">00:00</span>
                                <span className="font-semibold">Midnight Grooves</span>
                              </li>
                            </ul>
                          </div>
                          {/* Sonntag */}
                          <div>
                            <h5 className="font-bold text-secondary mb-3">📅 Sonntag</h5>
                            <ul className="space-y-2 text-sm">
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">14:00</span>
                                <span className="font-semibold">Beach Beats Band</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">16:00</span>
                                <span className="font-semibold">Seawave Orchestra</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">18:00</span>
                                <span className="font-semibold">Acoustic Sunset Session</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                                <span className="font-mono text-muted-foreground">20:00</span>
                                <span className="font-bold text-secondary">🌟 Closing Act TBA</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {/* Samstag Techno */}
                          <div>
                            <h5 className="font-bold text-secondary mb-3">📅 Samstag</h5>
                            <ul className="space-y-2 text-sm">
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">20:00</span>
                                <span className="font-semibold">Warm-Up: DJ Elektro</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">22:00</span>
                                <span className="font-semibold">Bassquake</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-secondary/10 border border-secondary/20">
                                <span className="font-mono text-muted-foreground">00:00</span>
                                <span className="font-bold text-secondary">⚡ Rave Tower Headliner</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">02:00</span>
                                <span className="font-semibold">Underground Vibes</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">04:00</span>
                                <span className="font-semibold">Sunrise Session</span>
                              </li>
                            </ul>
                          </div>
                          {/* Sonntag Techno */}
                          <div>
                            <h5 className="font-bold text-primary mb-3">📅 Sonntag</h5>
                            <ul className="space-y-2 text-sm">
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">18:00</span>
                                <span className="font-semibold">Melodic Journey</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">20:00</span>
                                <span className="font-semibold">Hypnotic Beats</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                                <span className="font-mono text-muted-foreground">22:00</span>
                                <span className="font-semibold">Deep Night Collective</span>
                              </li>
                              <li className="flex justify-between items-center p-2 rounded-lg bg-primary/10 border border-primary/20">
                                <span className="font-mono text-muted-foreground">00:00</span>
                                <span className="font-bold text-primary">⚡ Final Rave</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                        * Programmänderungen vorbehalten
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Experience Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Mehr als nur Musik
              </h2>
              <p className="text-xl text-muted-foreground">
                Das Burning Sea Festival ist ein Gesamterlebnis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border hover:shadow-elegant transition-all duration-300">
                <h3 className="font-heading text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-3">🍔</span>
                  Food & Drinks
                </h3>
                <p className="text-muted-foreground">
                  Genieße vielfältige kulinarische Angebote von regionalen und internationalen Foodtrucks
                </p>
              </Card>

              <Card className="p-6 border-border hover:shadow-elegant transition-all duration-300">
                <h3 className="font-heading text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎪</span>
                  Chill-Out Bereiche
                </h3>
                <p className="text-muted-foreground">
                  Entspanne zwischen den Sets in unseren gemütlichen Lounge-Areas direkt am See
                </p>
              </Card>

              <Card className="p-6 border-border hover:shadow-elegant transition-all duration-300">
                <h3 className="font-heading text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-3">🏞️</span>
                  Beach Vibes
                </h3>
                <p className="text-muted-foreground">
                  Festival-Feeling direkt am Wasser – Sommersonne, Sand und gute Musik vereint
                </p>
              </Card>

              <Card className="p-6 border-border hover:shadow-elegant transition-all duration-300">
                <h3 className="font-heading text-xl font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎪</span>
                  Camping
                </h3>
                <p className="text-muted-foreground">
                  Übernachte vor Ort und erlebe das Festival von Anfang bis Ende
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Sei dabei beim ersten Burning Sea!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sichere dir jetzt dein Ticket und erlebe ein unvergessliches Festival-Wochenende
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-glow-fire"
              >
                <Link to="/tickets">
                  Tickets kaufen
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg"
              >
                <Link to="/camping">Camping-Optionen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdultPage;