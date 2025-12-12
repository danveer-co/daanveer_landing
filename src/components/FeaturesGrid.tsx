import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Feature {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    slug: 'local-discovery',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Smart Local Discovery',
    description: 'Find nearby opportunities using geo-radius and preferences. Geo-spatial search filters help you discover local volunteering events.',
  },
  {
    slug: 'verification',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Impact Verification Dashboard',
    description: 'Verified event logs with photos, geolocation check-ins and beneficiary counts for complete transparency.',
  },
  {
    slug: 'skillmatch',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'SkillMatch & Micro-Volunteering',
    description: 'Skill-based micro-tasks for busy contributors. Match your expertise with organizations that need it most.',
  },
  {
    slug: 'resource-exchange',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Resource Exchange Board',
    description: 'Request and fulfill non-monetary items. Donate supplies or fulfill needs posted by local organizations.',
  },
  {
    slug: 'karma-points',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Karma Points & Impact Resume',
    description: 'Earn points for verified contributions and generate a downloadable PDF resume of your impact hours.',
  },
  {
    slug: 'story-capsules',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Story Capsules',
    description: 'Share success stories and updates to retain emotional engagement. Narrative updates and beneficiary stories.',
  },
];

/**
 * Features Grid Component
 * 
 * Six feature cards with icons, hover effects, and reveal animations.
 * Each card links to a detailed feature page.
 */
export const FeaturesGrid: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(features.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the card reveals
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section bg-daanveer-gray-light"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-daanveer-green/10 text-daanveer-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="section-title">
            Everything you need to make an impact
          </h2>
          <p className="section-subtitle mx-auto">
            Powerful tools to discover opportunities, verify contributions, and build your volunteer resume.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Link
              to={`/features/${feature.slug}`}
              key={feature.slug}
              className={`card group cursor-pointer ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } transition-all duration-500`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-daanveer-green/10 rounded-2xl flex items-center justify-center text-daanveer-green mb-5 group-hover:bg-daanveer-green group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-daanveer-black mb-3 group-hover:text-daanveer-green transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-daanveer-gray leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Learn more indicator */}
              <div className="flex items-center gap-2 text-daanveer-green font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

