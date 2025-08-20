const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Hi, I'm Suresh Kumar
              </h3>
              
              <p className="text-lg text-light leading-relaxed">
                I'm a web developer from Ahmedabad, India, specializing in creating beautiful, 
                functional websites for restaurants, cafes, and clothing stores. With years of 
                experience in the industry, I understand what makes businesses successful online.
              </p>
              
              <p className="text-lg text-light leading-relaxed">
                My focus is on building websites that not only look great but also drive real 
                results – more customers, more sales, and better online presence for your business.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-card p-4 rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h4 className="text-xl font-semibold mb-4 text-primary">My Specializations</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Restaurant & Cafe Websites</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Fashion & Clothing Store Sites</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Mobile-First Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>E-commerce Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>SEO Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;