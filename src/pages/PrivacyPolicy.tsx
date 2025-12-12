import { Link } from 'react-router-dom';
import { config } from '../config';

/**
 * Privacy Policy Page
 * 
 * Comprehensive privacy policy for a local volunteering/donation platform.
 */
export const PrivacyPolicy: React.FC = () => {
  const lastUpdated = '12 December 2024';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-daanveer-green text-white py-12 px-4">
        <div className="container-custom">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-white/80">Last updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Introduction</h2>
            <p className="text-daanveer-gray leading-relaxed mb-4">
              Welcome to Daanveer. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              mobile application and website.
            </p>
            <p className="text-daanveer-gray leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the application.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-daanveer-black mt-6 mb-3">Personal Information</h3>
            <p className="text-daanveer-gray leading-relaxed mb-3">
              We may collect personally identifiable information that you voluntarily provide when registering, including:
            </p>
            <ul className="list-disc pl-6 text-daanveer-gray space-y-2 mb-4">
              <li>Full name and contact information (email, phone number)</li>
              <li>Profile photo (optional)</li>
              <li>Skills and interests for volunteer matching</li>
              <li>Organization details (for NGO accounts)</li>
            </ul>

            <h3 className="text-xl font-semibold text-daanveer-black mt-6 mb-3">Location Data</h3>
            <p className="text-daanveer-gray leading-relaxed mb-3">
              As a location-first platform, we collect:
            </p>
            <ul className="list-disc pl-6 text-daanveer-gray space-y-2 mb-4">
              <li>GPS coordinates for discovering nearby opportunities</li>
              <li>Location check-ins for impact verification</li>
              <li>Approximate area for geo-filtered searches</li>
            </ul>
            <p className="text-daanveer-gray leading-relaxed">
              You can disable location services in your device settings, though this will limit app functionality.
            </p>

            <h3 className="text-xl font-semibold text-daanveer-black mt-6 mb-3">Activity Data</h3>
            <ul className="list-disc pl-6 text-daanveer-gray space-y-2">
              <li>Volunteering history and hours logged</li>
              <li>Event participation and check-ins</li>
              <li>Photos uploaded for impact verification</li>
              <li>Karma points and achievements</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">How We Use Your Information</h2>
            <p className="text-daanveer-gray leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-daanveer-gray space-y-2">
              <li>Connect you with relevant local volunteering opportunities</li>
              <li>Verify your participation and impact at events</li>
              <li>Generate your impact resume and karma points</li>
              <li>Enable NGOs to coordinate with volunteers</li>
              <li>Send notifications about nearby events and opportunities</li>
              <li>Improve our services and develop new features</li>
              <li>Prevent fraud and ensure platform safety</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Information Sharing</h2>
            <p className="text-daanveer-gray leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>
            
            <h3 className="text-xl font-semibold text-daanveer-black mt-6 mb-3">With NGOs and Organizations</h3>
            <p className="text-daanveer-gray leading-relaxed mb-4">
              When you sign up for an event, the organizing NGO will receive your name, contact information, 
              and relevant skills to coordinate your participation.
            </p>

            <h3 className="text-xl font-semibold text-daanveer-black mt-6 mb-3">Public Profile</h3>
            <p className="text-daanveer-gray leading-relaxed mb-4">
              Your name, profile photo, karma points, and volunteer badges may be visible to other users. 
              Your impact stories may be featured with your consent.
            </p>

            <h3 className="text-xl font-semibold text-daanveer-black mt-6 mb-3">We Do NOT Sell Your Data</h3>
            <p className="text-daanveer-gray leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties for marketing purposes.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Data Security</h2>
            <p className="text-daanveer-gray leading-relaxed mb-3">
              We implement appropriate security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-daanveer-gray space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication mechanisms</li>
              <li>Regular security audits and updates</li>
              <li>Limited employee access to personal data</li>
            </ul>
            <p className="text-daanveer-gray leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Data Retention</h2>
            <p className="text-daanveer-gray leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide services. 
              Volunteering history and impact data may be retained to maintain your karma points and impact resume. 
              You can request deletion of your account and associated data at any time.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Your Rights</h2>
            <p className="text-daanveer-gray leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-daanveer-gray space-y-2">
              <li><strong>Access</strong> — Request a copy of your personal data</li>
              <li><strong>Correction</strong> — Update or correct inaccurate information</li>
              <li><strong>Deletion</strong> — Request deletion of your account and data</li>
              <li><strong>Portability</strong> — Export your volunteer history and impact data</li>
              <li><strong>Opt-out</strong> — Disable notifications and location tracking</li>
            </ul>
            <p className="text-daanveer-gray leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a href={`mailto:${config.CONTACT_EMAIL}`} className="text-daanveer-green hover:underline">
                {config.CONTACT_EMAIL}
              </a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Children's Privacy</h2>
            <p className="text-daanveer-gray leading-relaxed">
              Daanveer is not intended for users under 13 years of age. We do not knowingly collect personal information 
              from children under 13. If you are a parent or guardian and believe your child has provided us with 
              personal information, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Changes to This Policy</h2>
            <p className="text-daanveer-gray leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the 
              new policy on this page and updating the "Last updated" date. You are advised to review this page 
              periodically for any changes.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-10 bg-daanveer-gray-light rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-daanveer-black mb-4">Contact Us</h2>
            <p className="text-daanveer-gray leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-daanveer-gray space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${config.CONTACT_EMAIL}`} className="text-daanveer-green hover:underline">
                  {config.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a href={config.GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-daanveer-green hover:underline">
                  {config.GITHUB_URL}
                </a>
              </li>
            </ul>
          </section>

        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-daanveer-black text-white py-8">
        <div className="container-custom text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Daanveer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
