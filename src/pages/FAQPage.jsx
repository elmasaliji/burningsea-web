import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqData = {
  transport: [
    {
      question: 'Wie komme ich zum Festival?',
      answer:
        'Mit dem Auto: Gib "Strandbad Stotternheimer See 19, 99095 Erfurt-Stotternheim" in dein Navi ein. Mit dem Zug: Fahre bis Erfurt Hauptbahnhof, von dort bringen dich unsere kostenlosen Shuttle-Busse zum Festival (alle 20 Minuten).',
    },
    {
      question: 'Wann fahren die Shuttle-Busse?',
      answer:
        'Hin-Fahrt: Erste Fahrt Freitag 10:00 Uhr, letzte Fahrt Samstag 02:00 Uhr (alle 20 Min). Rück-Fahrt: Erste Fahrt Samstag 14:00 Uhr, letzte Fahrt Sonntag 04:00 Uhr (alle 15 Min ab 22:00 Uhr). Start: Erfurt Hauptbahnhof, Busbahnhof Steig 5. Fahrtzeit: ca. 25 Minuten.',
    },
    {
      question: 'Sind die Shuttle-Busse kostenlos?',
      answer:
        'Ja! Die Shuttle-Busse sind für alle Festival-Besucher komplett kostenlos. Zeige einfach dein Ticket beim Einsteigen vor. Keine Reservierung notwendig - First come, first served!',
    },
    {
      question: 'Gibt es Parkplätze am Festival-Gelände?',
      answer:
        'Ja, es gibt ausreichend Parkplätze direkt am Gelände. Die Parkgebühr ist nicht im Festival-Ticket enthalten und beträgt 10€ pro Tag.',
    },
  ],
  kids: [
    {
      question: 'Darf ich mein Kind unter 3 Jahren mitbringen?',
      answer:
        'Natürlich, aber wir empfehlen dir es nicht, da es immerhin noch ein Festival ist und es durchaus etwas lauter werden kann, auch in den Silent Bereichen.',
    },
    {
      question: 'Kann ich mein Ticket auch an der Tageskasse kaufen?',
      answer:
        'Natürlich, es gibt eine Tageskasse, jedoch empfehlen wir dir den VVK zu nutzen um sicher dabei zu sein.',
    },
    {
      question: 'Wo muss ich mein Kind für die Aktivitäten oder Workshops anmelden?',
      answer:
        'Komm einfach an unseren Infopoints in den jeweiligen Bereichen vorbei und sag uns worauf dein Kind Lust hat.',
    },
    {
      question: 'Kann ich mein Kind alleine lassen?',
      answer:
        'Eine schwierige Frage aber ja, in dem Kids Bereich kannst du ohne Angst zu haben dein Kind spielen lassen. Da es sich um einen eigens gesicherten Bereich handelt, ist das Verlassen dieses Bereiches durch die Kinder nicht eigenständig möglich. Jedoch gilt auch hier wie überall: Eltern haften für ihre Kinder.',
    },
    {
      question: 'Sind alle Aktivitäten kostenlos?',
      answer:
        'Wir versuchen eine Vielzahl der Aktivitäten in die Ticketpreise zu inkludieren, jedoch fallen zusätzliche Kosten für Speisen und Getränke sowie für Drittanbieter an.',
    },
    {
      question: 'Darf man schwimmen gehen?',
      answer:
        'Natürlich! Es ist ein Badestrand, daher ist das Planschen gerne gesehen.',
    },
  ],
  adult: [
    {
      question: 'Ab welchem Alter kann ich die Adult Area besuchen?',
      answer:
        'Die Adult Area ist ab 16 Jahren zugänglich. Bitte halte einen gültigen Lichtbildausweis bereit.',
    },
    {
      question: 'Welche Künstler treten auf?',
      answer:
        'Das komplette Line-Up wird in Kürze bekannt gegeben. Melde dich für unseren Newsletter an, um als Erster informiert zu werden.',
    },
    {
      question: 'Gibt es Altersbeschränkungen für die verschiedenen Stages?',
      answer:
        'Die Mainstage ist ab 16 Jahren zugänglich. Für die Techno Stage gilt ebenfalls eine Altersbeschränkung von 16+.',
    },
    {
      question: 'Sind Speisen und Getränke im Ticket enthalten?',
      answer:
        'Nein, Speisen und Getränke sind nicht im Ticketpreis enthalten. Es gibt jedoch vielfältige Foodtrucks und Geträndestände auf dem Gelände.',
    },
    {
      question: 'Kann ich meine eigenen Getränke mitbringen?',
      answer:
        'Aus Sicherheitsgründen ist das Mitbringen von Glasflaschen nicht gestattet. Verschlossene PET-Flaschen und wiederverschließbare Behälter sind erlaubt.',
    },
    {
      question: 'Gibt es Schließfächer?',
      answer:
        'Ja, wir bieten Schließfächer in verschiedenen Größen an. Diese können vorab online oder vor Ort gebucht werden.',
    },
  ],
  general: [
    {
      question: 'Wo findet das Festival statt?',
      answer:
        'Das Burning Sea Festival findet am Strandbad Stotternheimer See, 99095 Erfurt-Stotternheim statt.',
    },
    {
      question: 'Wie komme ich zum Festival?',
      answer:
        'Mit dem Auto: Gib "Strandbad Stotternheimer See 19, 99095 Erfurt-Stotternheim" in dein Navigationssystem ein. Mit dem Zug: Nutze die Regionalbahn und anschließend unsere Shuttle-Busse.',
    },
    {
      question: 'Gibt es Parkplätze?',
      answer:
        'Ja, es stehen ausreichend Parkplätze in der Nähe des Geländes zur Verfügung. Die Parkgebühr ist im Ticket nicht enthalten.',
    },
    {
      question: 'Ist das Festival barrierefrei?',
      answer:
        'Wir bemühen uns, das Festival so barrierefrei wie möglich zu gestalten. Bei spezifischen Bedürfnissen kontaktiere uns bitte im Vorfeld.',
    },
    {
      question: 'Was passiert bei schlechtem Wetter?',
      answer:
        'Das Festival findet bei jedem Wetter statt. Bitte kleide dich entsprechend und bringe wetterfeste Kleidung mit.',
    },
    {
      question: 'Kann ich mein Ticket zurückgeben?',
      answer:
        'Tickets sind grundsätzlich nicht rückerstattungsfähig, es sei denn, die Veranstaltung wird abgesagt. Details findest du in unseren AGB.',
    },
    {
      question: 'Gibt es ein Mindestalter?',
      answer:
        'Kinder ab 3 Jahren können mit einem Kinder-Ticket die Kids Area besuchen. Die Adult Area ist ab 16 Jahren zugänglich.',
    },
    {
      question: 'Dürfen Hunde mitgebracht werden?',
      answer:
        'Aus Sicherheitsgründen und Rücksicht auf andere Gäste sind Hunde auf dem Festival-Gelände leider nicht erlaubt. Ausnahmen gelten für Assistenzhunde.',
    },
  ],
  camping: [
    {
      question: 'Ist Camping im Ticket enthalten?',
      answer:
        'Nein, Camping muss separat gebucht werden. Es gibt verschiedene Camping-Optionen, die du zusätzlich zum Festival-Ticket erwerben kannst.',
    },
    {
      question: 'Ab wann kann ich anreisen?',
      answer:
        'Die Camping-Bereiche öffnen am Freitag um 12:00 Uhr. Genaue Informationen erhältst du mit deiner Ticket-Bestätigung.',
    },
    {
      question: 'Muss ich mein eigenes Zelt mitbringen?',
      answer:
        'Ja, du musst dein eigenes Camping-Equipment mitbringen. Wir bieten keine Mietzelteoder voraufgebaute Unterkünfte an.',
    },
    {
      question: 'Gibt es Duschen und Toiletten?',
      answer:
        'Ja, es gibt sanitäre Anlagen in allen Camping-Bereichen. Premium-Bereiche verfügen über höherwertige Einrichtungen.',
    },
    {
      question: 'Gibt es Stromanschlüsse?',
      answer:
        'Stromanschlüsse sind in den Premium- und Village-Camping-Bereichen verfügbar. Im Standard-Camping gibt es Ladestationen.',
    },
  ],
};

export const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="text-primary" size={40} />
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-fire">FAQ</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Antworten auf die häufigsten Fragen zum Burning Sea Festival
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
                <TabsTrigger value="general">Allgemein</TabsTrigger>
                <TabsTrigger value="transport">Transport</TabsTrigger>
                <TabsTrigger value="kids">Kids Area</TabsTrigger>
                <TabsTrigger value="adult">Adult Area</TabsTrigger>
                <TabsTrigger value="camping">Camping</TabsTrigger>
              </TabsList>

              {Object.entries(faqData).map(([key, questions]) => (
                <TabsContent key={key} value={key}>
                  <Card className="p-6 md:p-8 border-border">
                    <Accordion type="single" collapsible className="w-full">
                      {questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-semibold hover:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Noch Fragen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wenn du deine Antwort hier nicht gefunden hast, kontaktiere uns gerne direkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@burningsea.de"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                E-Mail senden
              </a>
              <a
                href="tel:+491234567890"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;