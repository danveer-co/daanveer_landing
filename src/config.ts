/**
 * Daanveer Landing Page Configuration
 * 
 * Update these values to configure the landing page.
 */

export const config = {
    // APK Download URL - Replace with actual APK location
    APK_DOWNLOAD_URL: '/downloads/daanveer.apk',

    // Site metadata
    SITE_NAME: 'Daanveer',
    SITE_TAGLINE: 'Local volunteering made simple',
    SITE_DESCRIPTION: 'A location-first platform that connects volunteers, NGOs and local communities with verified impact.',

    // Contact & Social Links
    CONTACT_EMAIL: 'daanveer.co.tc@gmail.com',
    GITHUB_URL: 'https://github.com/danveer-co',
    PRIVACY_POLICY_URL: '/privacy',

    // Session Storage Keys
    SPLASH_SHOWN_KEY: 'daanveer_splash_shown',

    // Feature flags
    SHOW_ROADMAP: true,
    SHOW_TECH_STACK: true,
} as const;

export default config;
