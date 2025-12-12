import { useEffect, useRef, useState } from 'react';

interface RoadmapItem {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  icon: React.ReactNode;
}

const roadmapItems: RoadmapItem[] = [
  {
    title: 'NLP Matching',
    description: 'AI-powered matching of volunteers to opportunities based on skills and preferences.',
    status: 'planned',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Volunteer Ride-Share',
    description: 'Coordinate transportation for volunteers heading to the same events.',
    status: 'planned',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Emergency Alert Mode',
    description: 'Rapid mobilization of volunteers during natural disasters or emergencies.',
    status: 'planned',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'AI Report Generators',
    description: 'Automated impact reports and analytics powered by artificial intelligence.',
    status: 'planned',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

/**
 * Roadmap Component
 * 
 * Shows future features from the PDF.
 */
export const Roadmap: React.FC = () => {
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
      className="section bg-daanveer-black text-white"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-daanveer-green/20 text-daanveer-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's coming next
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Exciting features on the horizon to make volunteering even more impactful.
          </p>
        </div>

        {/* Roadmap items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-daanveer-green/50 hover:bg-white/10 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-daanveer-green/20 rounded-xl flex items-center justify-center text-daanveer-green">
                  {item.icon}
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.status === 'completed'
                    ? 'bg-daanveer-green text-white'
                    : item.status === 'in-progress'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-white/10 text-gray-400'
                }`}>
                  {item.status === 'completed' ? 'Done' : item.status === 'in-progress' ? 'Building' : 'Planned'}
                </span>
              </div>

              <h4 className="font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-400 mb-4">
            Want to help shape the future of Daanveer?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-daanveer-green font-medium hover:underline"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
