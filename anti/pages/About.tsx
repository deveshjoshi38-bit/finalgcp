import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ParallaxImage from '../components/ParallaxImage';
import JournalismSection from '../components/JournalismSection';
import FeaturedInterview from '../components/FeaturedInterview';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Introduction */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200">
            About The Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
            Girl Child Productions, your one-stop destination for any kind of creative storytelling, is a brainchild of Charnamrit Sachdeva, a renowned and award-winning independent journalist and a filmmaker by both passion and profession.
          </p>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-24 md:w-32 bg-white mb-10"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="text-gray-400 leading-relaxed font-light text-lg space-y-6"
          >
            <motion.p variants={itemVariants}>
              With a dynamic team of experienced and award-winning professionals, GCP specializes in a wide range of fiction and non-fiction films. From documentaries to digital advertisement, TVCs, short films, animation, and graphic formats, GCP has excelled in a diverse spectrum of filmmaking.
            </motion.p>
            <motion.p variants={itemVariants}>
              GCP ensures to bring diversity and vibrancy to each of its projects that promises a stand-out film in a camera-saturated world. From conceptualizing to final cut, GCP gives your vision of a successful film life with creativity and precision.
            </motion.p>
          </motion.div>
          <div className="relative flex items-center justify-center pointer-events-none">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/logo.png"
              alt="Girl Child Productions"
              className="w-48 h-48 md:w-64 md:h-64 object-contain opacity-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* FOUNDER HIGHLIGHT */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading title="The Founder" subtitle="Leadership" alignment="center" className="mb-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative sticky top-32"
            >
              <ParallaxImage
                src="/founder.jpg"
                alt="Charnamrit Sachdeva"
                className="grayscale hover:grayscale-0 transition-all duration-700"
                aspectRatio="aspect-[3/4]"
                imgClassName="object-top"
                parallaxValues={["0%", "10%"]}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-white/20 -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Charnamrit Sachdeva</h3>
              <p className="text-sm uppercase tracking-widest text-secondary mb-8">Award-Winning Journalist | Filmmaker | Producer</p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="space-y-8 text-gray-300 font-light leading-relaxed"
              >
                <motion.p variants={itemVariants}>
                  Charnamrit Sachdeva is an award-winning journalist and filmmaker with an extensive experience of 18 years working for both national and international media. She has served for Indian media organisations such as NewsX, NDTV, and India News for a span of eight years before venturing into international press.
                </motion.p>
                <motion.div variants={itemVariants} className="bg-neutral-900 border-l-2 border-white p-6">
                  <p className="italic text-gray-400 text-lg">
                    Charnamrit Sachdeva bagged the prestigious ‘Indian Women Achievers Awards’ in 2019 in the best Media professional category.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h4 className="text-xl text-white font-serif mt-8 mb-4">A Fearless Journalist</h4>
                  <p>
                    After covering lifestyle, national news and entertainment for about eight years in Indian media, Charnamrit joined Cover Asia Press, a British press agency in November 2015 and covered India extensively for the UK audience. She has her credits published in global giants such as The Daily Mail, The Daily Mirror, Metro, Grazia, Marie Claire, The Sun, The Telegraph and many more.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h4 className="text-xl text-white font-serif mt-8 mb-4">Documentary Filmmaking</h4>
                  <p>
                    As a documentary filmmaker Charnamrit has worked as a Producer, Director, Executive Producer, and Creative Producer for various non-fiction films. Covering diversity spread across the globe, she has also made health documentaries featuring rare disorders around the world. Some of the documentaries have been broadcasted by brands such as Discovery, iTV, BBC, TLC and Channel 5 in the UK.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h4 className="text-xl text-white font-serif mt-8 mb-4">Commercial Filmmaking</h4>
                  <p>
                    She has an incredible vision of putting creative ideas into motion for the screen. From conceptualizing, writing, moodboarding, location search to casting, meticulous planning goes into each stage. She has been associated with brands like Max Health / Niva Bupa Health Insurance, NIIT, Jammu Kashmir Police, Agewell, Hero - Asli Hero Campaign, Sarvodya Hospital, The Big Forkers, and JK Paper.
                  </p>
                  <p className="mt-4">
                    She also worked with one of the most renowned names of Bollywood, Salim-Sulaiman, and was the Executive Producer on their song 'Ajab Shaan' released in July 2022.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED INTERVIEW */}
      <FeaturedInterview />

      {/* JOURNALISM & PRESS */}
      <JournalismSection />

      {/* PHILOSOPHY/QUOTE */}
      <section className="py-32 bg-background flex justify-center items-center">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-neutral-800 mx-auto mb-8 rotate-180" />
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-serif text-white leading-tight"
          >
            "We believe in the power of the frame to change the narrative. Every cut, every grade, every sound design choice is made to serve the truth of the story."
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default About;