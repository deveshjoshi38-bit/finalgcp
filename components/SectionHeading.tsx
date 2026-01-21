import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  isPrimary?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'left',
  className = '',
  isPrimary = false
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="block text-xs md:text-sm font-sans uppercase tracking-[0.25em] text-gray-500 mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`${isPrimary
              ? 'text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200'
              : 'text-3xl md:text-5xl text-white'
            } font-serif font-medium leading-tight`}
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0, originX: alignment === 'center' ? 0.5 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        className={`mt-4 h-1 ${isPrimary ? 'w-24 md:w-32' : 'w-16'} bg-white ${alignment === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionHeading;