import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "suresh08696@gmail.com",
      action: "mailto:suresh08696@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 86963 47958",
      action: "https://wa.me/918696347958"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 86963 47958",
      action: "tel:+918696347958"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, India",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-light max-w-3xl mx-auto">
            Ready to take your business online? Get in touch and let's discuss your project.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="transition-smooth focus:shadow-soft"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full shadow-soft hover:shadow-medium transition-spring"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-light mb-8">
                I'm always excited to work on new projects. Whether you need a complete website 
                or just want to discuss your ideas, feel free to reach out.
              </p>
            </div>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-spring group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{info.title}</div>
                    <div className="text-light text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Quick Contact Buttons */}
            <div className="pt-6 space-y-4">
              <Button 
                asChild 
                className="w-full shadow-soft hover:shadow-medium transition-spring"
                size="lg"
              >
                <a href="https://wa.me/918696347958" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Me
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground"
                size="lg"
              >
                <a href="mailto:suresh08696@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;