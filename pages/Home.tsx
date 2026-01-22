import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ParallaxImage from '../components/ParallaxImage';
import RevealTitle from '../components/RevealTitle';
import { SERVICES_DATA, WHY_US_POINTS, CLIENT_LOGOS, WORK_ITEMS, FEATURED_JOURNALISM } from '../constants';
import { WorkItem } from '../types';

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false); // Default unmuted as requested

  // Video looping logic: Native loop enabled
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays
    video.play().catch(e => console.log("Video play blocked:", e));
  }, []);

  // Audio Autoplay Logic with Fallback for Browser Policies
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isAudioMuted;

    const playAudio = async () => {
      try {
        if (!isAudioMuted) {
          await audio.play();
          console.log("Audio playing successfully");
        }
      } catch (err) {
        console.log("Autoplay blocked by browser policy, waiting for interaction");
        // Add one-time listener for interaction
        const handleInteraction = () => {
          if (!isAudioMuted) {
            audio.play().catch(e => console.log("Audio play failed on interaction:", e));
          }
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('scroll', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
      }
    };

    playAudio();
  }, [isAudioMuted]);

  // Featured Videos: 1 Doc + 1 TVC
  const featuredDoc = WORK_ITEMS.find(item => item.id === '9'); // The Big Forkers (Doc)
  const featuredTVC = WORK_ITEMS.find(item => item.id === '2'); // Niva Bupa (TVC)
  const featuredWorks = [featuredDoc, featuredTVC].filter(Boolean) as WorkItem[];

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleVideoClick = (work: WorkItem) => {
    if (!work.videoUrl) return;
    if (work.videoUrl.includes('drive.google.com')) {
      window.open(work.videoUrl, '_blank');
      return;
    }
    setActiveVideo(work);
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-black"
        >
          <video
            ref={videoRef}
            autoPlay
            loop // Native loop from start to end
            muted // Always muted as we have separate audio control
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105 filter grayscale contrast-125 brightness-75"
          >
            {/* Using the new local optimized showreel video */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Upbeat Background Music */}
          <audio
            ref={audioRef}
            src="/hero-audio.mp3"
            loop
            autoPlay
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </motion.div>

        {/* Audio Toggle Control */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          className="absolute bottom-10 right-10 z-30 p-4 bg-white/5 backdrop-blur-xl rounded-full text-white border border-white/10 hover:bg-white/20 transition-all group flex items-center gap-3"
        >
          {isAudioMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-secondary animate-pulse" />}
          <div className="overflow-hidden w-0 group-hover:w-24 transition-all duration-500 whitespace-nowrap">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              {isAudioMuted ? 'Unmute' : 'Muting...'}
            </span>
          </div>
        </motion.button>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-5xl"
          >
            <div className="mb-6">
              <RevealTitle
                text="Stories That Move."
                className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 leading-[1.1] tracking-tight"
                delay={0}
              />
              <RevealTitle
                text="Films That Matter."
                className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400 leading-[1.1] tracking-tight"
                delay={2}
              />
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                className="h-1 w-24 md:w-32 bg-white mt-8"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Your one-stop destination for creative storytelling. We deliver premium, budget-agnostic solutions—from TVCs to corporate films—positioning your brand with a world-class cinematic edge.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/work" className="px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SNAPSHOT */}
      <section className="py-24 bg-background border-b border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
                alt="Filming on set"
                aspectRatio="aspect-[4/5]"
              />
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(30, 30, 30, 0.8)" }}
                className="p-8 border border-neutral-800 hover:border-neutral-600 bg-background/50 transition-colors duration-300 group cursor-default"
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
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => handleVideoClick(work)}
                className="group relative aspect-video overflow-hidden cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={work.image}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={work.title}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="fill-white text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                  <p className="text-xs uppercase tracking-widest text-gray-300 mb-1">{work.category}</p>
                  <h3 className="text-xl md:text-2xl font-serif text-white">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/work" className="inline-flex items-center text-sm uppercase tracking-widest text-white border-b border-white pb-1">
              Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: FEATURED JOURNALISM */}
      <section className="py-24 bg-surface border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <SectionHeading title="Impactful Journalism" subtitle="Global Stories" alignment="left" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FEATURED_JOURNALISM.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group flex flex-col h-full"
              >
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden aspect-video mb-6"
                >
                  <ParallaxImage
                    src={story.imageUrl}
                    alt={story.title}
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    aspectRatio="aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={16} className="text-white -rotate-45" />
                  </div>
                </a>

                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gray-300 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                  {story.summary}
                </p>

                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
                  >
                    Read Article
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/about" className="inline-flex items-center px-8 py-3 border border-neutral-700 text-gray-300 text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              View All News <ArrowRight size={14} className="ml-2" />
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Let's Create Something <br /> Meaningful.
          </h2>
          <Link to="/contact" className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Start Your Story With Us
          </Link>
        </motion.div>
      </section>

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
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <p>Video not available.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;