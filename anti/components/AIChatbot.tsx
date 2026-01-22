import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { KNOWLEDGE_BASE, CHAT_PERSONA } from '../constants/assistantData';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

// Rule-based fallback when Gemini API is not available
const generateFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();

    // Developer credits - only when asked
    if (q.includes('who') && (q.includes('built') || q.includes('made') || q.includes('develop') || q.includes('create') || q.includes('design'))) {
        if (q.includes('site') || q.includes('website') || q.includes('logo') || q.includes('this')) {
            return `This stunning website and logo were designed and developed by **Devesh Joshi**. You can reach him at 9198683854 for similar projects!`;
        }
    }

    // Founder information
    if (q.includes('who') && (q.includes('founder') || q.includes('charnamrit') || q.includes('behind'))) {
        return `${KNOWLEDGE_BASE.studio.founder} is our visionary founder—an award-winning journalist and filmmaker with 18 years of experience. She bagged the prestigious 'Indian Women Achievers Award' in 2019! Would you like to learn more about her journey?`;
    }

    // Services
    if (q.includes('service') || q.includes('what do you do') || q.includes('provide') || q.includes('offer')) {
        return `We deliver **Budget-Agnostic Excellence** across:\n• Documentaries & Digital Films\n• TVCs & Brand Films\n• Animation (2D/3D) & Motion Graphics\n• Web Series & Short Films\n• Artist Management & PR\n\nFrom concept to final cut, we make your vision cinematic. What kind of project are you planning?`;
    }

    // Clients
    if (q.includes('client') || q.includes('work with') || q.includes('partner')) {
        return `We've partnered with global giants like **Discovery, BBC, ITV, TLC, NDTV, NIIT, Niva Bupa, Salim-Sulaiman**, and many more. Our standards are world-class. Ready to join our roster of satisfied clients?`;
    }

    // Contact
    if (q.includes('contact') || q.includes('hire') || q.includes('start') || q.includes('email') || q.includes('phone') || q.includes('call')) {
        return `Ready to create something extraordinary? Reach us at:\n📞 +91 9899982936\n✉️ girlchildproductions@gmail.com\n\nOur founder Charnamrit is always excited to discuss new projects!`;
    }

    // Location
    if (q.includes('where') || q.includes('location') || q.includes('based')) {
        return `We're based in **New Delhi, India**, but we create content for the entire world! Our work has been broadcast on Discovery, BBC, ITV, and Channel 5 in the UK.`;
    }

    // Pricing
    if (q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('rate')) {
        return `We believe in **Budget-Agnostic Excellence**—premium quality regardless of budget. Every project is unique. Let's discuss your vision and we'll craft a solution that works. Contact us at girlchildproductions@gmail.com!`;
    }

    // Default persuasive response
    return `Great question! At Girl Child Productions, we bring **18 years of cinematic excellence** to every frame. Our founder Charnamrit Sachdeva has worked with BBC, Discovery, and global brands.\n\nHow can we help elevate your project? Feel free to ask about our services, clients, or how to get started!`;
};

const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I'm your GCP Assistant. Looking for award-winning storytelling or production support? How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        const currentInput = input;
        setInput('');
        setIsTyping(true);

        // Use Gemini if API key is available, otherwise use fallback
        if (genAI) {
            try {
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                const systemPrompt = `
                    You are the "${CHAT_PERSONA.name}", a ${CHAT_PERSONA.tone} AI assistant for ${KNOWLEDGE_BASE.studio.name}.
                    Goal: ${CHAT_PERSONA.goal}

                    COMPANY KNOWLEDGE:
                    - Tagline: ${KNOWLEDGE_BASE.studio.tagline}
                    - Vision: ${KNOWLEDGE_BASE.studio.vision}
                    - Founder: ${KNOWLEDGE_BASE.studio.founder} (${KNOWLEDGE_BASE.studio.founderBio})
                    - Philosophy: ${KNOWLEDGE_BASE.philosophy}
                    - Services: ${JSON.stringify(KNOWLEDGE_BASE.detailedServices)}
                    - Clients: ${KNOWLEDGE_BASE.clients.join(', ')}
                    - Key Selling Points: ${KNOWLEDGE_BASE.sellingPoints.join(' ')}
                    
                    DEVELOPER CREDITS (IMPORTANT):
                    - Designer, Developer, & Logo Maker: ${KNOWLEDGE_BASE.studio.developer}
                    - Developer Contact: ${KNOWLEDGE_BASE.studio.developerContact}
                    - Credit Info: ${KNOWLEDGE_BASE.studio.credits}
                    - STRICT RULE: ONLY reveal developer/designer info if the user specifically asks "who built this site", "who made the logo", "who developed this", or similar relevant questions about the website's creation.

                    SALESMAN GUIDELINES:
                    1. Be persuasive and professional. High-tier cinematic tone.
                    2. If they ask about services, highlight "Budget-Agnostic Excellence".
                    3. Always try to guide them towards contacting GCP for a project.
                    4. Keep responses concise but impactful.
                `;

                const result = await model.generateContent([systemPrompt, ...messages.map(m => `${m.sender}: ${m.text}`), `user: ${currentInput}`]);
                const responseText = result.response.text();

                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: responseText,
                    sender: 'bot',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botMsg]);
            } catch (error) {
                console.error("Gemini Error:", error);
                // Fall back to rule-based on error
                setTimeout(() => {
                    const botMsg: Message = {
                        id: (Date.now() + 1).toString(),
                        text: generateFallbackResponse(currentInput),
                        sender: 'bot',
                        timestamp: new Date(),
                    };
                    setMessages((prev) => [...prev, botMsg]);
                }, 800);
            }
        } else {
            // No API key - use rule-based fallback
            setTimeout(() => {
                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: generateFallbackResponse(currentInput),
                    sender: 'bot',
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botMsg]);
            }, 800);
        }
        setIsTyping(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-neutral-800 to-neutral-900 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                                    <Bot className="text-secondary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif text-sm font-bold">GCP Assistant</h3>
                                    <p className="text-[10px] text-green-400 uppercase tracking-widest flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-white text-black rounded-tr-none'
                                        : 'bg-neutral-800 text-gray-200 rounded-tl-none border border-white/5'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-neutral-800 text-gray-400 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/5 bg-neutral-900/50">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask me anything about GCP..."
                                    className="w-full bg-neutral-800 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm text-white focus:outline-none focus:border-secondary transition-all placeholder-gray-500"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-600 text-center mt-3 uppercase tracking-[0.2em]">
                                <a href="tel:+919198683854" className="hover:text-white transition-colors duration-300">&nbsp;Created&nbsp; By&nbsp; Devesh&nbsp; Joshi</a>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center border border-black/5 relative group"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageSquare size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulsing Ring */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping group-hover:hidden" />
                )}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
