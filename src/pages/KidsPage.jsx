import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Palette, Mountain, Smile, Lightbulb, Music, ArrowRight, Sparkles } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const activityAreas = [
  {
    id: 'creativity',
    icon: Palette,
    title: 'Kreativität',
    subtitle: 'Hier kannst du deine Fantasie frei fliegen lassen!',
    description: 'Im Bereich Kreativität darfst du malen, basteln, gestalten und erfinden. Alles, was du dir ausdenkst, ist genau richtig.',
    color: 'from-kids-primary to-kids-secondary',
    activities: [
      { icon: '🖌️', title: 'Malen & Zeichnen', desc: 'Mit Farben, Stiften und Pinseln deine eigenen Bilder erschaffen' },
      { icon: '✂️', title: 'Basteln & Gestalten', desc: 'Schneiden, kleben, bauen – aus vielen Materialien etwas Eigenes machen' },
      { icon: '🧵', title: 'Werkeln & Handarbeiten', desc: 'Fädeln, kneten, formen und ausprobieren' },
      { icon: '🎭', title: 'Verkleiden & Rollen spielen', desc: 'In andere Figuren schlüpfen und kleine Geschichten erfinden' },
      { icon: '🧠', title: 'Ideen-Werkstatt', desc: 'Hier entstehen neue Ideen – laut, leise, bunt oder ganz verrückt' },
    ],
    images: [
      'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80',
      'https://images.unsplash.com/photo-1757085242652-f8cd4d3de889?w=800&q=80',
      'https://images.unsplash.com/photo-1757085242669-076c35ff9397?w=800&q=80',
    ],
    note: 'Hier gibt es kein Richtig oder Falsch – nur deine Ideen!',
  },
  {
    id: 'adventure',
    icon: Mountain,
    title: 'Aktion & Abenteuer',
    subtitle: 'Bist du bereit für ein Abenteuer?',
    description: 'Im Bereich Aktion & Abenteuer kannst du mutig sein, dich bewegen und Neues ausprobieren. Hier warten spannende Herausforderungen, bei denen du zeigen kannst, was in dir steckt!',
    color: 'from-primary to-accent',
    activities: [
      { icon: '🧗', title: 'Klettern & Balancieren', desc: 'Kletterwände, Hindernisse und spannende Parcours' },
      { icon: '🎹', title: 'Abenteuer-Stationen', desc: 'Zielen, werfen, schleichen oder kleine Aufgaben lösen' },
      { icon: '🚴', title: 'Bewegung & Tempo', desc: 'Roller-, Lauf- oder Geschicklichkeitsstrecken' },
      { icon: '🧭', title: 'Entdecken & Erkunden', desc: 'Schatzsuchen, Rätsel und kleine Expeditionen' },
      { icon: '🦸', title: 'Mut-Proben', desc: 'Trau dich, etwas Neues zu testen – ganz in deinem Tempo!' },
    ],
    images: [
      'https://images.unsplash.com/photo-1549057736-889b732754a2?w=800&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80',
    ],
    note: 'Du entscheidest selbst, wie viel Abenteuer du möchtest – Spaß und Sicherheit stehen immer an erster Stelle.',
  },
  {
    id: 'fun',
    icon: Smile,
    title: 'Spiel & Spaß',
    subtitle: 'Hier heißt es: Mitmachen, lachen und ausprobieren!',
    description: 'Im Bereich Spiel & Spaß kannst du rennen, bauen, spielen und Neues entdecken. Ob alleine oder mit Freunden – hier ist immer etwas los!',
    color: 'from-secondary to-kids-primary',
    activities: [
      { icon: '🎯', title: 'Geschicklichkeits- und Bewegungsspiele', desc: 'Balancieren, zielen, hüpfen oder werfen – probiere aus, was du kannst!' },
      { icon: '🎲', title: 'Große Spiele zum Anfassen', desc: 'Riesen-Spiele wie Mensch-ärgere-dich-nicht, Bauklötze oder Murmelbahnen' },
      { icon: '🎨', title: 'Kreativ-Ecke', desc: 'Malen, basteln und eigene kleine Kunstwerke gestalten' },
      { icon: '🏃', title: 'Action & Bewegung', desc: 'Bewegungsparcours, kleine Wettbewerbe und lustige Challenges' },
      { icon: '🎈', title: 'Überraschungen & Mitmachaktionen', desc: 'Spannende Spiele, bei denen jeder mitmachen kann – ganz ohne Vorkenntnisse' },
    ],
    images: [
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&q=80',
      'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80',
    ],
    note: 'Hier zählt der Spaß – nicht Gewinnen oder Verlieren',
  },
  {
    id: 'knowledge',
    icon: Lightbulb,
    title: 'Wissen & Technik',
    subtitle: 'Hier kannst du selbst entdecken, ausprobieren und staunen!',
    description: 'Im Themenbereich Wissen & Technik findest du spannende Stationen, an denen du lernst, wie Dinge funktionieren – ganz spielerisch und mit viel Spaß.',
    color: 'from-accent to-secondary',
    activities: [
      { icon: '🔬', title: 'Experimente zum Mitmachen', desc: 'Lass Farben tanzen, bring Magnete in Bewegung oder finde heraus, was Luft alles kann' },
      { icon: '🤖', title: 'Roboter & Computer', desc: 'Steuere kleine Roboter und lerne, wie man ihnen einfache Befehle gibt' },
      { icon: '🛠️', title: 'Bauen & Tüfteln', desc: 'Baue Brücken, Türme oder Fahrzeuge und teste, was besonders stabil ist' },
      { icon: '🌍', title: 'Energie & Umwelt', desc: 'Entdecke Sonnen- und Windkraft und erfahre, wie wir unsere Erde schützen können' },
      { icon: '🚀', title: 'Zukunft & Weltall', desc: 'Reise zu Planeten, Raketen und spannenden Ideen für morgen' },
    ],
    images: [
      'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80',
    ],
    note: 'Hier gibt es keine falschen Fragen – nur spannende Antworten!',
  },
];

