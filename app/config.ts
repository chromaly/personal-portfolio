/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   This is the only file you need to edit to personalise the template.
   Every user-facing string and portfolio entry lives here.

   Quick start:
     1. Fill in ME below — every raw fact about you (name, role, email,
        usernames, resume path) lives there ONCE. Everything else in this
        file (PERSON, SITE, SOCIAL_LINKS, CONTACT, FOOTER, project GitHub
        links) is derived from it, so you never have to repeat yourself.
     2. Update EDUCATION, EXPERIENCE, and PROJECTS with your own entries
        (add/remove array items freely — sections render however many
        entries you give them).
     3. Skim HERO and adjust the bio/CTAs if you want.
     4. Drop your resume PDF at public/resume.pdf (or wherever ME.resumePath
        points) so the resume links work (see README.md for details).

   Note: you don't need to type in your site's URL anywhere. It's
   derived automatically below — see SITE_URL.
   ───────────────────────────────────────────────────────────────────── */

// ── Your info (edit this once) ─────────────────────────────────────────
// The single source of truth for anything identifying you. Every other
// section below derives from these fields instead of repeating them.
export const ME = {
  firstName:  'Ryan',
  lastName:   'Co',
  role:       'Software Engineer', // e.g. "Software Engineer", "Data Scientist"
  email:      'ryanco@ucla.edu',
  github:     'chromaly',      // GitHub username only, no URL
  linkedin:   'ryan-co-3a3333317',      // LinkedIn username only, no URL
  resumePath: '/resume.pdf',       // path under public/ — see README.md
};

// Derived URLs, built once from ME so nothing else hardcodes them.
const GITHUB_URL   = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF   = `mailto:${ME.email}`;

// The site's own URL, figured out automatically instead of hardcoded:
//   - On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set for you at build
//     time, so a Vercel deploy needs zero config here.
//   - Locally (pnpm dev / pnpm build), it falls back to localhost.
//   - Deploying elsewhere (or using a custom domain)? Set NEXT_PUBLIC_SITE_URL
//     in your environment (e.g. a .env.local file) to override.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ──────────────────────────────────────────────────────
// Shown in the hero section and used to build the page title below.
export const PERSON = {
  firstName: ME.firstName,
  lastName:  ME.lastName,
  fullName:  `${ME.firstName} ${ME.lastName}`,
  role:      ME.role,
};

// ── Site metadata ─────────────────────────────────────────────────────
// Powers the browser tab title, meta description, canonical URL, and
// social previews. `url` is derived automatically (see SITE_URL above).
export const SITE = {
  url:         SITE_URL,
  title:       `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a ${PERSON.role} at UCLA.`,
};

// ── Navigation links ──────────────────────────────────────────────────
// Shown in the header. Each `href` should match a section's `id` on the
// page (e.g. '#projects' scrolls to <section id="projects">). Add or
// remove entries to match the sections you actually want to show.
export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

// ── Hero section ──────────────────────────────────────────────────────
// The big intro at the top of the page. `ctas` are the call-to-action
// buttons — set `primary: true` for the filled/highlighted button.
export const HERO = {
  greeting: "Hi, I'm",
  bio:      "I'm a computer science student at UCLA passionate about building software that solves real problems. I love working across the stack, from crafting clean UIs to designing scalable back-ends.",
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true  },
    { label: 'Get in touch',       href: '#contact',  primary: false },
  ],
};

