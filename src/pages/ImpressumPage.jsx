import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { FileText } from 'lucide-react';

export const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <FileText className="text-primary" size={40} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Impressum
            </h1>
            <p className="text-lg text-muted-foreground">Angaben gemäß § 5 TMG</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-border animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Verantwortlich</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Burning Sea Festival GmbH<br />
                    Christian Finholdt (Geschäftsführer)<br />
                    Strandbad Stotternheimer See 19<br />
                    99095 Erfurt-Stotternheim<br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Kontakt</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Telefon: +49 123 456 7890<br />
                    E-Mail: info@burningsea.de<br />
                    Web: www.burningsea.de
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Registereintrag</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Handelsregister: HRB 123456<br />
                    Registergericht: Amtsgericht Erfurt<br />
                    USt-IdNr.: DE123456789
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Verantwortlich für den Inhalt</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Christian Finholdt<br />
                    Strandbad Stotternheimer See 19<br />
                    99095 Erfurt-Stotternheim
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Haftungsausschluss</h2>
                  <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                  
                  <h3 className="font-semibold mb-2">Haftung für Links</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-primary">Urheberrecht</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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

export default ImpressumPage;