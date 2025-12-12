import {
  Navbar,
  Hero,
  FeaturesGrid,
  HowItWorks,
  Impact,
  Roadmap,
  Footer,
} from '../components';

/**
 * Landing Page
 * 
 * Main landing page composing all sections.
 */
export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* How It Works */}
        <HowItWorks />

        {/* Impact Metrics */}
        <Impact />

        {/* Roadmap / Future */}
        <Roadmap />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
