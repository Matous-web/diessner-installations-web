import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-installer-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-barlow font-bold mb-4">Filpastav s.r.o.</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Profesionální stavební práce a autodoprava. 
              Kvalita, spolehlivost a individuální přístup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-barlow font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">O nás</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Služby</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-white transition-colors">Projekty</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-barlow font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <a href="tel:+420723385545" className="text-white/80 hover:text-white transition-colors">
                  +420 723 385 545
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:petr.hrubant@seznam.cz" className="text-white/80 hover:text-white transition-colors">
                  petr.hrubant@seznam.cz
                </a>
              </div>
              <div className="text-white/80 text-sm mt-4">
                <p>Okrouhlo 229</p>
                <p>254 01</p>
                <p className="mt-2">IČO: 19620586</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Filpastav s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;