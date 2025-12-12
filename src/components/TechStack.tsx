import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: 'React + Tailwind',
    description: 'Modern, responsive frontend',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z"/>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: 'Django REST / FastAPI',
    description: 'Robust Python backend',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'OpenStreetMap',
    description: 'Open-source mapping',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    description: 'Production database',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
      </svg>
    ),
  },
];

/**
 * Tech Stack Component
 * 
 * Shows the technology stack and trust indicators.
 */
export const TechStack: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-daanveer-gray-light"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-daanveer-green/10 text-daanveer-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="section-title">
            Built with modern tech
          </h2>
          <p className="section-subtitle mx-auto">
            Frontend: React + Tailwind. Backend: Django REST / FastAPI. Mapping: OpenStreetMap.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-daanveer-green/10 rounded-xl flex items-center justify-center text-daanveer-green mx-auto mb-4">
                {tech.icon}
              </div>
              <h4 className="font-bold text-daanveer-black text-sm md:text-base mb-1">
                {tech.name}
              </h4>
              <p className="text-xs md:text-sm text-daanveer-gray">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center gap-2 text-daanveer-gray">
            <svg className="w-5 h-5 text-daanveer-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Secure & Verified</span>
          </div>
          <div className="flex items-center gap-2 text-daanveer-gray">
            <svg className="w-5 h-5 text-daanveer-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 5.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L7.414 10l2.293-2.293z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Open Source Friendly</span>
          </div>
          <div className="flex items-center gap-2 text-daanveer-gray">
            <svg className="w-5 h-5 text-daanveer-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Lightning Fast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
