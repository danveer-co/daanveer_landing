import { useEffect, useRef, useState } from 'react';

interface ImpactMetric {
  label: string;
  description: string;
  icon: React.ReactNode;
}

const metrics: ImpactMetric[] = [
  {
    label: 'Increase Participation',
    description: 'Connect more volunteers with local opportunities through geo-discovery.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: 'Increase Trust',
    description: 'Build credibility through verified reporting and transparent impact logs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Reduce Admin Overhead',
    description: 'Streamline NGO operations with automated event management and reporting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Strengthen Community',
    description: 'Foster stronger community bonds through local engagement and storytelling.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

/**
 * Impact Section Component
 * 
 * Shows projected impact metrics from the PDF.
 */
export const Impact: React.FC = () => {
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
      id="impact"
      ref={sectionRef}
      className="section bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <span className="inline-block bg-daanveer-green/10 text-daanveer-green px-4 py-1 rounded-full text-sm font-medium mb-4">
              Impact
            </span>
            <h2 className="section-title mb-6">
              Making a real difference
            </h2>
            <p className="text-lg text-daanveer-gray mb-8 leading-relaxed">
              Increase local participation, increase trust through verified reporting, reduce NGO admin overhead, and strengthen community bonds.
            </p>

            {/* Metrics list */}
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex items-start gap-4 p-4 rounded-2xl hover:bg-daanveer-gray-light transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-daanveer-green/10 rounded-xl flex items-center justify-center text-daanveer-green flex-shrink-0">
                    {metric.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-daanveer-black mb-1">
                      {metric.label}
                    </h4>
                    <p className="text-sm text-daanveer-gray">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-daanveer-green/10 to-daanveer-green/5 rounded-3xl transform rotate-3" />
            
            {/* Main card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-daanveer-green mb-2">
                  4x
                </div>
                <div className="text-daanveer-gray">
                  More Community Engagement
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-daanveer-gray-light rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-daanveer-black">85%</div>
                  <div className="text-sm text-daanveer-gray">Volunteer Retention</div>
                </div>
                <div className="bg-daanveer-gray-light rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-daanveer-black">60%</div>
                  <div className="text-sm text-daanveer-gray">Less Admin Work</div>
                </div>
                <div className="bg-daanveer-gray-light rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-daanveer-black">95%</div>
                  <div className="text-sm text-daanveer-gray">Trust Score</div>
                </div>
                <div className="bg-daanveer-gray-light rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-daanveer-black">3x</div>
                  <div className="text-sm text-daanveer-gray">Impact Visibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
