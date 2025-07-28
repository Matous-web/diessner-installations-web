const GallerySection = () => {
  const galleryImages = [
    "/lovable-uploads/e677a4f2-b0d4-4f02-927d-bad036a8b5e4.png",
    "/lovable-uploads/a1571046-dd4b-4fed-ae08-e8a67c14bcaa.png", 
    "/lovable-uploads/046ec4d0-0d58-46d4-b58c-a4a1b1931159.png",
    "/lovable-uploads/44a16051-e222-48e4-9a3d-b1e2df4f9be8.png",
    "/lovable-uploads/1b4a0d72-d3f8-4066-95e5-a70dad06e89a.png",
    "/lovable-uploads/f038752b-0283-423b-96ee-d7239212e406.png"
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-barlow font-bold text-foreground mb-6">
            Fotogalerie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Galerie našich realizovaných prací a projektů. 
            Každá fotografie reprezentuje kvalitu a profesionalitu naší práce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`Projekt ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-foreground font-medium">Zobrazit detail</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;