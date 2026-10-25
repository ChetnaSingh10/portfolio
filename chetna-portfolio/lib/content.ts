/**
 * SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT
 * Edit this file to change what appears on the site.
 */

export const SHOW_PLACEHOLDERS: boolean = process.env.NODE_ENV !== 'production'
export const SHOW_DRAFT_PROBLEMS: boolean = false
export const SHOW_LEADERSHIP: boolean = false

export interface ProjectLink {
  label: string
  url?: string
  isTodo?: boolean
  todoNote?: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  timeline: string
  role: string
  featured?: boolean
  inDevelopment?: boolean
  problem?: {
    text: string
    draft: true
  }
  whatIBuilt: string[]
  architectureOverview?: {
    label: string
    draft: true
    nodes: { id: string; label: string; sub: string }[]
    connections: { from: string; to: string; label?: string }[]
    confirmationNote: string
  }
  stack: string[]
  links: {
    github: ProjectLink
    live?: ProjectLink
    demoMedia?: ProjectLink
  }
  metricTodo?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Certification {
  title: string
  issuer: string
  platform: string
}

export const PERSONAL_INFO = {
  name: 'Chetna Singh',
  headlineRoles: 'Full Stack / Web Developer • MERN Stack',
  status: 'MCA Student',
  institution: 'Lovely Professional University',
  location: 'Phagwara, Punjab, India',
  email: 'singhchetna0955@gmail.com',
  // TODO: replace with your real profile links
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resumePdf: '/Chetna-Singh-Resume.pdf',
  photo: '/portrait-cutout.png',
  lastUpdated: 'October 2026',
  summary:
    'Full Stack / Web Developer focused on the MERN stack and responsive web applications, currently pursuing an MCA at Lovely Professional University.',
}

export const ABOUT: string[] = [
  "Hi! I'm Chetna, an MCA student at Lovely Professional University in Phagwara, Punjab.",
  'I build full stack web apps with the MERN stack, and I care about interfaces that feel friendly and work well on every screen.',
  'I learn by building: a learning platform, a Java chat app, a streaming site, and test suites for e-commerce flows.',
  "I'm open to full-time roles and freelance projects.",
]

export const ROLES: string[] = ['full stack developer', 'mern stack developer', 'web developer', 'mca student']

export const LAST_UPDATED = 'October 2026'

export const PROJECTS: Project[] = [
  {
    id: 'learn-bridge',
    title: 'Learn Bridge',
    subtitle: 'Full Stack Learning Platform',
    timeline: 'Full Stack • MERN',
    role: 'Developer',
    featured: true,
    whatIBuilt: [
      'Developed a MERN-based learning platform with user connections, learning progress tracking, and blog publishing.',
      'Built study-group functionality that lets users create and join groups for collaborative learning.',
      'Implemented core full-stack features including authentication, content sharing, and group collaboration.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: {
      github: { label: 'Source Code', isTodo: true, todoNote: 'Add GitHub URL' },
      live: { label: 'Live Platform', isTodo: true, todoNote: 'Add live URL' },
    },
  },
  {
    id: 'multiuser-chat',
    title: 'Multiuser Chat App',
    subtitle: 'Real-Time Chat Application',
    timeline: 'Desktop • Java Swing',
    role: 'Developer',
    whatIBuilt: [
      'Developed a Java Swing chat application supporting real-time multiuser messaging without requiring users to share personal data.',
    ],
    stack: ['Java', 'Swing'],
    links: {
      github: { label: 'Source Code', isTodo: true, todoNote: 'Add GitHub URL' },
    },
  },
  {
    id: 'myntra-testing',
    title: 'Automation Testing — Myntra',
    subtitle: 'E-commerce Workflow Testing',
    timeline: 'QA • Selenium IDE',
    role: 'QA Tester',
    whatIBuilt: [
      'Tested e-commerce workflows including login, search, and product navigation using Selenium IDE.',
      'Maintained testing documentation, including test plans, bug reports, test summaries, and schedules.',
    ],
    stack: ['Selenium IDE'],
    links: {
      github: { label: 'Test Documentation', isTodo: true, todoNote: 'Add link' },
    },
  },
  {
    id: 'live-streaming',
    title: 'Live Streaming Platform',
    subtitle: 'Streaming Site with Personalised Recommendations',
    timeline: 'Web • PHP + MySQL',
    role: 'Developer',
    whatIBuilt: [
      'Developed a streaming platform with smart search, continue-watching functionality, and personalised dashboards.',
      'Created a hybrid recommendation system using watch history, genre preferences, and trending content.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    links: {
      github: { label: 'Source Code', isTodo: true, todoNote: 'Add GitHub URL' },
    },
  },
]

export const projects = PROJECTS

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Technical Team Member',
    company: 'com.bot',
    period: 'Jun 2026 – Jul 2026',
    location: '',
    bullets: [
      'Handled customer queries and provided timely technical support, helping resolve issues and maintain customer satisfaction.',
      'Developed and optimized automated workflows to streamline operations and reduce manual intervention.',
      'Collaborated with cross-functional teams to identify process gaps and implement workflow improvements.',
      'Documented processes, maintained knowledge-base articles, and contributed to internal team training.',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  { category: 'Languages', skills: ['C', 'C++', 'Java', 'JavaScript'] },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Figma', 'Responsive Design'],
  },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL'] },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Firebase', 'VS Code', 'Linux (Red Hat)', 'Cisco Packet Tracer'],
  },
  {
    category: 'Testing & Concepts',
    skills: ['Selenium IDE', 'Agile Methodology', 'SDLC', 'OOP', 'DBMS'],
  },
]

export const CERTIFICATIONS: Certification[] = [
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', platform: 'July 2025' },
  { title: 'AI For Techies', issuer: 'Be10x', platform: 'December 2024' },
  {
    title: 'Object Oriented Programming using C++',
    issuer: 'Lovely Professional University',
    platform: 'November 2024',
  },
]

export const LEADERSHIP_EXPERIENCE: ExperienceItem[] = []
