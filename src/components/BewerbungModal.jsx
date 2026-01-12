import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

export const BewerbungModal = ({ open, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const categories = [
    { value: 'food', label: 'Foodstand & Genuss-Partner' },
    { value: 'artist', label: 'DJ / Band - Newcomer Stage' },
    { value: 'job', label: 'Jobs & Kreative Köpfe' },
    { value: 'sponsor', label: 'Werbepartnerschaft' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      toast.error('Bitte fülle alle Pflichtfelder aus!');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Bitte gib eine gültige E-Mail-Adresse ein!');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate sending email (in production, this would call your backend API)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link with form data
      const categoryLabel = categories.find(c => c.value === formData.category)?.label;
      const subject = `Bewerbung: ${categoryLabel}`;
      const body = `
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone || 'Nicht angegeben'}
Kategorie: ${categoryLabel}

Nachricht:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:partner@burningsea.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast.success('Bewerbung wird gesendet! Dein E-Mail-Programm öffnet sich...');
      
      // Reset form and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          message: '',
        });
        onOpenChange(false);
      }, 500);

    } catch (error) {
      toast.error('Etwas ist schief gelaufen. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background/95 to-primary/5 backdrop-blur-xl border-2 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Jetzt bewerben! 🎉
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/70">
            Fülle das Formular aus und werde Teil des Burning Sea Festivals!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-semibold">
              Name / Firmenname *
            </Label>
            <Input
              id="name"
              placeholder="Dein Name oder Firmenname"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="bg-background/50 border-primary/20 focus:border-primary"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-semibold">
              E-Mail-Adresse *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="deine@email.de"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="bg-background/50 border-primary/20 focus:border-primary"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-semibold">
              Telefonnummer (optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+49 123 456 7890"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="bg-background/50 border-primary/20 focus:border-primary"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-foreground font-semibold">
              Bereich / Kategorie *
            </Label>
            <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
              <SelectTrigger className="bg-background/50 border-primary/20">
                <SelectValue placeholder="Wähle einen Bereich..." />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-semibold">
              Deine Nachricht / Bewerbung *
            </Label>
            <Textarea
              id="message"
              placeholder="Erzähle uns mehr über dich und warum du Teil des Burning Sea Festivals werden möchtest..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="bg-background/50 border-primary/20 focus:border-primary min-h-[150px]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-primary via-accent to-primary-glow hover:opacity-90 text-white text-lg py-6 shadow-glow-fire"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Bewerbung absenden
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="sm:w-32 border-2 border-primary/20 hover:bg-primary/10"
              disabled={isSubmitting}
            >
              Abbrechen
            </Button>
          </div>

          <p className="text-xs text-foreground/60 text-center">
            * Pflichtfelder. Deine Daten werden vertraulich behandelt und nur für die Bewerbung verwendet.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BewerbungModal;
