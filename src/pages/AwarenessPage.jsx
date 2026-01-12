import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { Shield, Heart, Users, AlertCircle, Phone } from 'lucide-react';

const awarenessRules = [
  {
    icon: Heart,
    title: 'Respekt & Toleranz',
    color: 'from-primary to-accent',
    rules: [
      'Respektiere alle Menschen unabhängig von Geschlecht, Herkunft, Religion oder sexueller Orientierung',
      'Diskriminierung, Rassismus und Sexismus haben hier keinen Platz',
      'Akzeptiere ein "Nein" und respektiere persönliche Grenzen',
      'Achte auf die Gefühle und das Wohlbefinden anderer'
    ]
  },
  {
    icon: Shield,
    title: 'Sicherheit',
    color: 'from-secondary to-secondary-light',
    rules: [
      'Achte auf deine Freund:innen und andere Festival-Gäste',
      'Lass niemanden allein, der Hilfe braucht',
      'Wende dich bei Problemen an unser Awareness-Team (gelbe Westen)',
      'Im Notfall: Rufe sofort das Security-Personal oder den Sanitätsdienst'
    ]
  },
  {
    icon: Users,
    title: 'Consent ist King',
    color: 'from-kids-primary to-kids-secondary',
    rules: [
      'Berührungen nur mit ausdrücklicher Zustimmung',
      'Fotos und Videos nur mit Einverständnis der abgebildeten Personen',
      'Alkohol oder Drogen sind KEINE Entschuldigung für Grenzüberschreitungen',
      'Bei unsicherem Verhalten: Sprich die Person an oder hole Hilfe'
    ]
  },
  {
    icon: AlertCircle,
    title: 'Drogenkonsum',
    color: 'from-accent to-primary',
    rules: [
      'Der Konsum illegaler Substanzen ist verboten',
      'Achte auf deinen Alkoholkonsum - kenne deine Grenzen',
      'Drug-Checking ist vor Ort verfügbar (anonym und kostenlos)',
      'Bei medizinischen Notfällen: Sofort Hilfe holen - keine Angst vor Konsequenzen!'
    ]
  },
];

export const AwarenessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-kids-primary/5">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-secondary/10 to-kids-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-secondary to-kids-primary rounded-full mb-6 shadow-glow-water">
              <Shield className="text-white" size={48} strokeWidth={2} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary via-kids-primary to-primary bg-clip-text text-transparent">
                Awareness
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Gemeinsam für ein sicheres und respektvolles Festival-Erlebnis
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-secondary/10 to-primary/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-secondary/30">
                <p className="text-lg text-foreground/80 leading-relaxed text-center">
                  Das Burning Sea Festival soll ein sicherer und respektvoller Ort für alle sein. 
                  Unser Awareness-Konzept basiert auf gegenseitigem Respekt, Achtsamkeit und der 
                  Bereitschaft, füreinander da zu sein. Gemeinsam schaffen wir eine Atmosphäre, 
                  in der sich alle wohl und sicher fühlen können.
                </p>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {awarenessRules.map((section, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-10 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:opacity-20 transition-all duration-500`} />
                
                <Card className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-md p-8 rounded-3xl border-2 border-transparent hover:border-secondary/20 transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <section.icon className="text-white" size={32} strokeWidth={2} />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                    {section.title}
                  </h3>

                  <ul className="space-y-4">
                    {section.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-secondary text-xl flex-shrink-0 mt-1">✓</span>
                        <span className="text-foreground/70 leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-primary/20">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={32} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
                      Hilfe & Ansprechpartner
                    </h2>
                    <div className="space-y-3 text-foreground/70">
                      <p>
                        <strong className="text-foreground">Awareness-Team:</strong> Erkennbar an gelben Westen 
                        mit "Awareness" Aufschrift. Ansprechbar für alle Fragen und Probleme.
                      </p>
                      <p>
                        <strong className="text-foreground">Awareness-Zelt:</strong> Sicherer Rückzugsort in der 
                        Mitte des Geländes (siehe Lageplan). Hier kannst du dich ausruhen und bekommst 
                        vertrauliche Unterstützung.
                      </p>
                      <p>
                        <strong className="text-foreground">Notfall-Hotline:</strong> +49 123 456 7890 
                        (24h erreichbar während des Festivals)
                      </p>
                      <p>
                        <strong className="text-foreground">Sanitätsdienst:</strong> Mehrere Sanitätszelte 
                        auf dem Gelände verteilt, rund um die Uhr besetzt.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-kids-primary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-gradient-to-br from-secondary/5 to-kids-primary/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border-2 border-secondary/20 text-center">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    💜 Gemeinsam stark
                  </span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Awareness ist Teamarbeit! Jede:r von uns trägt zur Atmosphäre bei. 
                  Schau auf dich und andere. Sprich Grenzüberschreitungen an. Hole Hilfe, 
                  wenn du sie brauchst oder siehst, dass jemand Hilfe braucht. 
                  Gemeinsam machen wir das Burning Sea Festival zu einem Ort, 
                  an dem sich alle sicher und willkommen fühlen!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwarenessPage;
