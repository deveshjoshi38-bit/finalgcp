import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { WORK_ITEMS } from '../data';
import { WorkItem } from '../types';

const CATEGORIES = ['All', 'Corporate Film', 'TVC', 'Music Video', 'Documentary', 'AI Video Production', 'Web Series', 'Journalism & Press'];

const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);

  const filteredWork = filter === 'All'
    ? WORK_ITEMS
    : WORK_ITEMS.filter(item => item.category === filter);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getDriveId = (url: string) => {
    const match = url.match(/file\/d\/([^\/\?]+)/);
    return match ? match[1] : null;
  };

  const handleVideoClick = (work: WorkItem) => {
    if (!work.videoUrl) return;
    // For journalism items, open link in new tab
    if (work.category === 'Journalism & Press') {
      window.open(work.videoUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveVideo(work);
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-16">
          <SectionHeading title="Selected Works" subtitle="Portfolio" isPrimary />

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${filter === cat
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
          <AnimatePresence mode='popLayout'>
            {filteredWork.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={work.id}
                className="group cursor-pointer"
                onClick={() => handleVideoClick(work)}
              >
                <div className="relative aspect-video overflow-hidden mb-4 bg-neutral-900">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-serif text-white group-hover:text-gray-300 transition-colors">{work.title}</h3>
                    <span className="text-xs text-gray-500 font-mono">{work.year}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-secondary group-hover:text-white transition-colors">{work.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              {activeVideo.videoUrl && getYouTubeId(activeVideo.videoUrl) ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.videoUrl)}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : activeVideo.videoUrl && getDriveId(activeVideo.videoUrl) ? (
                <iframe
                  src={`https://drive.google.com/file/d/${getDriveId(activeVideo.videoUrl)}/preview`}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allowFullScreen
                  title={activeVideo.title}
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <p>Video not available.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;