import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

// TikTok SVG Icon Component
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo className="h-12 w-auto" variant="black" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Das erste Familien- und Jugendfestival mit echtem Festivalfeeling am Stotternheimer See.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/burningsea"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com/@burningsea"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-black hover:text-white transition-all duration-300"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kids" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kids Area
                </Link>
              </li>
              <li>
                <Link to="/adult" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Adult Area
                </Link>
              </li>
              <li>
                <Link to="/tickets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tickets
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Partner werden
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/festival-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Festival Guide
                </Link>
              </li>
              <li>
                <Link to="/camping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Camping
                </Link>
              </li>
              <li>
                <Link to="/merchandise" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link to="/awareness" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Awareness-Regeln
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Strandbad Stotternheimer See 19<br />99095 Erfurt-Stotternheim</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@burningsea.de" className="hover:text-primary transition-colors">
                  info@burningsea.de
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+491234567890" className="hover:text-primary transition-colors">
                  +49 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2026 Burning Sea Festival. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;