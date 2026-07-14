import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { experiences } from '../../data/portfolio';
import type { Experience as ExperienceType } from '../../types';

const TimelineItem: React.FC<{ exp: ExperienceType; index: number; isMobile: boolean }> = ({ exp, index, isMobile }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ ...styles.item, paddingBottom: index < 2 ? '3.5rem' : 0 }}
      initial={{ opacity: 0, x: -20 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div style={styles.dot} />
      <div style={styles.date}>{exp.period}</div>
      <div style={{ ...styles.role, fontSize: isMobile ? '1.25rem' : '1.5rem' }}>{exp.role}</div>
      <div style={styles.company}>{exp.company} · {exp.location}</div>
      <ul style={styles.bullets}>
        {exp.bullets.map((bullet, i) => (
          <li key={i} style={styles.bullet} dangerouslySetInnerHTML={{ __html: bullet }} />
        ))}
      </ul>
    </motion.div>
  );
};

export const ExperienceSection: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section id="experience" style={{ ...styles.section, padding: isMobile ? '4rem 1.25rem' : '5.5rem 4rem' }}>
      <SectionHeader num="02" title="Experience" />
      <div style={{ ...styles.timeline, paddingLeft: isMobile ? '1.75rem' : '2.5rem' }}>
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.id} exp={exp} index={i} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--cream-dark)' },
  timeline: { position: 'relative', borderLeft: '1px solid rgba(13,27,42,0.22)' },
  item: { position: 'relative' },
  dot: { position: 'absolute', left: '-2.4rem', top: 8, width: 9, height: 9, borderRadius: '50%', background: 'var(--gold)', border: '2px solid var(--cream-dark)' },
  date: { fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase' as const, marginBottom: '0.5rem' },
  role: { fontFamily: 'var(--serif)', fontWeight: 400, color: 'var(--navy)', marginBottom: '0.15rem' },
  company: { fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'var(--muted)', textTransform: 'uppercase' as const, marginBottom: '1.1rem' },
  bullets: { listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: '0.6rem' },
  bullet: { fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, paddingLeft: '1.2rem', position: 'relative' as const },
};
