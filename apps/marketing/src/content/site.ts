/**
 * Site content for the InSimEd marketing page.
 * Sourced from the live site (insimeducation.com) — edit copy here, not in JSX.
 */

export const site = {
  name: "InSimEd",
  fullName: "Industry Simulation Education",
  tagline:
    "Real-World Industry Simulation Competitions, Events, and Learning Opportunities for Students",
  email: "contact@insimeducation.com",
  cta: { label: "Register Now", href: "#register" },

  nav: [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Programs", href: "#programs" },
    { label: "Why InSimEd", href: "#why" },
    { label: "Contact", href: "#register" },
  ],

  hero: {
    eyebrow: "Industry · Simulation · Education",
    heading: "Where students tackle real-world industry challenges.",
    body: "High-tempo industry simulation competitions and events that build academic and business skills — and ignite career aspirations.",
  },

  whatWeDo: {
    title: "What We Do",
    body: "We provide students a unique opportunity to develop their academic and business skills while fostering and igniting career aspirations, through unparalleled industry simulation events.",
  },

  programs: [
    {
      level: "High School",
      title: "Space Design Competitions",
      body: "High-tempo competitions designed specifically to challenge students and prepare them for their futures, with scholarship opportunities and access to previous competition work.",
      status: "available" as const,
    },
    {
      level: "Middle School",
      title: "Industry Workshops",
      body: "Workshops and team-based activities that drop students into real-world industry scenarios.",
      status: "coming-soon" as const,
    },
    {
      level: "Elementary School",
      title: "Young Achiever Challenges",
      body: "Small-group competitions designed for young achievers taking their first steps into team problem-solving.",
      status: "coming-soon" as const,
    },
  ],

  why: {
    title: "Why InSimEd?",
    points: [
      {
        title: "Real-world scenarios",
        body: "Students solve authentic industry problems, not textbook exercises.",
      },
      {
        title: "Team-based learning",
        body: "Collaboration, leadership, and communication built into every event.",
      },
      {
        title: "Career aspiration",
        body: "Hands-on exposure that connects classroom skills to future careers.",
      },
      {
        title: "Scholarship opportunities",
        body: "Top performers earn recognition and scholarship pathways.",
      },
    ],
  },

  testimonial: {
    quote:
      "I've never seen my daughter so engaged and excited to be learning. What an opportunity for her!",
    attribution: "Parent, 2019 SpaceSet International Finals",
  },

  footer: {
    rights: "© 2024 Industry Simulation Education",
  },
} as const;

export type Program = (typeof site.programs)[number];