// ── Education ─────────────────────────────────────────────────────────
// One entry per school. `minor` and `gpa` are optional — omit them if
// not applicable. `courses` shows as a list of relevant coursework.
export interface EducationEntry {
  school:     string;
  degree:     string;
  minor?:     string;
  gpa?:       string;
  graduation: string;
  courses:    string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school:     'University of California, Los Angeles',
    degree:     'B.S. Computer Science',
    minor:      'Statistics',
    gpa:        '3.82',
    graduation: 'June 2030',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Probability & Statistics',
      'Software Engineering',
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────
// One entry per job/internship/TA position, most recent first. `bullets`
// are rendered as a list of achievements — keep them action-oriented and
// quantify impact where you can. `tech` shows as tag chips.
export interface ExperienceEntry {
  company:   string;
  role:      string;
  location:  string;
  start:     string;
  end:       string;
  bullets:   string[];
  tech:      string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company:  'CyberPatriots',
    role:     'Team Leader',
    location: 'Granada Hills, CA',
    start:    'Aug 2024',
    end:      'May 2026',
    bullets: [
      'Led 30+ students on a cybersecurity team to 7th nationally through weekly training and competition preparation',
      'Developed and taught networking/cybersecurity labs covering TCP/IP, VLANs, routing, and ACLs',
      'Built a Notion-based system to organize training resources and prepare 3 future team leaders',
    ],
    tech: ['Linux', 'Cisco Packet Tracer'],
  },
  {
    company:  'PROJECT: Creation',
    role:     'Co-President & Co-Leader',
    location: 'Granada Hills, CA',
    start:    'Aug 2024',
    end:      'May 2026',
    bullets: [
      'Co-led weekly web development meetings for 20+ students covering HTML, CSS, JavaScript, Bootstrap, and React',
      'Designed hands-on lessons and interactive exercises to teach programming and web development concepts',
      'Grew club from 0 to 20+ active members through recruitment outreach and club fair engagement',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'React'],
  },
];

// ── Projects ──────────────────────────────────────────────────────────
// One entry per project. `github` and `live` are both optional — omit
// whichever doesn't apply. Set `featured: true` to highlight a project
// (check the ProjectsSection component to see how featured entries are
// styled differently, if at all, in this template).
export interface ProjectEntry {
  name:        string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name:        'VoicemailGuard',
    description: 'iOS Application using a pretrained Artificial Intelligence model that determines if a given voicemail is a scam robocall, helping automate the blocking process.',
    tech:        ['Python', 'PyTorch', 'Whisper', 'Swift/SwiftUI'],
    github:      `${GITHUB_URL}/voicemail-spam-classifier`,
    featured:    true,
  },
  {
    name:        'Planner.io',
    description: 'Colorful and aesthetic online planner that lets you create and organize events, set reminders, and save/organize your daily notes. Comes with an iOS companion for push notifications. Built-In AI Chatbot that can assist in creating, editing, and planning!',
    tech:        ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', "Swift/SwiftUI"],
    github:      `${GITHUB_URL}/planner.io`,
    live:        'https://chromaly.github.io/planner.io/',
    featured:    true,
  },
  {
    name:        'Quizlet.io',
    description: 'A Quizlet-style application that allows you to store, manage, and create flashcards that you can study and quiz yourself with. Includes AI capabilities that allow card creations from lecture notes.',
    tech:        ['React', 'TypeScript', 'Tailwind CSS', 'Firebase AI Logic & App Check'],
    github:      `${GITHUB_URL}/quizlet.io`,
    live:        'https://chromaly.github.io/quizlet.io/',
    featured:    true,
  },
];

// ── Social links ──────────────────────────────────────────────────────
// Shown in the header/hero area. Add or remove entries as needed.
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: GITHUB_URL   },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email',    href: EMAIL_HREF   },
];

// ── Contact ───────────────────────────────────────────────────────────
// The Resume link points to ME.resumePath, which is served from whatever
// file you place at public/resume.pdf — see README.md > "Adding Your
// Resume". If you don't want to show a resume link, delete that entry.
export const CONTACT = {
  email: ME.email,
  blurb: "I'm actively looking for internships and new-grad roles starting 2026. If you're working on something interesting or just want to chat, my inbox is always open.",
  links: [
    { label: 'Email',    href: EMAIL_HREF,     display: ME.email                         },
    { label: 'GitHub',   href: GITHUB_URL,     display: `github.com/${ME.github}`        },
    { label: 'LinkedIn', href: LINKEDIN_URL,   display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Resume',   href: ME.resumePath,  display: 'Download PDF'                   },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
// `columns` renders as link groups. The Resume link here reuses
// ME.resumePath, so it stays in sync with CONTACT automatically.
export const FOOTER = {
  tagline: "UCLA Computer Science student building projects for university students.",
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Education',  href: '#education'  },
        { label: 'Contact',    href: '#contact'    },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub',   href: GITHUB_URL     },
        { label: 'LinkedIn', href: LINKEDIN_URL   },
        { label: 'Email',    href: EMAIL_HREF     },
        { label: 'Resume',   href: ME.resumePath  },
      ],
    },
  ],
};
