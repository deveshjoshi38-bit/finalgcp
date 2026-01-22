import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Introduction */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200">
            About The Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
            Girl Child Productions, your one-stop destination for any kind of creative storytelling, is a brainchild of Charnamrit Sachdeva, a renowned and award-winning independent journalist and a filmmaker by both passion and profession.
          </p>
          <div className="h-1 w-24 bg-white mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="text-gray-400 leading-relaxed font-light text-lg space-y-6">
            <p>
              With a dynamic team of experienced and award-winning professionals, GCP specializes in a wide range of fiction and non-fiction films. From documentaries to digital advertisement, TVCs, short films, animation, and graphic formats, GCP has excelled in a diverse spectrum of filmmaking.
            </p>
            <p>
              GCP ensures to bring diversity and vibrancy to each of its projects that promises a stand-out film in a camera-saturated world. From conceptualizing to final cut, GCP gives your vision of a successful film life with creativity and precision.
            </p>
          </div>
          <div className="relative h-96 md:h-full w-full bg-neutral-900 overflow-hidden">
             {/* Abstract studio image */}
             <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" alt="Studio" className="w-full h-full object-cover opacity-60" />
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
              <div className="aspect-[3/4] overflow-hidden bg-neutral-800">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Charnamrit Sachdeva" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
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
              
              <div className="space-y-8 text-gray-300 font-light leading-relaxed">
                <p>
                  Charnamrit Sachdeva is an award-winning journalist and filmmaker with an extensive experience of 18 years working for both national and international media. She has served for Indian media organisations such as NewsX, NDTV, and India News for a span of eight years before venturing into international press.
                </p>
                <div className="bg-neutral-900 border-l-2 border-white p-6">
                   <p className="italic text-gray-400 text-lg">
                     Charnamrit Sachdeva bagged the prestigious ‘Indian Women Achievers Awards’ in 2019 in the best Media professional category.
                   </p>
                </div>
                
                <h4 className="text-xl text-white font-serif mt-8 mb-4">A Fearless Journalist</h4>
                <p>
                  After covering lifestyle, national news and entertainment for about eight years in Indian media, Charnamrit joined Cover Asia Press, a British press agency in November 2015 and covered India extensively for the UK audience. She has her credits published in global giants such as The Daily Mail, The Daily Mirror, Metro, Grazia, Marie Claire, The Sun, The Telegraph and many more. 
                </p>
                <p>
                  Her expertise lies in securing EXCLUSIVE stories in tough environments, accessing unreachable contacts and delivering an unbiased narrative to the audience. She has also covered pivotal events including the rise of religious extremism, riots, and protests in India, and earthquakes in Nepal.
                </p>

                <h4 className="text-xl text-white font-serif mt-8 mb-4">Documentary Filmmaking</h4>
                <p>
                  As a documentary filmmaker Charnamrit has worked as a Producer, Director, Executive Producer, and Creative Producer for various non-fiction films. Covering diversity spread across the globe, she has also made health documentaries featuring rare disorders around the world. Some of the documentaries have been broadcasted by brands such as Discovery, iTV, BBC, TLC and Channel 5 in the UK.
                </p>

                <h4 className="text-xl text-white font-serif mt-8 mb-4">Commercial Filmmaking</h4>
                <p>
                  She has an incredible vision of putting creative ideas into motion for the screen. From conceptualizing, writing, moodboarding, location search to casting, meticulous planning goes into each stage. She has been associated with brands like Max Health / Niva Bupa Health Insurance, NIIT, Jammu Kashmir Police, Agewell, Hero - Asli Hero Campaign, Sarvodya Hospital, The Big Forkers, and JK Paper.
                </p>
                <p>
                  She also worked with one of the most renowned names of Bollywood, Salim-Sulaiman, and was the Executive Producer on their song 'Ajab Shaan' released in July 2022.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* PHILOSOPHY/QUOTE */}
       <section className="py-32 bg-background flex justify-center items-center">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <Quote className="w-12 h-12 text-neutral-800 mx-auto mb-8 rotate-180" />
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
              "We believe in the power of the frame to change the narrative. Every cut, every grade, every sound design choice is made to serve the truth of the story."
            </h2>
         </div>
       </section>
    </div>
  );
};

export default About;