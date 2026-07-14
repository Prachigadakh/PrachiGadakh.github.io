import type { Experience, Project, SkillGroup, Stat, Certification, ContactLink } from '../types';

export const stats: Stat[] = [
  { num: '2', suffix: '+', label: 'Years Experience' },
  { num: '4', suffix: '', label: 'Implemented Payment Methods' },
  { num: '3', suffix: '', label: 'Projects Built' },
  { num: '1', suffix: '', label: 'Patent' },
];

export const experiences: Experience[] = [
  {
    id: 'ae',
    period: 'Jun 2024 — Present',
    role: 'Associate Software Engineer',
    company: 'Worldline Global Services',
    location: 'Pune, India',
    bullets: [
      'Developed and enhanced <Strong>European payment solutions</Strong>, including PayLater, BLIK, TWINT, and PostFinance Pay, using <Strong>ASP.NET Core Web API</Strong>.',
      'Built and maintained scalable <Strong>microservices</Strong> and <Strong>Angular applications</Strong> for payment processing and merchant onboarding.',
      'Improved <Strong>database performance</Strong> through Dapper and SQL query optimization, while designing merchant provisioning portals.',
      'Executed <Strong>zero-downtime production deployments</Strong> using Octopus Deploy and monitored application health with Grafana.',
      'Developed the <Strong>payment invoice module</Strong> for the Pay Later solution, enabling efficient invoice generation and payment processing workflows, while contributing to <Strong>Agile delivery</Strong> as a <Strong>Scrum Master</Strong>.',
    ],
  }
];

export const skillGroups: SkillGroup[] = [
    {
    id: 'languages',
    index: '01',
    category: 'Languages',
    title: 'Programming',
    skills: ['C#', 'SQL', 'TypeScript'],
  },
  {
    id: 'automation',
    index: '02',
    category: 'Backend Techonlogies',
    title: 'Backend Techonlogies',
    skills: ['ASP.NET Core', 'ASP.NET Core Web API', 'Entity Framework Core', 'Dapper', 'Microservices', 'Rabbitmq'],
    },
  {
    id: 'automation',
    index: '03',
    category: 'Frontend Techonlogies',
    title: 'Frontend Techonlogies',
    skills: ['Angular', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 'devops',
    index: '04',
    category: 'DevOps',
    title: 'CI/CD & Infrastructure',
    skills: ['Gitlab', 'Git'],
  },
  {
    id: 'tools',
    index: '05',
    category: 'Tools & Platforms',
    title: 'Tools & Platforms',
    skills: ['Visual Studio 2022', 'SQL Server Management Studio', 'Grafana', 'Octopus Deploy'],
  },
  {
    id: 'methodologies',
    index: '06',
    category: 'Methodologies',
    title: 'Methodologies',
    skills: ['Agile Scrum'],
  },
  {
    id: 'domain',
    index: '07',
    category: 'Domain',
    title: 'Fintech',
    skills: ['Payment Processing', 'Paylater / Twint', 'Invoicing'],
  },
];

export const projects: Project[] = [
  {
    id: 'fraud',
    num: '001',
    title: 'Employee Management System',
    description:
      'Developed a full-stack Employee Management System using ASP.NET Core Web API, Angular, SQL Server and Entity Framework  Core  to manage employee records through CRUD operations.',
    tech: ['ASP.NET Core Web API', 'Angular', 'EF Core', 'SQL']
  },
  {
    id: 'deepfake',
    num: '002',
    title: 'Food-Order Website',
    description:
      'Developed a responsive food ordering website enabling customers to browse menus and place orders online.',
    tech: ['Angular', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    id: 'mask',
    num: '003',
    title: 'Automated Structural Health Assessment of Bricks',
    description:
      'Developed a machine learning model using CNN and SVM algorithms to predict brick quality and assess structural health.',
    tech: ['Python', 'OpenCV', 'ML', 'DL']
  },
];

export const certifications: Certification[] = [
  { id: 'award', name: 'Excellent Performance & Going the Extra Mile', issuer: 'Worldline Global Services' },
  { id: 'gfg', name: 'Data Structure and Algorithms', issuer: 'Geeks For Geeks' },
  { id: 'patent', name: 'Patent of Automated Structural Health assessment using Machine Learning', issuer: 'Google Cloud' },
  { id: 'btech', name: 'B.Tech in Electronics and Telecommunication', issuer: 'PCCOE Pune · 2020 – 2024' },
];

export const contactLinks: ContactLink[] = [
  { id: 'email', label: 'Email', value: 'prachipgadakh2003@gmail.com', href: 'mailto:prachipgadakh2003@gmail.com', icon: 'mail' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/prachi-gadakh-64a13020a', href: 'https://linkedin.com/in/prachi-gadakh-64a13020a', icon: 'linkedin' },
    { id: 'github', label: 'GitHub', value: 'github.com/Prachigadakh', href: 'https://github.com/Prachigadakh', icon: 'github' },
  { id: 'phone', label: 'Phone', value: '+91 9322804704', href: 'tel:+919322804704', icon: 'phone' },
];
