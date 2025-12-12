import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Splash, VideoSplash } from './components';
import { Landing } from './pages/Landing';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { config } from './config';

// Session storage keys
const VIDEO_SHOWN_KEY = 'daanveer_video_shown';

/**
 * Main App Content Component
 * 
 * Handles splash screens and routing.
 */
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [showVideo, setShowVideo] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Check sessionStorage on mount
  useEffect(() => {
    const videoShown = sessionStorage.getItem(VIDEO_SHOWN_KEY);
    const splashShown = sessionStorage.getItem(config.SPLASH_SHOWN_KEY);
    
    if (videoShown === 'true') {
      setShowVideo(false);
      if (splashShown === 'true') {
        setShowSplash(false);
      } else {
        setShowSplash(true);
      }
    }
    setIsReady(true);
  }, []);

  // Handle video completion
  const handleVideoComplete = () => {
    sessionStorage.setItem(VIDEO_SHOWN_KEY, 'true');
    setShowVideo(false);
    setShowSplash(true);
  };

  // Handle splash completion
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Don't render anything until we've checked sessionStorage
  if (!isReady) {
    return null;
  }

  // Show splash screens only on home page
  const showSplashScreens = isHomePage && (showVideo || showSplash);

  return (
    <>
      {/* Video Splash (first thing shown, only on home) */}
      {isHomePage && showVideo && (
        <VideoSplash onComplete={handleVideoComplete} />
      )}

      {/* Animated Splash Screen (after video, only on home) */}
      {isHomePage && !showVideo && showSplash && (
        <Splash onComplete={handleSplashComplete} />
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showSplashScreens ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </>
  );
}

/**
 * Main App Component
 * 
 * Wraps content with Router.
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
