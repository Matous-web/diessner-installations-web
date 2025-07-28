import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e677a4f2-b0d4-4f02-927d-bad036a8b5e4.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-barlow font-bold mb-6 tracking-tight">
            Instalace Diessner
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Profesionální instalatérské služby pro váš domov i firmu. 
            Kvalita, spolehlivost a dlouholeté zkušenosti.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-button transition-all duration-300 transform hover:scale-105"
          >
            Domluvit schůzku
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;