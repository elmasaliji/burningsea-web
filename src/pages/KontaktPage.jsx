import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram } from 'lucide-react';

// TikTok Icon
const TikTokIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Open email client as fallback
      const mailtoLink = `mailto:info@burningsea.de?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-full mb-8 shadow-2xl">
              <MessageCircle className="text-white" size={36} />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Kontakt
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              Hast du Fragen zum Festival? Wir sind für dich da!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                  So erreichst du uns
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Ob Fragen zu Tickets, Camping, Anreise oder Partnerschaften – unser Team hilft dir gerne weiter. 
                  Schreib uns eine Nachricht oder nutze die direkten Kontaktmöglichkeiten.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                      <a href="mailto:info@burningsea.de" className="text-primary hover:underline">
                        info@burningsea.de
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">Antwort innerhalb von 24-48 Stunden</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                      <a href="tel:+491234567890" className="text-secondary hover:underline">
                        +49 123 456 7890
                      </a>
                      <p className="text-sm text-foreground/60 mt-1">Mo-Fr: 10:00 - 18:00 Uhr</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Festival-Gelände</h3>
                      <p className="text-foreground/80">
                        Strandbad Stotternheimer See 19<br />
                        99095 Erfurt-Stotternheim
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Bürozeiten</h3>
                      <p className="text-foreground/80">
                        Montag - Freitag: 10:00 - 18:00 Uhr<br />
                        Samstag & Sonntag: Geschlossen
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Folge uns auf Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/burningsea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white hover:scale-110 transition-transform shadow-lg"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://tiktok.com/@burningsea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black rounded-2xl text-white hover:scale-110 transition-transform shadow-lg"
                  >
                    <TikTokIcon size={28} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-card/80 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-border shadow-xl">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                  Schreib uns eine Nachricht
                </h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="text-white" size={36} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-foreground/70">
                      Vielen Dank für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Dein Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="deine@email.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Betreff *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="Tickets">Tickets & Buchung</option>
                        <option value="Camping">Camping & Unterkunft</option>
                        <option value="Anreise">Anreise & Shuttle</option>
                        <option value="Kids Area">Kids Area</option>
                        <option value="Programm">Programm & Line-Up</option>
                        <option value="Partner">Partnerschaft & Sponsoring</option>
                        <option value="Jobs">Jobs & Mitarbeit</option>
                        <option value="Presse">Presse & Medien</option>
                        <option value="Sonstiges">Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                        placeholder="Deine Nachricht an uns..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Wird gesendet...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <Send size={20} />
                          <span>Nachricht senden</span>
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hint */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-foreground">
            Häufig gestellte Fragen?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Viele Antworten findest du bereits in unseren FAQ. Schau dort vorbei, bevor du uns kontaktierst!
          </p>
          <Button
            asChild
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full"
          >
            <a href="/faq">Zu den FAQ →</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KontaktPage;
