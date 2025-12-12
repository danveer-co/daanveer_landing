import { useEffect, useRef, useState } from 'react';

interface VideoSplashProps {
  onComplete: () => void;
}

/**
 * Video Splash Component
 * 
 * Plays the splash video on first load.
 * Fades out smoothly when video ends.
 * Can also skip on click/tap/keyboard.
 */
export const VideoSplash: React.FC<VideoSplashProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Handle video end - start fade out
  const handleVideoEnd = () => {
    startFadeOut();
  };

  // Start fade out animation
  const startFadeOut = () => {
    if (isFadingOut) return;
    
    setIsFadingOut(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    
    // Wait for fade animation to complete before transitioning
    setTimeout(() => {
      onComplete();
    }, 800); // Match the CSS transition duration
  };

  // Handle skip (click or keyboard)
  const handleSkip = () => {
    startFadeOut();
  };

  // Keyboard navigation (Space or Enter to skip)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFadingOut]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-black flex items-center justify-center cursor-pointer transition-opacity duration-[800ms] ease-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Click or press any key to skip intro video"
    >
      {/* Video - object-cover to fill entire screen without black bars */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src="/splash_video.mp4" type="video/mp4" />
        {/* Fallback: skip video if not supported */}
        Your browser does not support the video tag.
      </video>

      {/* Skip hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10 transition-opacity duration-300 ${
        isFadingOut ? 'opacity-0' : 'animate-pulse'
      }`}>
        Click or press any key to skip
      </div>
    </div>
  );
};

export default VideoSplash;
