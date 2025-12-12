import { useState, useEffect, useCallback } from 'react';
import { config } from '../config';
import LogoPlaceholder from '../assets/logo-placeholder.svg';

interface SplashProps {
  onComplete: () => void;
}

/**
 * Splash Screen Component
 * 
 * Full-screen animated splash with logo and tagline.
 * Click anywhere, or press Space/Enter to continue.
 * Uses sessionStorage to skip on repeat visits.
 */
export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  // Handle transition to landing page
  const handleContinue = useCallback(() => {
    if (isExiting) return;
    
    setIsExiting(true);
    // Store in sessionStorage so splash doesn't show again this session
    sessionStorage.setItem(config.SPLASH_SHOWN_KEY, 'true');
    
    // Wait for exit animation to complete
    setTimeout(() => {
      onComplete();
    }, 500);
  }, [isExiting, onComplete]);

  // Keyboard navigation (Space or Enter)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleContinue();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleContinue]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white cursor-pointer transition-all duration-500 ${
        isExiting ? 'splash-exit' : ''
      }`}
      onClick={handleContinue}
      onTouchStart={handleContinue}
      role="button"
      tabIndex={0}
      aria-label="Click or press Enter to continue to Daanveer"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-daanveer-gray-light to-white opacity-50" />
      
      {/* Animated logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Pulse rings behind logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-daanveer-green/20 pulse-ring" />
          <div className="absolute w-48 h-48 rounded-full border-2 border-daanveer-green/10 pulse-ring" 
               style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Logo placeholder - replace with Lottie or final SVG */}
        <div className="relative logo-animate mb-8">
          {/* 
            SWAP INSTRUCTIONS:
            Replace this img with a Lottie player component:
            
            import Lottie from 'lottie-react';
            import logoAnimation from '../assets/logo-lottie.json';
            
            <Lottie 
              animationData={logoAnimation} 
              loop={true}
              style={{ width: 180, height: 180 }}
            />
          */}
          <img 
            src={LogoPlaceholder} 
            alt="Daanveer Logo" 
            className="w-44 h-44 md:w-52 md:h-52 drop-shadow-xl"
          />
        </div>
        
        {/* App name */}
        <h1 className="text-4xl md:text-5xl font-bold text-daanveer-black mb-4 animate-fade-in">
          Daanveer
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-daanveer-gray text-center max-w-md px-4 animate-fade-in animation-delay-200">
          Connecting volunteers, NGOs, and local communities.
        </p>
        
        {/* Click instruction */}
        <p className="mt-12 text-sm text-daanveer-gray/60 animate-fade-in animation-delay-500">
          Click anywhere or press Enter to continue
        </p>
      </div>
    </div>
  );
};

export default Splash;
