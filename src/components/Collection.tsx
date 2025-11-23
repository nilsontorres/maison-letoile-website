import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";

const Collection = () => {
  const dresses = [
    {
      id: 1,
      name: "Noir Élégance",
      description: "Vestido de coquetel em crepe de seda",
      price: "R$ 32.500",
      image: dress1,
    },
    {
      id: 2,
      name: "Blanc Lumière",
      description: "Vestido de gala em cetim duchesse",
      price: "R$ 45.800",
      image: dress2,
    },
    {
      id: 3,
      name: "Rayure Moderne",
      description: "Vestido estruturado em tafetá listrado",
      price: "R$ 38.200",
      image: dress3,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-display font-light mb-4">
            Coleção Exclusive
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Cada peça é uma obra de arte, criada com técnicas tradicionais 
            francesas e acabamento impecável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {dresses.map((dress, index) => (
            <div 
              key={dress.id} 
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-background">
                <img 
                  src={dress.image} 
                  alt={dress.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-medium">
                  {dress.name}
                </h3>
                <p className="text-muted-foreground font-light">
                  {dress.description}
                </p>
                <p className="text-xl font-display pt-2">
                  {dress.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
