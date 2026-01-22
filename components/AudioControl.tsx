import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

const AudioControl: React.FC = () => {
    const { isMuted, toggleMute } = useAudio();

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={toggleMute}
            className="fixed bottom-6 left-6 z-50 p-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20 hover:bg-white/20 transition-all shadow-lg"
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
            {isMuted ? (
                <VolumeX size={16} className="text-gray-400" />
            ) : (
                <Volume2 size={16} className="text-white" />
            )}
        </motion.button>
    );
};

export default AudioControl;
