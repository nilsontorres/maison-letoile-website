import { Button } from "@/components/ui/button";
import logo from "@/assets/maison-logo.svg";
import heroDress from "@/assets/hero-dress-landscape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Maison L'étoile" 
            className="h-6 lg:h-8 w-auto mx-auto"
          />
          
          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-display font-light tracking-tight">
            Haute Couture
            <span className="block mt-2 font-medium">Française</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Elegância atemporal e sofisticação parisiense em cada detalhe. 
            Peças exclusivas sob medida para mulheres extraordinárias.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300"
            >
              Iniciar Consultoria
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Ver Coleção
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative mt-12 animate-fade-in-delay">
            <div className="aspect-video relative overflow-hidden rounded-sm">
              <img 
                src={heroDress} 
                alt="Vestido de alta costura Maison L'étoile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
