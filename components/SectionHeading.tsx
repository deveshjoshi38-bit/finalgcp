import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'left', className = '' }) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block text-xs md:text-sm font-sans uppercase tracking-[0.25em] text-gray-500 mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-serif text-white font-medium leading-tight"
      >
        {title}
      </motion.h2>
      <div className={`mt-4 h-1 w-16 bg-white ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;