export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  tech: string[];
}

export interface SkillGroup {
  id: string;
  index: string;
  category: string;
  title: string;
  skills: string[];
}

export interface Stat {
  num: string;
  suffix: string;
  label: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'linkedin' | 'github' | 'phone';
}
