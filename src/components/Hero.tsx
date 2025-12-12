import { useState } from 'react';
import { config } from '../config';
import DownloadModal from './DownloadModal';

/**
 * Hero Section Component
 * 
 * Large headline, subheadline, and two CTAs.
 * Primary: Download APK
 * Secondary: View Features (scrolls to features)
 */
export const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Detect if user is on mobile Android
  const isMobileAndroid = /Android/i.test(navigator.userAgent);

  const handleDownload = () => {
    if (isMobileAndroid) {
      // Direct download on Android
      window.location.href = config.APK_DOWNLOAD_URL;
    } else {
      // Show modal with instructions on desktop
      setShowModal(true);
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient blobs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-daanveer-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-daanveer-green/5 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(#121212 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-daanveer-green/10 text-daanveer-green px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-daanveer-green rounded-full animate-pulse" />
              Open for Beta Testing
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-daanveer-black mb-6 animate-fade-in-up leading-tight">
              Daanveer — Local
              <br />
              <span className="text-gradient">volunteering made simple</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-daanveer-gray max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-100">
              A location-first platform that connects volunteers, NGOs and local communities with <span className="text-daanveer-black font-medium">verified impact</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
              <button
                onClick={handleDownload}
                className="btn-primary text-lg px-8 py-4 min-w-[200px]"
                aria-label="Download Daanveer APK for Android"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
                Download APK
              </button>
              
              <button
                onClick={scrollToFeatures}
                className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
                aria-label="View Daanveer features"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                View Features
              </button>
            </div>

            {/* Safety note */}
            <p className="mt-6 text-sm text-daanveer-gray/60 animate-fade-in animation-delay-300">
              🔒 Only install from official Daanveer site. Verify signatures.
            </p>

            {/* Stats preview */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up animation-delay-400">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-daanveer-green">500+</div>
                <div className="text-sm text-daanveer-gray">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-daanveer-green">50+</div>
                <div className="text-sm text-daanveer-gray">NGOs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-daanveer-green">1000+</div>
                <div className="text-sm text-daanveer-gray">Hours Given</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg 
            className="w-6 h-6 text-daanveer-gray/40" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Download Modal for desktop users */}
      <DownloadModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

export default Hero;
