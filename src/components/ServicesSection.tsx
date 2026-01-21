import { Card } from '@/components/ui/card';
import { Hammer, Shovel, Grid3X3, Truck } from 'lucide-react';
import serviceConstruction from '@/assets/service-construction.jpg';
import serviceEarthwork from '@/assets/service-earthwork.jpg';
import serviceTiles from '@/assets/service-tiles.jpg';
import serviceTransport from '@/assets/service-transport.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Stavební práce",
      description: "Kompletní stavební práce včetně novostaveb, rekonstrukcí, přístaveb a nástaveb. Zajišťujeme veškeré zednické práce od základů až po střechu.",
      image: serviceConstruction
    },
    {
      icon: <Shovel className="w-12 h-12 text-primary" />,
      title: "Zemní práce", 
      description: "Výkopové práce, terénní úpravy, příprava staveniště a základů. Disponujeme moderní technikou pro efektivní realizaci zemních prací.",
      image: serviceEarthwork
    },
    {
      icon: <Grid3X3 className="w-12 h-12 text-primary" />,
      title: "Obklady a dlažby",
      description: "Profesionální pokládka obkladů a dlažeb v interiéru i exteriéru. Precizní práce s důrazem na kvalitu a estetiku.",
      image: serviceTiles
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Autodoprava",
      description: "Přeprava stavebního materiálu, suti a zeminy. Zajišťujeme spolehlivou dopravu pro vaše stavební projekty v celém regionu.",
      image: serviceTransport
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-barlow font-bold text-foreground mb-6">
            Naše služby
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Poskytujeme komplexní stavební služby s důrazem na kvalitu a spolehlivost. 
            Každý projekt řešíme individuálně podle potřeb našich zákazníků.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-card border-border overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-barlow font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
