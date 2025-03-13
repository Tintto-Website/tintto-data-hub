
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-tintto-blue-dark/30">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-tintto-accent text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Have a challenge we can solve? Contact us to explore how Tintto Data Labs can drive your success with AI and data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tintto-gray border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tintto-gray border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="organization" className="block text-white/80 mb-2">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tintto-gray border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-tintto-gray border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-tintto-blue hover:bg-tintto-blue-light text-white font-medium py-3 px-6 rounded-lg flex items-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 text-tintto-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <p className="text-white/70">hello@tinttodatalabs.com</p>
                      <p className="text-white/70">support@tinttodatalabs.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 text-tintto-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Phone</h3>
                      <p className="text-white/70">+1 (555) 789-1234</p>
                      <p className="text-white/70">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-tintto-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">Location</h3>
                      <p className="text-white/70">
                        Berlin, Germany
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium mb-4">Office Hours</h3>
                  <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  <p className="text-white/70">Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              <div className="mt-8 glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-tintto-gray border border-white/10 flex items-center justify-center transition-all hover:bg-tintto-blue/20"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-tintto-gray border border-white/10 flex items-center justify-center transition-all hover:bg-tintto-blue/20"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
