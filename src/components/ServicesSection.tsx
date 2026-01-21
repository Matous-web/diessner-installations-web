import { Card } from '@/components/ui/card';
import { Flame, Droplets, Zap, Hammer } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Stavební práce",
      description: "Kompletní stavební práce včetně novostaveb, rekonstrukcí, přístaveb a nástaveb. Zajišťujeme veškeré zednické práce od základů až po střechu.",
      image: "/lovable-uploads/f038752b-0283-423b-96ee-d7239212e406.png"
    },
    {
      icon: <Flame className="w-12 h-12 text-primary" />,
      title: "Zemní práce", 
      description: "Výkopové práce, terénní úpravy, příprava staveniště a základů. Disponujeme moderní technikou pro efektivní realizaci zemních prací.",
      image: "/lovable-uploads/e677a4f2-b0d4-4f02-927d-bad036a8b5e4.png"
    },
    {
      icon: <Droplets className="w-12 h-12 text-primary" />,
      title: "Obklady a dlažby",
      description: "Profesionální pokládka obkladů a dlažeb v interiéru i exteriéru. Precizní práce s důrazem na kvalitu a estetiku.",
      image: "/lovable-uploads/a1571046-dd4b-4fed-ae08-e8a67c14bcaa.png"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Autodoprava",
      description: "Přeprava stavebního materiálu, suti a zeminy. Zajišťujeme spolehlivou dopravu pro vaše stavební projekty v celém regionu.",
      image: "/lovable-uploads/44a16051-e222-48e4-9a3d-b1e2df4f9be8.png"
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
            Poskytujeme komplexní instalatérské služby s důrazem na kvalitu a spolehlivost. 
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