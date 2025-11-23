import logo from "@/assets/maison-logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src={logo} 
            alt="Maison L'étoile" 
            className="h-12 w-auto opacity-80"
          />
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Coleção
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Sobre
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Ateliê
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light">
              Contato
            </a>
          </nav>
          
          <div className="text-center text-sm text-muted-foreground font-light">
            <p>© 2024 Maison L'étoile. Tous droits réservés.</p>
            <p className="mt-2">Haute Couture Française</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
