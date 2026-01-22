import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Documentary',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry: ${formData.projectType} - ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;
    
    // Construct mailto link
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
                 <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="block text-xs md:text-sm font-sans uppercase tracking-[0.25em] text-gray-500 mb-3"
                >
                  Contact Us
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200"
                >
                  Get In Touch
                </motion.h2>
                <div className="h-1 w-16 bg-white" />
            </div>

            <p className="text-xl text-gray-300 font-light mb-12 max-w-md leading-relaxed">
              Whether you have a story to tell, a brand to build, or an event to capture, let's create something meaningful together.
            </p>

            <div className="space-y-10 mb-12">
              {/* Phone */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-neutral-800">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Call Us</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl text-white font-serif hover:text-gray-300 transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-neutral-800">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl text-white font-serif hover:text-gray-300 transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>

               {/* Location */}
               <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-neutral-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Visit Us</h4>
                  <p className="text-xl text-white font-serif">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-8">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Connect With Us</h4>
              <div className="flex space-x-4">
                 <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-gray-400 hover:bg-white hover:text-black transition-all rounded-full border border-neutral-800"><Instagram size={18} /></a>
                 <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-gray-400 hover:bg-white hover:text-black transition-all rounded-full border border-neutral-800"><Facebook size={18} /></a>
                 <a href={CONTACT_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-gray-400 hover:bg-white hover:text-black transition-all rounded-full border border-neutral-800"><Twitter size={18} /></a>
                 <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-gray-400 hover:bg-white hover:text-black transition-all rounded-full border border-neutral-800"><Linkedin size={18} /></a>
                 <a href={CONTACT_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-neutral-900 text-gray-400 hover:bg-white hover:text-black transition-all rounded-full border border-neutral-800"><Youtube size={18} /></a>
              </div>
            </div>
          </motion.div>

          {/* Form Side - Inquiry Section */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-surface p-8 md:p-12 border border-neutral-800 h-fit sticky top-24"
          >
            <h3 className="text-2xl font-serif text-white mb-2">Send an Inquiry</h3>
            <p className="text-sm text-gray-500 mb-8 font-light">
              Fill out the details below and we will get back to you shortly.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Name</label>
                  <input 
                    required 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    type="text" 
                    className="w-full bg-background border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-700" 
                    placeholder="Your Name" 
                  />
                </div>
                 <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Phone</label>
                  <input 
                    required 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    type="tel" 
                    className="w-full bg-background border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-700" 
                    placeholder="+91..." 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Email</label>
                <input 
                  required 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  type="email" 
                  className="w-full bg-background border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder-gray-700" 
                  placeholder="your@email.com" 
                />
              </div>

               <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Project Type</label>
                <div className="relative">
                  <select 
                    name="projectType" 
                    value={formData.projectType} 
                    onChange={handleChange} 
                    className="w-full bg-background border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option className="bg-neutral-900">Documentary</option>
                    <option className="bg-neutral-900">Commercial / TVC</option>
                    <option className="bg-neutral-900">Brand Film</option>
                    <option className="bg-neutral-900">Event Coverage</option>
                    <option className="bg-neutral-900">Digital Campaign</option>
                    <option className="bg-neutral-900">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Message</label>
                <textarea 
                  required 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  className="w-full bg-background border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder-gray-700" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center mt-4">
                Send Message <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;