export const KidsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kids-primary/10 via-kids-secondary/10 to-secondary/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-kids-primary/10 px-6 py-3 rounded-full mb-6 animate-fade-in-up">
              <Sparkles className="text-kids-primary" size={20} />
              <span className="text-kids-primary font-semibold">Für Kinder von 3-14 Jahren</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-fire">Kids Area</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Ein magischer Ort voller Kreativität, Abenteuer, Spaß und Entdeckungen!
            </p>

            <Button
              asChild
              size="lg"
              className="bg-kids-primary hover:bg-kids-primary/90 text-white shadow-glow-fire animate-fade-in-up"
            >
              <Link to="/tickets">
                Tickets für Kids
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-kids-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-kids-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Activity Areas */}
      {activityAreas.map((area, index) => (
        <section key={area.id} className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${area.color} mb-6`}>
                  <area.icon className="text-white" size={40} strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  {area.title}
                </h2>
                <p className="text-xl text-primary font-semibold mb-4">{area.subtitle}</p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{area.description}</p>
              </div>

              {/* Image Carousel */}
              <div className="mb-12">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {area.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                          <img
                            src={image}
                            alt={`${area.title} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-20`} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>

              {/* Activities Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {area.activities.map((activity, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-elegant transition-all duration-300 border-border group">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-2">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground">{activity.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Note */}
              <div className={`bg-gradient-to-r ${area.color} rounded-2xl p-6 text-center`}>
                <p className="text-white font-semibold text-lg">✨ {area.note}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ice Jam Stage Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-kids-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djR2NGgtNHYtNGgtNHYtNGg0di00aDR2NGg0em0wIDhjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl mb-8">
              <Music className="text-secondary" size={48} />
            </div>
            
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Ice Jam Stage ❄️🔥
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Wenn draußen die Sonne brennt, heißt es hier: Abkühlen auf dem Eis! Olaf & Elsa eröffnen die 
              Bühne mit einem frostigen Highlight, danach bringen coole Künstler:innen und Kinder-Shows 
              magische Eis-Vibes mitten im Sommer.
            </p>
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 mb-8">
              <p className="text-lg font-semibold text-foreground mb-2">Schlittschuhe an, Eis unter den Füßen und coole Beats genießen –</p>
              <p className="text-secondary text-xl font-bold">Sommerhitze war gestern!</p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-semibold mb-6">🎤 Line-Up Ice Jam Stage</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* Samstag */}
                <div className="bg-gradient-to-br from-secondary/10 to-kids-primary/10 rounded-xl p-6">
                  <h4 className="font-heading text-xl font-bold text-secondary mb-4">📅 Samstag</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">11:00</span>
                      <span className="font-semibold">Olaf & Elsa Show</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">12:30</span>
                      <span className="font-semibold">Die Eisprinzessinnen</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">14:00</span>
                      <span className="font-semibold">Zauberer Frostico</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">15:30</span>
                      <span className="font-semibold">Kinder-Disco on Ice</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">17:00</span>
                      <span className="font-semibold">Piraten der Eissee</span>
                    </li>
                  </ul>
                </div>
                
                {/* Sonntag */}
                <div className="bg-gradient-to-br from-kids-primary/10 to-accent/10 rounded-xl p-6">
                  <h4 className="font-heading text-xl font-bold text-kids-primary mb-4">📅 Sonntag</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">10:30</span>
                      <span className="font-semibold">Guten Morgen Yoga für Kids</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">12:00</span>
                      <span className="font-semibold">Die Schneeflocken-Band</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">13:30</span>
                      <span className="font-semibold">Jonglier-Show "Cool Tricks"</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">15:00</span>
                      <span className="font-semibold">Mitmach-Konzert</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-muted-foreground w-14">16:30</span>
                      <span className="font-semibold">Finale: Eiskönigin-Spektakel</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-muted-foreground mt-6 text-sm">
                * Programmänderungen vorbehalten. Alle Shows sind für Kinder von 3-14 Jahren geeignet.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Bereit für das Abenteuer?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sichere dir jetzt dein Ticket und sei dabei beim ersten Burning Sea Festival!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-kids-primary hover:bg-kids-primary/90 text-white text-lg shadow-glow-fire"
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
                className="border-2 border-kids-primary text-kids-primary hover:bg-kids-primary/10 text-lg"
              >
                <Link to="/faq">Fragen & Antworten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsPage;