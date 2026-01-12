import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingTicketButton } from '../components/FloatingTicketButton';
import { Card } from '../components/ui/card';
import { ScrollText } from 'lucide-react';

export const AGBPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingTicketButton />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <ScrollText className="text-accent" size={40} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              AGB
            </h1>
            <p className="text-lg text-muted-foreground">Allgemeine Gesch\u00e4ftsbedingungen</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-border animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-accent">\u00a7 1 Geltungsbereich</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Diese Allgemeinen Gesch\u00e4ftsbedingungen gelten f\u00fcr alle Vertr\u00e4ge zwischen dem Veranstalter (Burning Sea Festival GmbH) und dem Besucher \u00fcber den Erwerb von Tickets f\u00fcr das Burning Sea Festival 2026.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-accent">\u00a7 2 Ticketerwerb</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Der Vertrag kommt mit der Best\u00e4tigung der Ticketbestellung durch den Veranstalter zustande. Tickets sind personalisiert und nicht \u00fcbertragbar.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Bezahlung erfolgt \u00fcber die angegebenen Zahlungsmethoden. Mit Zahlungseingang wird das Ticket per E-Mail zugestellt.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-accent">\u00a7 3 Eintritt und Zugang</h2>\n                  <ul className=\"space-y-2 text-muted-foreground\">\n                    <li>\u2022 Der Einlass erfolgt nur mit g\u00fcltigem Ticket und Lichtbildausweis</li>\n                    <li>\u2022 Altersbeschr\u00e4nkungen: Kids Area 3-14 Jahre, Adult Area 16+ Jahre</li>\n                    <li>\u2022 Kinder unter 14 Jahren nur in Begleitung Erwachsener</li>\n                    <li>\u2022 Der Veranstalter beh\u00e4lt sich Einlasskontrollen vor</li>\n                  </ul>\n                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-accent">\u00a7 4 R\u00fccktritt und Stornierung</h2>\n                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>Stornierung durch den Besucher:</strong><br />\n                    Bis 30 Tage vor Festivalbeginn: 90% R\u00fcckerstattung<br />\n                    Bis 14 Tage vor Festivalbeginn: 50% R\u00fcckerstattung<br />\n                    Sp\u00e4ter: Keine R\u00fcckerstattung\n                  </p>\n                  <p className=\"text-muted-foreground leading-relaxed\">\n                    <strong>Absage durch Veranstalter:</strong><br />\n                    Bei Absage wird der volle Ticketpreis erstattet. Weitergehende Anspr\u00fcche bestehen nicht.\n                  </p>\n                </div>

                <div>\n                  <h2 className=\"font-heading text-2xl font-bold mb-4 text-accent\">\u00a7 5 Hausrecht</h2>\n                  <p className=\"text-muted-foreground leading-relaxed\">\n                    Der Veranstalter \u00fcbt das Hausrecht aus. Personen k\u00f6nnen bei Verst\u00f6\u00dfen gegen die Festivalregeln oder aus Sicherheitsgr\u00fcnden ohne Erstattung des Eintritts vom Gel\u00e4nde verwiesen werden.\n                  </p>\n                </div>\n\n                <div>\n                  <h2 className=\"font-heading text-2xl font-bold mb-4 text-accent\">\u00a7 6 Haftung</h2>\n                  <p className=\"text-muted-foreground leading-relaxed\">\n                    Der Veranstalter haftet nur f\u00fcr Sch\u00e4den aus der Verletzung des Lebens, des K\u00f6rpers oder der Gesundheit sowie bei Vorsatz und grober Fahrl\u00e4ssigkeit. Die Haftung f\u00fcr Sach- und Verm\u00f6genssch\u00e4den ist ausgeschlossen, sofern nicht vors\u00e4tzlich oder grob fahrl\u00e4ssig verursacht.\n                  </p>\n                </div>\n              </div>\n            </Card>\n          </div>\n        </div>\n      </section>\n\n      <Footer />\n    </div>\n  );\n};\n\nexport default AGBPage;\nEOF\necho \"AGB page created\""
