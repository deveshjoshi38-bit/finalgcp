import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  imgClassName?: string;
  parallaxValues?: string[];
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  imgClassName = '',
  parallaxValues = ["-15%", "15%"]
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring physics for the parallax movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], parallaxValues), springConfig);

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      <motion.img
        style={{ y, scale: 1.2 }} // Scale up to ensure coverage during parallax movement
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
};

export default ParallaxImage;