import React, { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';

interface AudioContextType {
    isMuted: boolean;
    toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within AudioProvider');
    }
    return context;
};

interface AudioProviderProps {
    children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(false);

    // Audio Autoplay Logic with Eager Loading & Fallback
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = isMuted;
        audio.volume = 0.7; // Set initial volume

        const playAudio = async () => {
            try {
                // Wait for audio to be ready for playback
                if (audio.readyState >= 3) {
                    // HAVE_FUTURE_DATA or better
                    if (!isMuted) {
                        await audio.play();
                        console.log("Audio playing successfully");
                    }
                } else {
                    // Wait for canplaythrough event
                    const handleCanPlay = async () => {
                        if (!isMuted) {
                            await audio.play();
                            console.log("Audio playing after loading");
                        }
                    };
                    audio.addEventListener('canplaythrough', handleCanPlay, { once: true });
                }
            } catch (err) {
                console.log("Autoplay blocked by browser policy, waiting for interaction");
                // Add one-time listener for interaction
                const handleInteraction = () => {
                    if (!isMuted) {
                        audio.play().catch(e => console.log("Audio play failed on interaction:", e));
                    }
                    window.removeEventListener('click', handleInteraction);
                    window.removeEventListener('scroll', handleInteraction);
                    window.removeEventListener('touchstart', handleInteraction);
                };

                window.addEventListener('click', handleInteraction);
                window.addEventListener('scroll', handleInteraction);
                window.addEventListener('touchstart', handleInteraction);
            }
        };

        playAudio();
    }, [isMuted]);

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute }}>
            {/* Global Audio Element */}
            <audio
                ref={audioRef}
                src="/hero-audio.mp3"
                loop
                autoPlay
                preload="auto"
                playsInline
            />
            {children}
        </AudioContext.Provider>
    );
};
