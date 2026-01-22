import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Quote } from 'lucide-react';

const FeaturedInterview: React.FC = () => {
    return (
        <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Visual element / Quote icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4 flex justify-center lg:justify-start"
                        >
                            <div className="relative">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary/10 rounded-full flex items-center justify-center">
                                    <Quote className="w-10 h-10 md:w-14 md:h-14 text-secondary fill-secondary/20" />
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-secondary/20 rounded-full scale-125 border-dashed"
                                />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-8 space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-secondary uppercase tracking-[0.3em] text-sm font-medium">Spotlight Interview</h3>
                                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                                    "Be focused. Have a genre you want to follow."
                                </h2>
                                <div className="h-1 w-20 bg-secondary/50" />
                            </div>

                            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
                                A deep dive into Charnamrit Sachdeva's 18-year journey in journalism and filmmaking, published exclusively by Eat My News.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="https://www.eatmy.news/2020/05/be-focused-have-genre-you-want-to.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-none hover:bg-secondary hover:text-white transition-all duration-500 uppercase tracking-widest text-sm font-bold"
                                >
                                    Read Full Interview
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInterview;
