import { config } from '../config';
import LogoPlaceholder from '../assets/logo-placeholder.svg';

/**
 * Footer Component
 * 
 * Copyright, privacy policy, links to GitHub / contact email, small download CTA.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-daanveer-black text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={LogoPlaceholder} 
                alt="Daanveer Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">Daanveer</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A location-first platform that connects volunteers, NGOs and local communities with verified impact.
            </p>
            
            {/* Download CTA */}
            <a
              href={config.APK_DOWNLOAD_URL}
              download="daanveer.apk"
              className="inline-flex items-center gap-2 bg-daanveer-green hover:bg-daanveer-green-dark text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300"
              aria-label="Download Daanveer APK"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-daanveer-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-daanveer-green transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-daanveer-green transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href={config.PRIVACY_POLICY_URL} className="text-gray-400 hover:text-daanveer-green transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${config.CONTACT_EMAIL}`} 
                  className="text-gray-400 hover:text-daanveer-green transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {config.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a 
                  href={config.GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-daanveer-green transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Daanveer. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with 💚 for communities everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
