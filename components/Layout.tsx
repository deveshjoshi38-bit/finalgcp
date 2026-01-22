import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatbot from './AIChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only once

    // Scroll to top on route change
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
      <div className="min-h-screen bg-background text-primary font-sans selection:bg-white selection:text-black flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    );
  };

  export default Layout;