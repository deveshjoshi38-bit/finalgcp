import React from 'react';
import { motion } from 'framer-motion';

interface RevealTitleProps {
    text: string;
    className?: string;
    delay?: number;
    phrase?: boolean; // If true, reveal by word/phrase instead of character
}

const RevealTitle: React.FC<RevealTitleProps> = ({ text, className = "", delay = 0, phrase = false }) => {
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 100, // Deep slide up
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    if (phrase) {
        return (
            <motion.div
                style={{ overflow: 'hidden', display: 'flex' }}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className={className}
            >
                <motion.span variants={child} className="block">
                    {text}
                </motion.span>
            </motion.div>
        )
    }

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {text.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-[0.2em] overflow-hidden whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${index}-${charIndex}`}
                            variants={child}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
};

export default RevealTitle;
