import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Spice Garden Restaurant",
      category: "Restaurant Website",
      description: "Modern restaurant website with online menu, table booking system, and customer reviews.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#"
    },
    {
      title: "Fashion Boutique",
      category: "E-commerce Store",
      description: "Elegant online clothing store with product catalog, shopping cart, and secure checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
      technologies: ["WordPress", "WooCommerce", "Stripe"],
      demoUrl: "#"
    },
    {
      title: "Café Delight",
      category: "Café Website",
      description: "Cozy café website featuring menu showcase, location details, and online ordering system.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=center",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "#"
    },
    {
      title: "Urban Trends",
      category: "Fashion Store",
      description: "Trendy fashion store with product filtering, wishlist functionality, and social media integration.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop&crop=center",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      demoUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h2>
          <p className="text-xl text-light max-w-3xl mx-auto">
            Recent projects showcasing modern web solutions for restaurants and retail businesses
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-spring group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-spring"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
                </div>
                
                <p className="text-light mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;