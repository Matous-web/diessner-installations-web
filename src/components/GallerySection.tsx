import heroConstruction from '@/assets/hero-construction.jpg';
import serviceConstruction from '@/assets/service-construction.jpg';
import serviceEarthwork from '@/assets/service-earthwork.jpg';
import serviceTiles from '@/assets/service-tiles.jpg';
import serviceTransport from '@/assets/service-transport.jpg';
import aboutConstruction from '@/assets/about-construction.jpg';
import projectRenovation from '@/assets/project-renovation.jpg';
import projectGarage from '@/assets/project-garage.jpg';
import galleryPaving from '@/assets/gallery-paving.jpg';
import galleryPlastering from '@/assets/gallery-plastering.jpg';
import galleryFoundation from '@/assets/gallery-foundation.jpg';
import galleryRoof from '@/assets/gallery-roof.jpg';

const GallerySection = () => {
  const galleryImages = [
    heroConstruction,
    serviceConstruction,
    serviceEarthwork,
    serviceTiles,
    serviceTransport,
    aboutConstruction,
    projectRenovation,
    projectGarage,
    galleryPaving,
    galleryPlastering,
    galleryFoundation,
    galleryRoof
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
