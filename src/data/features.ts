/**
 * Feature data for detailed feature pages
 */

export interface FeatureStep {
    title: string;
    description: string;
}

export interface FeatureAdvantage {
    title: string;
    description: string;
    icon: string;
}

export interface FeatureData {
    id: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    icon: string;
    steps: FeatureStep[];
    advantages: FeatureAdvantage[];
    impact: {
        stat: string;
        description: string;
    }[];
}

export const featuresData: FeatureData[] = [
    {
        id: 'local-discovery',
        title: 'Smart Local Discovery',
        tagline: 'Find opportunities near you',
        description: 'Daanveer uses smart geo-spatial technology to connect you with volunteering opportunities in your neighborhood. No more scrolling through irrelevant listings — find events, drives, and community initiatives within your preferred radius.',
        image: '/features/local-discovery.png',
        icon: 'location',
        steps: [
            {
                title: 'Enable Location',
                description: 'Allow Daanveer to access your location or manually enter your area to start discovering opportunities nearby.',
            },
            {
                title: 'Set Your Radius',
                description: 'Choose how far you\'re willing to travel — from 1km to 50km. The app filters opportunities within your comfort zone.',
            },
            {
                title: 'Browse & Filter',
                description: 'Explore opportunities on an interactive map or list view. Filter by cause, date, time commitment, and skills needed.',
            },
            {
                title: 'Get Notified',
                description: 'Receive alerts when new opportunities matching your preferences become available in your area.',
            },
        ],
        advantages: [
            {
                title: 'Save Time',
                description: 'No more searching through city-wide listings. See only what\'s relevant to your location.',
                icon: 'clock',
            },
            {
                title: 'Reduce Travel',
                description: 'Minimize commute time and carbon footprint by volunteering closer to home.',
                icon: 'car',
            },
            {
                title: 'Build Local Connections',
                description: 'Meet neighbors and strengthen community bonds through local engagement.',
                icon: 'community',
            },
            {
                title: 'Real-Time Updates',
                description: 'See live event availability, participant counts, and last-minute opportunities.',
                icon: 'refresh',
            },
        ],
        impact: [
            { stat: '3x', description: 'More volunteers attend events when they\'re within 5km' },
            { stat: '40%', description: 'Higher retention for locally-engaged volunteers' },
            { stat: '15min', description: 'Average travel time to volunteer events' },
        ],
    },
    {
        id: 'verification',
        title: 'Impact Verification Dashboard',
        tagline: 'Transparent & trusted contributions',
        description: 'Build credibility with verified, transparent reporting. Every volunteer hour is validated through GPS check-ins, photo uploads, and beneficiary counts — creating an immutable record of your community impact.',
        image: '/features/verification.png',
        icon: 'shield',
        steps: [
            {
                title: 'Check-In on Arrival',
                description: 'When you arrive at an event, check in using GPS verification. The app confirms you\'re at the right location.',
            },
            {
                title: 'Document Your Work',
                description: 'Take photos during the event to capture moments and provide visual proof of participation.',
            },
            {
                title: 'Log Impact Metrics',
                description: 'Record the number of beneficiaries helped, items distributed, or hours contributed.',
            },
            {
                title: 'Get Verified Badge',
                description: 'Once the NGO confirms your participation, receive a verified badge on your profile.',
            },
        ],
        advantages: [
            {
                title: 'Build Trust',
                description: 'Verified contributions carry weight. Employers and institutions recognize authentic impact.',
                icon: 'badge',
            },
            {
                title: 'Prevent Fraud',
                description: 'GPS + photo verification eliminates false claims and maintains platform integrity.',
                icon: 'shield',
            },
            {
                title: 'Transparent Reporting',
                description: 'NGOs get accurate data for donor reports. Volunteers get proof of service.',
                icon: 'chart',
            },
            {
                title: 'Immutable Records',
                description: 'Your verified contributions are permanently recorded and can be exported anytime.',
                icon: 'database',
            },
        ],
        impact: [
            { stat: '95%', description: 'Trust score among verified volunteer records' },
            { stat: '80%', description: 'Reduction in fraudulent volunteer claims' },
            { stat: '2x', description: 'Faster NGO reporting with auto-generated logs' },
        ],
    },
    {
        id: 'skillmatch',
        title: 'SkillMatch & Micro-Volunteering',
        tagline: 'Your skills where they matter most',
        description: 'Not everyone can commit full days. SkillMatch connects your unique abilities with organizations that need them — from 15-minute tasks to multi-day projects. Busy professionals, students, and experts can all contribute meaningfully.',
        image: '/features/skillmatch.png',
        icon: 'lightning',
        steps: [
            {
                title: 'Build Your Skill Profile',
                description: 'Add your skills — teaching, cooking, coding, driving, graphic design, languages, and more.',
            },
            {
                title: 'Set Availability',
                description: 'Indicate when you\'re free — 30 minutes during lunch, weekends only, or flexible hours.',
            },
            {
                title: 'Get Matched',
                description: 'AI-powered matching suggests opportunities that fit your skills and schedule perfectly.',
            },
            {
                title: 'Complete Micro-Tasks',
                description: 'Contribute through small but impactful tasks — reviewing documents, mentoring calls, or quick deliveries.',
            },
        ],
        advantages: [
            {
                title: 'For Busy People',
                description: 'Even 15 minutes can make a difference. Micro-volunteering fits any schedule.',
                icon: 'clock',
            },
            {
                title: 'Expert Matching',
                description: 'Doctors, teachers, lawyers — your specialized skills reach those who need them most.',
                icon: 'star',
            },
            {
                title: 'Remote Options',
                description: 'Many tasks can be done from home — translation, design, virtual tutoring.',
                icon: 'home',
            },
            {
                title: 'Skill Development',
                description: 'Gain experience in new areas while helping others. Great for students and career changers.',
                icon: 'growth',
            },
        ],
        impact: [
            { stat: '5x', description: 'More volunteers participate with micro-task options' },
            { stat: '60%', description: 'Of tasks completed by skill-matched volunteers' },
            { stat: '1hr', description: 'Average weekly commitment for micro-volunteers' },
        ],
    },
    {
        id: 'resource-exchange',
        title: 'Resource Exchange Board',
        tagline: 'Give what you have, get what you need',
        description: 'Not all help is about time. The Resource Exchange Board connects donors with requests — clothes, food supplies, books, equipment, and more. NGOs post what they need; community members fulfill those needs.',
        image: '/features/resource.png',
        icon: 'exchange',
        steps: [
            {
                title: 'Browse Requests',
                description: 'See what local NGOs and community members need — from school supplies to medical equipment.',
            },
            {
                title: 'Donate Items',
                description: 'List items you want to donate with photos and condition. Get matched with nearby requests.',
            },
            {
                title: 'Coordinate Pickup/Delivery',
                description: 'Arrange convenient handoff through the app — schedule pickups or drop-off points.',
            },
            {
                title: 'Track Your Impact',
                description: 'See where your donations went and the lives they touched through follow-up stories.',
            },
        ],
        advantages: [
            {
                title: 'Direct Impact',
                description: 'Your donations go directly to those in need — no middlemen, no delays.',
                icon: 'direct',
            },
            {
                title: 'Reduce Waste',
                description: 'Items you no longer need find new homes instead of landfills.',
                icon: 'recycle',
            },
            {
                title: 'Verified Recipients',
                description: 'All requests are vetted. Know your donations reach genuine beneficiaries.',
                icon: 'verified',
            },
            {
                title: 'Tax Benefits',
                description: 'Get donation receipts from registered NGOs for tax deductions.',
                icon: 'receipt',
            },
        ],
        impact: [
            { stat: '10K+', description: 'Items exchanged through the platform monthly' },
            { stat: '85%', description: 'Request fulfillment rate within 48 hours' },
            { stat: '₹50L', description: 'Worth of resources exchanged annually' },
        ],
    },
    {
        id: 'karma-points',
        title: 'Karma Points & Impact Resume',
        tagline: 'Your impact, recognized and rewarded',
        description: 'Every contribution earns Karma Points — volunteer hours, donations, mentoring sessions. Accumulate points to unlock badges, climb leaderboards, and generate a professional Impact Resume showcasing your community service.',
        image: '/features/karma.png',
        icon: 'star',
        steps: [
            {
                title: 'Earn Karma Points',
                description: 'Every verified activity earns points — 10 points per hour volunteered, bonus for referrals.',
            },
            {
                title: 'Unlock Badges',
                description: 'Reach milestones to earn badges — First Timer, Regular Hero, Community Champion, and more.',
            },
            {
                title: 'Climb Leaderboards',
                description: 'Compete with friends and your city. Weekly and monthly leaderboards celebrate top contributors.',
            },
            {
                title: 'Generate Impact Resume',
                description: 'Download a professional PDF resume of all verified contributions — perfect for college and job applications.',
            },
        ],
        advantages: [
            {
                title: 'Gamification',
                description: 'Points and badges make volunteering fun and encourage consistent participation.',
                icon: 'game',
            },
            {
                title: 'Recognition',
                description: 'Get recognized for your efforts. Share achievements on social media.',
                icon: 'trophy',
            },
            {
                title: 'Career Benefits',
                description: 'Impact Resume showcases soft skills and community engagement to employers.',
                icon: 'briefcase',
            },
            {
                title: 'Unlock Perks',
                description: 'High-karma users get early access to exclusive events and partner discounts.',
                icon: 'gift',
            },
        ],
        impact: [
            { stat: '2x', description: 'Higher engagement with gamification elements' },
            { stat: '10K+', description: 'Impact Resumes generated by volunteers' },
            { stat: '75%', description: 'Users report increased motivation through karma system' },
        ],
    },
    {
        id: 'story-capsules',
        title: 'Story Capsules',
        tagline: 'Stories that inspire action',
        description: 'Behind every event is a story. Story Capsules capture the human impact — beneficiary testimonials, volunteer experiences, and follow-up updates. These narratives retain emotional engagement and inspire others to join.',
        image: '/features/stories.png',
        icon: 'heart',
        steps: [
            {
                title: 'Capture Moments',
                description: 'During events, volunteers and NGOs capture photos and short video clips.',
            },
            {
                title: 'Share Testimonials',
                description: 'Beneficiaries share how the help impacted their lives — in their own words.',
            },
            {
                title: 'Create Story Capsule',
                description: 'Combine media, testimonials, and impact metrics into a shareable story.',
            },
            {
                title: 'Inspire Others',
                description: 'Stories appear in the app feed and can be shared on social media to inspire new volunteers.',
            },
        ],
        advantages: [
            {
                title: 'Emotional Connection',
                description: 'Stories create lasting emotional impact that statistics alone cannot achieve.',
                icon: 'heart',
            },
            {
                title: 'Volunteer Retention',
                description: 'Seeing the impact of their work keeps volunteers coming back.',
                icon: 'users',
            },
            {
                title: 'Donor Engagement',
                description: 'NGOs use stories in fundraising campaigns to connect donors with beneficiaries.',
                icon: 'money',
            },
            {
                title: 'Social Proof',
                description: 'Real stories from real people attract new volunteers to the platform.',
                icon: 'share',
            },
        ],
        impact: [
            { stat: '3x', description: 'More event signups for well-documented past events' },
            { stat: '50K+', description: 'Story views across the platform monthly' },
            { stat: '60%', description: 'Higher donation rates with story-backed campaigns' },
        ],
    },
];

export const getFeatureById = (id: string): FeatureData | undefined => {
    return featuresData.find((feature) => feature.id === id);
};

export const getFeatureBySlug = (slug: string): FeatureData | undefined => {
    return featuresData.find((feature) => feature.id === slug);
};
