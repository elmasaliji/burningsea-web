import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { Shield } from 'lucide-react';

export const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6">
              <Shield className="text-secondary" size={40} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Datenschutz
            </h1>
            <p className="text-lg text-muted-foreground">Ihre Daten sind bei uns sicher</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-border animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-secondary">Datenschutzerkl\u00e4rung</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Der Schutz Ihrer pers\u00f6nlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschlie\u00dflich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Datenerfassung</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Personenbezogene Daten:</strong><br />
                    Bei der Ticket-Buchung erfassen wir: Name, E-Mail-Adresse, Telefonnummer (optional), Zahlungsinformationen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Automatisch erfasste Daten:</strong><br />
                    IP-Adresse, Browsertyp, Zugriffszeitpunkt, verweise Website.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Verwendung der Daten</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ihre Daten werden ausschlie\u00dflich f\u00fcr die Ticketabwicklung, Kommunikation bez\u00fcglich des Festivals und zur Erf\u00fcllung gesetzlicher Verpflichtungen verwendet. Eine Weitergabe an Dritte erfolgt nur im Rahmen der Zahlungsabwicklung.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Sie k\u00f6nnen Cookies in Ihren Browsereinstellungen deaktivieren.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Ihre Rechte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sie haben das Recht auf Auskunft, Berichtigung, L\u00f6schung, Einschr\u00e4nkung der Verarbeitung, Daten\u00fcbertragbarkeit und Widerspruch. Kontaktieren Sie uns unter: datenschutz@burningsea.de
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Datensicherheit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir verwenden SSL-Verschl\u00fcsselung f\u00fcr die Daten\u00fcbertragung und treffen technische und organisatorische Ma\u00dfnahmen zum Schutz Ihrer Daten.
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

export default DatenschutzPage;
