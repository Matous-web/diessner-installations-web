import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import heroConstruction from '@/assets/hero-construction.jpg';
import serviceConstruction from '@/assets/service-construction.jpg';
import projectRenovation from '@/assets/project-renovation.jpg';
import projectGarage from '@/assets/project-garage.jpg';
import aboutConstruction from '@/assets/about-construction.jpg';
import galleryPaving from '@/assets/gallery-paving.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Novostavba rodinného domu",
      description: "Kompletní realizace novostavby rodinného domu na klíč. Projekt zahrnoval zemní práce, základy, hrubou stavbu, střechu a veškeré dokončovací práce.",
      images: [
        heroConstruction,
        serviceConstruction,
        aboutConstruction
      ]
    },
    {
      title: "Rekonstrukce bytového domu",
      description: "Celková rekonstrukce bytového domu včetně zateplení fasády, výměny oken a kompletní rekonstrukce společných prostor. Projekt realizován v krátkém termínu.",
      images: [
        projectRenovation,
        heroConstruction,
        serviceConstruction
      ]
    },
    {
      title: "Přístavba a modernizace",
      description: "Přístavba garáže a modernizace stávajícího objektu. Součástí projektu byly i terénní úpravy a pokládka zámkové dlažby na příjezdové cestě.",
      images: [
        projectGarage,
        galleryPaving,
        aboutConstruction
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-barlow font-bold text-foreground mb-6">
            Naše projekty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Podívejte se na některé z našich realizovaných projektů. 
            Každý projekt je pro nás výzvou a snažíme se vždy najít nejlepší řešení.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 bg-card border-border">
              <div className="relative h-64">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {project.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex}>
                        <div className="relative h-64">
                          <img 
                            src={image} 
                            alt={`${project.title} - fotka ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-barlow font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
