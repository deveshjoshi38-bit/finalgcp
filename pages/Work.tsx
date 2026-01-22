import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { WORK_ITEMS } from '../constants';

const CATEGORIES = ['All', 'Documentaries', 'Commercial Films', 'Events', 'Digital & Social'];

const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredWork = filter === 'All' 
    ? WORK_ITEMS 
    : WORK_ITEMS.filter(item => item.category.includes(filter) || (filter === 'Commercial Films' && item.category.includes('Corporate')));

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-16">
          <SectionHeading title="Selected Works" subtitle="Portfolio" />
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-500 border-neutral-800 hover:border-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredWork.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={work.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden mb-4 bg-neutral-900">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-serif text-white">{work.title}</h3>
                    <span className="text-xs text-gray-500 font-mono">{work.year}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-secondary">{work.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;