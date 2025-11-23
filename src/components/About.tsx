const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-display font-light">
                L'Art de la
                <span className="block font-medium">Haute Couture</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Maison L'étoile nasceu com o propósito de resgatar a tradição 
                  da alta costura francesa e traduzi-la para a mulher contemporânea, 
                  unindo artesanato tradicional com atendimento moderno e personalizado.
                </p>
                
                <p>
                  Cada vestido é meticulosamente elaborado por nossos artesãos, 
                  utilizando apenas tecidos nobres e técnicas centenárias. 
                  Do primeiro esboço ao acabamento final, cada etapa é conduzida 
                  com atenção excepcional aos detalhes.
                </p>
                
                <p>
                  Nossa filosofia é simples: criar peças atemporais que transcendem 
                  tendências, celebrando a individualidade e elegância de cada cliente.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-delay">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-display mb-2">Sob Medida</h3>
                <p className="text-muted-foreground font-light">
                  Cada peça é criada exclusivamente para você, 
                  respeitando suas medidas e preferências
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-display mb-2">Artesanal</h3>
                <p className="text-muted-foreground font-light">
                  Mais de 200 horas de trabalho manual em cada vestido
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-display mb-2">Exclusividade</h3>
                <p className="text-muted-foreground font-light">
                  Cada modelo é produzido em edição limitada com peças numeradas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
