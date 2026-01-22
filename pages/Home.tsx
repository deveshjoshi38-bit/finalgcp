import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES_DATA, WHY_US_POINTS, CLIENT_LOGOS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video Simulator */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          >
             {/* Using a high quality stock abstract video link that fits the vibe */}
            <source src="https://cdn.coverr.co/videos/coverr-film-set-production-5250/1080p.mp4" type="video/mp4" />
             {/* Fallback image */}
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Hero Background" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200">Stories That Move.</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400">Films That Matter.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
              Your one-stop destination for creative storytelling. We deliver premium, budget-agnostic solutions—from TVCs to corporate films—positioning your brand with a world-class cinematic edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work" className="px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SNAPSHOT */}
      <section className="py-24 bg-background border-b border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading title="The Studio" subtitle="Who We Are" />
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                Girl Child Productions (GCP) is the brainchild of award-winning journalist and filmmaker <strong className="text-white font-medium">Charnamrit Sachdeva</strong>. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                With a dynamic team of experienced professionals, we specialize in a wide range of fiction and non-fiction films. From documentaries to digital advertisements, TVCs, short films, and animation, GCP ensures diversity and vibrancy in every project. We are your one-stop solution where budget meets premium quality.
              </p>
              <Link to="/about" className="text-white border-b border-white pb-1 uppercase text-xs tracking-widest hover:text-gray-300 hover:border-gray-300 transition-colors">
                Read Full Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
                alt="Filming on set"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <SectionHeading title="Our Expertise" subtitle="One Stop Solution" alignment="center" className="mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-neutral-800 hover:border-neutral-600 bg-background/50 hover:bg-neutral-900 transition-all duration-300 group"
              >
                <div className="text-gray-500 mb-6 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">{service.category}</h3>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start">
                       <span className="mr-2 opacity-50">•</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <Link to="/services" className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors flex items-center">
                    Learn More <ArrowRight size={12} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED WORK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title="Featured Work" subtitle="Portfolio" className="mb-0" />
            <Link to="/work" className="hidden md:flex items-center text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="group relative aspect-video overflow-hidden cursor-pointer"
            >
              {/* Distinct cinematic image for Voices of the Valley */}
              <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" alt="Work 1" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="fill-white text-white ml-1" />
                  </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                <p className="text-xs uppercase tracking-widest text-gray-300 mb-1">Documentary</p>
                <h3 className="text-2xl font-serif text-white">Voices of the Valley</h3>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="group relative aspect-video overflow-hidden cursor-pointer"
            >
               {/* Distinct cinematic image for Urban Rhythm - different from Hero fallback */}
              <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" alt="Work 2" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="fill-white text-white ml-1" />
                  </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                <p className="text-xs uppercase tracking-widest text-gray-300 mb-1">Brand Film</p>
                <h3 className="text-2xl font-serif text-white">Urban Rhythm</h3>
              </div>
            </motion.div>
          </div>
           <div className="mt-8 text-center md:hidden">
            <Link to="/work" className="inline-flex items-center text-sm uppercase tracking-widest text-white border-b border-white pb-1">
              Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY US */}
      <section className="py-24 bg-surface text-white">
        <div className="container mx-auto px-6">
           <SectionHeading title="Why Girl Child Productions" subtitle="The Difference" alignment="left" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
              {WHY_US_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="text-xl font-serif mb-3 text-white">{point.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 10: CLIENTS */}
      <section className="py-20 bg-background overflow-hidden border-t border-neutral-900">
        <div className="container mx-auto px-6 mb-12 text-center">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gray-600">Trusted By</span>
        </div>
        
        {/* Infinite Scroll Marquee Effect */}
        <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap space-x-16 px-4"
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                <span key={`${client}-${idx}`} className="text-2xl md:text-3xl font-display text-neutral-600 uppercase tracking-widest shrink-0 hover:text-white transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-background flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-transparent opacity-50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Let's Create Something <br/> Meaningful.
          </h2>
          <Link to="/contact" className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Start Your Story With Us
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;