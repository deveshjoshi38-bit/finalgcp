import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatbot from './AIChatbot';
import AudioControl from './AudioControl';

interface LayoutProps {
  children: React.ReactNode;
}


const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // No scroll reset here - handled by SmoothScroll with Lenis
  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-white selection:text-black flex flex-col relative">
      <Navbar />
      <AudioControl />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Layout;