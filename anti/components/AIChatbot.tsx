import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { KNOWLEDGE_BASE } from '../constants/assistantData';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

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

    const generateResponse = (query: string): string => {
        const q = query.toLowerCase();

        // Persuasive Response Logic
        if (q.includes('who') && (q.includes('founder') || q.includes('charnamrit'))) {
            return `${KNOWLEDGE_BASE.studio.founder} is our founder—an award-winning journalist and filmmaker with 18 years of experience. She even won the 'Indian Women Achievers Award' in 2019! Would you like to see her portfolio?`;
        }

        if (q.includes('service') || q.includes('what do you do') || q.includes('provide')) {
            return `We are an end-to-end production studio. We specialize in ${KNOWLEDGE_BASE.services.slice(0, 3).join(', ')}, and more. We handle everything from concept to final cut. What kind of project are you planning?`;
        }

        if (q.includes('client') || q.includes('work with')) {
            return `We've worked with global giants like ${KNOWLEDGE_BASE.clients.slice(0, 5).join(', ')}, and many more. Our standards are world-class. Are you looking for production support for a brand or a documentary?`;
        }

        if (q.includes('contact') || q.includes('hire') || q.includes('start') || q.includes('email') || q.includes('phone')) {
            return `The best way to start is by calling us at +91 9899982936 or emailing girlchildproductions@gmail.com. We can also set up a direct consultation with Charnamrit. Should I help you find the contact page?`;
        }

        if (q.includes('where') || q.includes('location')) {
            return `We are based in New Delhi, India, but we create films and content for the entire world!`;
        }

        return "That's an interesting question! At Girl Child Productions, we bring 18 years of cinematic excellence to every frame. To give you the best answer, would you like to speak with our production team or see our 'Work' section?";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate bot thinking
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: generateResponse(input),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
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
