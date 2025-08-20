import { Monitor, RefreshCw, ShoppingCart, Wrench } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Development",
      description: "Custom websites built from scratch with modern technologies, optimized for speed and performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: RefreshCw,
      title: "Website Redesign",
      description: "Transform your existing website with a fresh, modern design that converts visitors into customers.",
      features: ["UI/UX Improvement", "Mobile Optimization", "Performance Boost", "Brand Alignment"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Setup",
      description: "Complete online store solutions with payment integration, inventory management, and order tracking.",
      features: ["Payment Gateway", "Product Management", "Order Tracking", "Customer Portal"]
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates, security patches, and content updates.",
      features: ["Regular Updates", "Security Monitoring", "Backup & Recovery", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-light max-w-3xl mx-auto">
            Everything you need to establish a strong online presence for your business
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-spring group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-light mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;