import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-display font-light">
            Agende Sua
            <span className="block font-medium mt-2">Consultoria Privada</span>
          </h2>
          
          <p className="text-lg font-light leading-relaxed opacity-90">
            Experimente o serviço personalizado da Maison L'étoile. 
            Nossa equipe está pronta para criar a peça perfeita para você, 
            com atendimento exclusivo e dedicado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Iniciar Consultoria
            </Button>
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Falar com Especialista
            </Button>
          </div>
          
          <div className="pt-12 opacity-90">
            <p className="font-light">Atendimento personalizado mediante agendamento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
