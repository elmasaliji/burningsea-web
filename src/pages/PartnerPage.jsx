import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { BewerbungModal } from '../components/BewerbungModal';
import { UtensilsCrossed, Music, Briefcase, Megaphone, ArrowRight, Mail } from 'lucide-react';

const partnerCategories = [
  {
    id: 'food',
    icon: UtensilsCrossed,
    title: 'Foodstands & Genuss-Partner',
    emoji: '🍔🌮',
    color: 'from-primary to-accent',
    description:
      'Ein gutes Festival lebt nicht nur von Musik und Action – es lebt auch vom Essen. Mit euren Foodtrucks holen wir leckere Vielfalt, Streetfood-Vibes und Festival-Genuss auf das Gelände.',
    details:
      'Ob süß oder herzhaft, klassisch oder kreativ, regional oder international – Ihr als Foodstand-Partner sorgt dafür, dass kleine und große Festivalgäste neue Lieblingssnacks entdecken und zwischendurch neue Energie tanken können.',
  },
  {
    id: 'artists',
    icon: Music,
    title: 'DJs & Bands – Newcomer Stage',
    emoji: '🎸🎵',
    color: 'from-secondary to-primary',
    description:
      'Du hast Tracks, die knallen? Eine Band, die nicht nur im Proberaum funktioniert? Dann raus damit – unsere Bühne wartet auf dich.',
    details:
      'Die Newcomer Stage ist kein Lückenfüller. Sie ist der Ort für frische Sounds, neue Gesichter und echte Gänsehaut-Momente. Hier geht\'s nicht um große Namen, sondern um Energie, Mut und ehrliche Musik. Egal ob DJ, Solo-Act oder Band – wenn du Bock hast, Publikum zu bewegen, statt nur Playlists abzuspielen, dann gehörst du hierher.',
    cta: 'Plug dich ein. Dreh auf. Spiel Festival.',
  },
  {
    id: 'jobs',
    icon: Briefcase,
    title: 'Jobs & Kreative Köpfe',
    emoji: '🛠️🎨',
    color: 'from-kids-primary to-secondary',
    description:
      'Ein Festival braucht mehr als Bühnen – es braucht Macher:innen. Köpfe voller Ideen, Hände, die anpacken, und Menschen, die Lust haben, etwas Neues zu bauen.',
    details:
      'Ob Organisation, Technik, Deko, Social Media, Programm, Gestaltung oder Chaos-Manager im Hintergrund: Wenn du kreativ denkst, Verantwortung übernimmst oder einfach Bock hast, Teil von etwas Echtem zu sein, dann bist du hier richtig. Wir suchen keine perfekten Lebensläufe. Wir suchen Energie, Ideen und Menschen mit Haltung.',
    cta: 'Bring dein Talent mit. Bau mit uns ein Festival.',
  },
  {
    id: 'sponsors',
    icon: Megaphone,
    title: 'Werbepartnerschaft – sehen & gesehen werden',
    emoji: '📣✨',
    color: 'from-accent to-primary',
    description:
      'Ein Festival ist mehr als ein Event – es ist Aufmerksamkeit, Emotion und Reichweite. Hier treffen Menschen auf Marken, Geschichten auf Erlebnisse und Sichtbarkeit auf echte Momente.',
    details:
      'Als Werbepartner wirst du Teil des Festivals, nicht nur Logo am Rand. Präsent auf dem Gelände, sichtbar im Programm, spürbar in der Atmosphäre – dort, wo Erinnerungen entstehen. Ob Branding, Aktionen, Sampling oder kreative Präsenz: Wir bieten Raum für echte Sichtbarkeit, die wirkt – bei Familien, Jugendlichen und einer offenen, lebendigen Community.',
    cta: 'Sehen. Erleben. Gesehen werden.',
  },
];

export const PartnerPage = () => {
  const [isBewerbungOpen, setIsBewerbungOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BewerbungModal open={isBewerbungOpen} onOpenChange={setIsBewerbungOpen} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-fire">Partner werden</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed">
              Ein Festival fällt nicht vom Himmel – es entsteht durch Menschen wie dich.
            </p>

            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-primary/20 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Menschen mit Ideen, Lust auf Neues und Bock, gemeinsam was Starkes auf die Beine zu stellen.
                Ob Partner, Supporter oder Teil der Crew: Wir bauen kein Standard-Event, sondern ein Familien-
                & Jugendfestival mit echtem Festivalfeeling – bunt, laut, entspannt und voller Leben.
              </p>
              <p className="text-2xl font-heading font-bold text-primary">
                Join the Crew. 🎪
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Lass uns gemeinsam etwas starten, das bleibt.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {partnerCategories.map((category, index) => (
              <div key={category.id} className={`${index % 2 === 0 ? '' : 'bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-3xl'}`}>
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Icon & Title */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${category.color} mb-6`}>
                        <category.icon className="text-white" size={48} strokeWidth={1.5} />
                      </div>
                      <div className="text-6xl mb-4">{category.emoji}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        {category.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        {category.details}
                      </p>
                      {category.cta && (
                        <div className={`inline-block bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                          <p className="text-xl font-bold">👉 {category.cta}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Card */}
                  <Card className="mt-8 p-8 border-2 border-border hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h3 className="font-heading text-xl font-semibold mb-2">
                          Interesse? Lass uns reden!
                        </h3>
                        <p className="text-muted-foreground">
                          Kontaktiere uns und werde Teil des ersten Burning Sea Festivals
                        </p>
                      </div>
                      <Button
                        size="lg"
                        onClick={() => setIsBewerbungOpen(true)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-fire whitespace-nowrap"
                      >
                        Jetzt bewerben
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center border-2 border-primary/20">
              <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Bereit, Teil von etwas Großem zu werden?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ob als Food-Partner, Künstler:in, Team-Mitglied oder Sponsor – wir freuen uns auf deine Nachricht!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsBewerbungOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-glow-fire"
                >
                  Jetzt bewerben
                  <Mail className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 text-lg"
                  asChild
                >
                  <a href="tel:+491234567890">Anrufen</a>
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-xl font-semibold mb-4">Kontaktdaten</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto:partner@burningsea.de" className="text-primary hover:underline">
                      partner@burningsea.de
                    </a>
                  </p>
                  <p>
                    <strong>Telefon:</strong>{' '}
                    <a href="tel:+491234567890" className="text-primary hover:underline">
                      +49 123 456 7890
                    </a>
                  </p>
                  <p className="text-sm mt-4">
                    Geschäftsführer: C. Finholdt
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerPage;