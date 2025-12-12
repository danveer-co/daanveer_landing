import { useState, useEffect, useCallback } from 'react';

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    image: '/carousel/slide1.png',
    title: 'Food Donations',
    description: 'Help feed families in need by donating groceries, cooked meals, or organizing food drives in your community.',
  },
  {
    image: '/carousel/slide2.png',
    title: 'Clothes & Essentials',
    description: 'Donate clothes, blankets, and personal items to those who need them most. Every contribution matters.',
  },
  {
    image: '/carousel/slide3.png',
    title: 'Connect with Local NGOs',
    description: 'Visit and partner with verified NGOs in your area. See their work firsthand and find ways to contribute.',
  },
  {
    image: '/carousel/slide4.png',
    title: 'Volunteer Your Time',
    description: 'Join hands with communities — serve meals, teach children, assist the elderly, or support events.',
  },
  {
    image: '/carousel/slide5.png',
    title: 'Platform for NGOs',
    description: 'Empowering NGOs with tools to manage volunteers, track impact, and reach more supporters efficiently.',
  },
];

/**
 * ImageCarousel Component
 * 
 * Auto-scrolling carousel showcasing volunteering activities.
 * Features smooth transitions, navigation dots, and arrow controls.
 */
export const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Go to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section 
      className="relative w-full bg-daanveer-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="container-custom pt-16 pb-8 text-center">
        <span className="inline-block bg-daanveer-green/20 text-daanveer-green px-4 py-1 rounded-full text-sm font-medium mb-4">
          Our Impact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Volunteers in Action
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          See how Daanveer connects passionate volunteers with meaningful opportunities.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto px-4 pb-16">
        {/* Main Slider */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 z-0'
              }`}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h3 className={`text-2xl md:text-4xl font-bold text-white mb-2 transition-all duration-500 delay-200 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.title}
                </h3>
                <p className={`text-gray-300 text-lg md:text-xl max-w-2xl transition-all duration-500 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          {/* Arrow Controls */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-10 bg-daanveer-green' 
                  : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Progress indicator for active slide */}
              {index === currentSlide && isAutoPlaying && !isPaused && (
                <span 
                  className="absolute inset-0 bg-daanveer-green-light rounded-full origin-left"
                  style={{
                    animation: 'progressFill 4s linear forwards',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
