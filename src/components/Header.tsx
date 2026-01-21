import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-barlow font-bold text-primary">
              Filpastav s.r.o.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Domů
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              O nás
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Služby
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projekty
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontakt
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:bg-installer-blue-dark shadow-button transition-all duration-300"
            >
              Domluvit schůzku
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="flex flex-col space-y-2 p-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Domů
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                O nás
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Služby
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Projekty
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Kontakt
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 bg-gradient-primary"
              >
                Domluvit schůzku
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;