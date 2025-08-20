import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 hero-gradient opacity-10" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Websites for{" "}
              <span className="text-primary">Restaurants</span> &{" "}
              <span className="text-primary">Clothing Stores</span>
            </h1>
          </div>
          
          <div className="animate-fade-up delay-1">
            <p className="text-xl md:text-2xl text-light mb-8 max-w-3xl mx-auto leading-relaxed">
              I build modern, mobile-friendly websites that help businesses attract more customers and grow their online presence.
            </p>
          </div>
          
          <div className="animate-fade-up delay-2">
            <Button 
              size="lg" 
              className="shadow-medium hover:shadow-soft transition-spring text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Work With Me
            </Button>
          </div>
          
          <div className="animate-fade-up delay-3 mt-12">
            <p className="text-muted-foreground">
              Based in Ahmedabad, India • Serving Businesses Worldwide
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;