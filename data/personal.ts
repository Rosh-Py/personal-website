/**
 * Central data file — single source of truth for all personal & site-wide data.
 *
 * To update your name, email, social links, career history, skills, or any
 * other personal information, edit this file. Every component and page in the
 * project imports from here, so changes propagate everywhere automatically.
 */

import type { SkillCategory } from '@/types/skills';

// ---------------------------------------------------------------------------
// Site-wide configuration & SEO metadata
// ---------------------------------------------------------------------------

export const siteConfig = {
  /** Display name used in navigation, footer, metadata, and structured data. */
  name: 'Roshan Kumar Jha',

  /** Professional title shown in hero and metadata. */
  title: 'Senior Product Engineer',

  /** Canonical site URL (no trailing slash). Used for SEO, OG tags, sitemap. */
  url: 'https://jroshan.hashnode.dev',

  /** Primary contact email. Shown in About, Footer, and blog CTAs. */
  email: 'roshanjha.ece@gmail.com',

  /** Physical or general location. */
  location: 'New Delhi, India',

  /** Short availability note displayed in the About section. */
  availability: 'Open to new opportunities',

  /** Default meta description for SEO. */
  description:
    'Senior Product Engineer with 7+ years of building scalable web platforms in fintech and enterprise SaaS. Specializing in React, Next.js, and Node.js.',

  /** SEO keyword list. */
  keywords: [
    'Senior Product Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Web Performance',
    'Performance Optimization',
    'System Architecture',
    'AI-Augmented Development',
    'LLM led Development'
  ],

  /** OG image path (relative to public/). */
  ogImage: '/roshan.jpeg',

  /** Twitter/X handle (with @). */
  twitterHandle: '',
} as const;

// ---------------------------------------------------------------------------
// Social links
// ---------------------------------------------------------------------------

export interface SocialLink {
  name: string;
  href: string;
  /** Lucide icon name — resolved in the component. */
  icon: 'Github' | 'Linkedin' | 'Twitter' | 'Mail';
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Rosh-Py', icon: 'Github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/roshanjha01', icon: 'Linkedin' },
  { name: 'Email', href: `mailto:${siteConfig.email}`, icon: 'Mail' },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#about' },
];

// ---------------------------------------------------------------------------
// Hero section content
// ---------------------------------------------------------------------------

export const heroContent = {
  tag: 'Welcome!',
  greeting: `Hi, I'm ${siteConfig.name.split(' ')[0]}.`,
  intro:
    "I'm a Senior Product Engineer with 7+ years of experience building scalable web platforms in fintech and enterprise SaaS. I love building products that solve real-world problems and make a difference in people's lives.",
} as const;

// ---------------------------------------------------------------------------
// About section content
// ---------------------------------------------------------------------------

export const aboutContent = {
  bio: [
    `I'm a passionate ${siteConfig.title} with 7+ years of building scalable web platforms in fintech and enterprise SaaS. I specialize in frontend architecture and full-stack development using tools like React, Next.js, TypeScript, and Node.js.`,
    "Throughout my career, I've had the privilege to lead architecture decisions, optimize legacy database queries and web application performance, and implement AI-augmented development workflows. I'm dedicated to producing high-quality code and bringing engineering excellence to the teams I work with.",
  ],
} as const;

/** Soft skills displayed in the "What I Bring to the Table" card. */
export const softSkills = [
  'System Architecture',
  'Performance Optimization',
  'AI-Augmented Workflows',
  'Team Collaboration',
  'Technical Leadership',
] as const;

// ---------------------------------------------------------------------------
// Career milestones (timeline)
// ---------------------------------------------------------------------------

export interface CareerMilestone {
  year: string;
  title: string;
  company: string;
  /** Each string is rendered as a separate bullet point. */
  description: string[];
}

export const careerMilestones: CareerMilestone[] = [
  {
    year: 'Oct 2024 - Nov 2025',
    title: 'Senior Product Engineer',
    company: 'Envisso',
    description: [
      'Built scalable merchant risk monitoring dashboard v2.0 (UI & BE) serving 50,000+ high-risk portfolios across multiple PSPs.',
      'Achieved 10x performance gains on legacy database queries handling millions of records through indexing and query rewrites.',
      'Implemented AI/LLM-integrated development workflow, increasing team velocity by 50% and reducing bugs by 90%.',
    ],
  },
  {
    year: 'Apr 2024 - Oct 2024',
    title: 'Staff Engineer',
    company: 'Nagarro',
    description: [
      'Led UI feature development for subscriptions module of heavily trafficked ecommerce platform (100M+ users).',
      'Improved subscription module Lighthouse scores to 90–100 via performance optimizations.',
      'Owned UI development of an in-app notes generation feature, reducing user note-taking time by up to 50%.',
    ],
  },
  {
    year: 'Oct 2021 - Apr 2024',
    title: 'Software Developer',
    company: 'Leena AI',
    description: [
      'Architected WebViews v2.0 repository using React.js with config-driven UI, reducing integration time by 70%.',
      'Built REST APIs on Node.js/Express to integrate third-party applications like Oracle and SuccessFactors.',
      'Collaborated on a unified components library improving developer experience and eliminating redundancy.',
    ],
  },
  {
    year: 'Sep 2018 - Oct 2021',
    title: 'Senior Systems Engineer',
    company: 'Infosys Ltd.',
    description: [
      'Developed custom PL/SQL solution to replace job schedulers, improving performance by 20%.',
      'Implemented data validation logic for 100K+ daily records from third-party systems, ensuring system stability.',
      'Optimized query performance up to 90% by analyzing execution plans and implementing strategic indexing.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills & expertise
// ---------------------------------------------------------------------------

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 'expert', years: 7 },
      { name: 'Next.js', level: 'advanced', years: 4 },
      { name: 'TypeScript', level: 'expert', years: 5 },
      { name: 'TailwindCSS', level: 'advanced', years: 4 },
      { name: 'Redux', level: 'advanced', years: 5 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced', years: 5 },
      { name: 'Express.js', level: 'advanced', years: 5 },
      { name: 'tRPC', level: 'intermediate', years: 2 },
      { name: 'PostgreSQL', level: 'advanced', years: 4 },
      { name: 'MongoDB', level: 'advanced', years: 4 },
    ],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 'expert', years: 7 },
      { name: 'Docker', level: 'intermediate', years: 3 },
      { name: 'AWS', level: 'intermediate', years: 3 },
      { name: 'Sentry', level: 'intermediate', years: 2 },
      { name: 'Datadog', level: 'intermediate', years: 2 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Footer content
// ---------------------------------------------------------------------------

export const footerQuickLinks: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Skills', href: '/#skills' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#about' },
];

export const footerLegalLinks: NavItem[] = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];
