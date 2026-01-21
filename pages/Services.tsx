import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200">Our Services</h1>
          <p className="text-gray-400 font-light text-lg mb-8">Comprehensive production solutions tailored for brands, agencies, and broadcasters worldwide.</p>
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-24 md:w-32 bg-white mx-auto"
          />
        </motion.div>

        <div className="space-y-32">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-12 border-t border-neutral-800 pt-12">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <span className="text-neutral-700 font-display text-6xl md:text-8xl absolute -top-10 -left-6 -z-10 opacity-20 group-hover:opacity-40 transition-opacity">
                      0{index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">{service.category}</h2>
                    <div className="w-12 h-1 bg-white mb-6 group-hover:w-24 transition-all duration-500" />
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {service.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center space-x-4 border-b border-neutral-900 pb-4 hover:pl-4 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                      <span className="text-gray-300 text-lg font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;