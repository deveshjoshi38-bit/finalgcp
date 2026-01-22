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
    const hasStartedRef = useRef(false);
    const [isMuted, setIsMuted] = useState(false);

    // Immediate audio play attempt on mount
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.7;

        const startAudio = async () => {
            if (hasStartedRef.current) return;

            try {
                await audio.play();
                hasStartedRef.current = true;
                console.log("Audio playing immediately on load");
            } catch (err) {
                console.log("Autoplay blocked, waiting for user interaction");
            }
        };

        // Try to play immediately
        if (audio.readyState >= 3) {
            startAudio();
        } else {
            audio.addEventListener('canplaythrough', startAudio, { once: true });
        }

        // Fallback: Start on first user interaction (scroll, click, touch)
        const handleUserInteraction = () => {
            if (hasStartedRef.current || isMuted) return;

            audio.play()
                .then(() => {
                    hasStartedRef.current = true;
                    console.log("Audio started on user interaction");
                })
                .catch(e => console.log("Audio play failed:", e));

            // Remove all listeners after first successful interaction
            window.removeEventListener('scroll', handleUserInteraction);
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
            window.removeEventListener('mousemove', handleUserInteraction);
        };

        // Add interaction listeners with passive option for better scroll performance
        window.addEventListener('scroll', handleUserInteraction, { passive: true });
        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('touchstart', handleUserInteraction, { passive: true });
        window.addEventListener('mousemove', handleUserInteraction, { passive: true, once: true });

        return () => {
            window.removeEventListener('scroll', handleUserInteraction);
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
            window.removeEventListener('mousemove', handleUserInteraction);
        };
    }, [isMuted]);

    // Handle mute state changes
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = isMuted;

        // If unmuting and audio hasn't started, try to play
        if (!isMuted && hasStartedRef.current && audio.paused) {
            audio.play().catch(e => console.log("Resume failed:", e));
        }
    }, [isMuted]);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (audio && !hasStartedRef.current) {
            // First toggle also starts audio
            audio.play()
                .then(() => {
                    hasStartedRef.current = true;
                })
                .catch(e => console.log("Play on toggle failed:", e));
        }
        setIsMuted(prev => !prev);
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute }}>
            {/* Global Audio Element */}
            <audio
                ref={audioRef}
                src="/hero-audio.mp3"
                loop
                preload="auto"
                playsInline
            />
            {children}
        </AudioContext.Provider>
    );
};
