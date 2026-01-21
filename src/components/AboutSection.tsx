const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-barlow font-bold text-foreground mb-6">
              O nás
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Filpastav s.r.o. je spolehlivá stavební firma poskytující komplexní 
              služby v oblasti stavebnictví a autodopravy. Specializujeme se na 
              veškeré stavební práce od základů až po finální úpravy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Naším cílem je poskytovat kvalitní služby s důrazem na spolehlivost, 
              profesionalitu a spokojenost našich zákazníků. Díky našim zkušenostem 
              a modernímu vybavení dokážeme realizovat projekty od rodinných domů 
              až po větší komerční objekty včetně zajištění dopravy materiálů.
            </p>
            
            {/* Přednosti */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-barlow font-semibold text-foreground">Dlouholeté zkušenosti</h3>
                    <p className="text-muted-foreground">Více než 15 let na trhu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-barlow font-semibold text-foreground">Kvalitní materiály</h3>
                    <p className="text-muted-foreground">Používáme pouze ověřené značky</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-barlow font-semibold text-foreground">Rychlé řešení</h3>
                    <p className="text-muted-foreground">Dodržujeme termíny</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-barlow font-semibold text-foreground">Záruka kvality</h3>
                    <p className="text-muted-foreground">Na všechny naše práce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src="/lovable-uploads/046ec4d0-0d58-46d4-b58c-a4a1b1931159.png" 
                alt="Stavební práce" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="text-center">
                <div className="text-3xl font-barlow font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Dokončených projektů</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;