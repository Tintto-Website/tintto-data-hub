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
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
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
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 bg-tintto-blue-dark/30 bg-slate-50">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-tintto-blue/10 border border-tintto-blue/20 text-sm font-medium mb-4 text-tintto-blue">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate</h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Have a challenge we can solve? Contact us to explore how Tintto Data Labs can drive your success with AI and data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-tintto-gray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50" required />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-tintto-gray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50" required />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="organization" className="block text-gray-700 mb-2">Organization</label>
                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 bg-tintto-gray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-tintto-gray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tintto-accent/50" required></textarea>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="bg-tintto-blue hover:bg-tintto-blue-light text-white font-medium py-3 px-6 rounded-lg flex items-center">
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 text-tintto-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">Email</h3>
                      <p className="text-gray-600">contact@tinto.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 text-tintto-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">Phone</h3>
                      <a href="https://zcal.co/jpc/25min" className="text-gray-600 hover:text-gray-800 transition-colors">Book Call</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-tintto-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">Location</h3>
                      <p className="text-gray-600">
                        Berlin, Germany
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              <div className="mt-8 glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Connect Online</h2>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/tintto-ai" className="w-12 h-12 rounded-full bg-tintto-gray border border-gray-300 flex items-center justify-center transition-all hover:bg-tintto-blue/20" aria-label="LinkedIn">
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
    </div>;
};
export default Contact;