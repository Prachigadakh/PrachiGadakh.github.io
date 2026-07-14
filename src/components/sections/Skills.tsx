import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { skillGroups } from '../../data/portfolio';
import type { SkillGroup } from '../../types';

const SkillCard: React.FC<{ group: SkillGroup; index: number }> = ({ group, index }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ borderColor: 'rgba(13,27,42,0.22)' }}
    >
      <div style={styles.cardIndex}>{group.index} / {group.category}</div>
      <div style={styles.cardTitle}>{group.title}</div>
      <div style={styles.tags}>
        {group.skills.map((skill) => <span key={skill} style={styles.tag}>{skill}</span>)}
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)';

  return (
    <section id="skills" style={{ ...styles.section, padding: isMobile ? '4rem 1.25rem' : '5.5rem 4rem' }}>
      <SectionHeader num="03" title="Technical Skills" />
      <div style={{ ...styles.grid, gridTemplateColumns: cols }}>
        {skillGroups.map((group, i) => <SkillCard key={group.id} group={group} index={i} />)}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--cream)' },
  grid: { display: 'grid', gap: '1.5rem' },
  card: { border: '1px solid var(--border)', padding: '2rem', transition: 'border-color 0.3s', cursor: 'default' },
  cardIndex: { fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '0.6rem' },
  cardTitle: { fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--navy)', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' },
  tags: { display: 'flex', flexWrap: 'wrap' as const, gap: '0.5rem' },
  tag: { fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.05em', color: 'var(--navy-light)', background: 'var(--cream-dark)', padding: '0.3rem 0.75rem', border: '1px solid var(--border)' },
};
