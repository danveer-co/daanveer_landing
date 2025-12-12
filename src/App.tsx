import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Splash, VideoSplash } from './components';
import { Landing } from './pages/Landing';
import { config } from './config';

// Session storage keys
const VIDEO_SHOWN_KEY = 'daanveer_video_shown';

/**
 * Main App Component
 * 
 * Handles video splash → splash screen → landing page flow.
 * Uses sessionStorage to skip video and splash on repeat visits.
 */
function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Check sessionStorage on mount
  useEffect(() => {
    const videoShown = sessionStorage.getItem(VIDEO_SHOWN_KEY);
    const splashShown = sessionStorage.getItem(config.SPLASH_SHOWN_KEY);
    
    if (videoShown === 'true') {
      setShowVideo(false);
      // If video was shown, check if splash was also shown
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

  return (
    <Router>
      {/* Video Splash (first thing shown) */}
      {showVideo && (
        <VideoSplash onComplete={handleVideoComplete} />
      )}

      {/* Animated Splash Screen (after video) */}
      {!showVideo && showSplash && (
        <Splash onComplete={handleSplashComplete} />
      )}

      {/* Landing Page (always rendered, becomes visible after splashes) */}
      <div
        className={`transition-opacity duration-500 ${
          showVideo || showSplash ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Landing />
      </div>
    </Router>
  );
}

export default App;
