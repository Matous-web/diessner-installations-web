import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Globe, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b8eb690e-333c-47bb-9294-9436b5c03449',
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'Neuvedeno',
          message: formData.message.trim(),
          subject: 'Nová zpráva z webu Filpastav',
          from_name: 'Filpastav Kontaktní Formulář',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Zpráva odeslána",
          description: "Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: "Chyba při odesílání",
          description: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Chyba připojení",
        description: "Nepodařilo se připojit k serveru. Zkontrolujte připojení k internetu.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-barlow font-bold text-foreground mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Máte zájem o naše služby nebo potřebujete konzultaci? 
            Neváhejte nás kontaktovat. Rádi vám pomůžeme s vaším projektem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-card border-border bg-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-barlow font-bold text-lg">F</span>
                </div>
                <h3 className="text-xl font-barlow font-semibold text-foreground">
                  Filpastav s.r.o.
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresa kanceláře:</p>
                    <p className="text-muted-foreground">Okrouhlo 229<br />254 01</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefon:</p>
                    <a href="tel:+420723385545" className="text-primary hover:text-primary/80">
                      +420 723 385 545
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email:</p>
                    <a href="mailto:petr.hrubant@seznam.cz" className="text-primary hover:text-primary/80">
                      petr.hrubant@seznam.cz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Web:</p>
                    <a href="https://filpastav.cz" className="text-primary hover:text-primary/80">
                      www.filpastav.cz
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-foreground mb-3">Sledujte nás:</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                    <Facebook className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                    <Instagram className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Company Details */}
            <Card className="p-6 shadow-card border-border bg-card">
              <h3 className="text-lg font-barlow font-semibold text-foreground mb-4">
                Firemní údaje
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IČO:</span>
                  <span className="text-foreground">19620586</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">DIČ:</span>
                  <span className="text-foreground">CZ19620586</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-muted-foreground font-medium mb-2">Fakturační adresa:</p>
                  <p className="text-foreground text-sm">
                    Filpastav s.r.o.<br />
                    Okrouhlo 229<br />
                    254 01
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="space-y-8">
            <Card className="p-6 shadow-card border-border bg-card">
              <h3 className="text-xl font-barlow font-semibold text-foreground mb-6">
                Kontaktní formulář
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Jméno a příjmení *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Zpráva *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={5}
                    placeholder="Popište nám váš projekt nebo požadavek..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:bg-installer-blue-dark shadow-button disabled:opacity-50"
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
                </Button>
              </form>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden shadow-card border-border">
              <div className="h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5!2d14.4167!3d49.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sOkrouhlo%20229%2C%20254%2001!5e0!3m2!1scs!2scz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Filpastav s.r.o."
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;