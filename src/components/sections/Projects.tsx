import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIsMobile, useIsTablet } from '../../hooks/useMediaQuery';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({ x: (e.clientX - rect.left) / rect.width - 0.5, y: (e.clientY - rect.top) / rect.height - 0.5 });
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        ...styles.card,
        borderColor: hovered ? 'var(--gold)' : 'rgba(245,242,235,0.1)',
        transform: hovered && !isMobile
          ? `translateY(-4px) rotateX(${-tilt.y * 5}deg) rotateY(${tilt.x * 5}deg)`
          : 'none',
        transformStyle: 'preserve-3d' as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
    >
      <motion.div style={styles.bottomBar} animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
      <div style={styles.num}>{project.num}</div>
      <div style={styles.title}>{project.title}</div>
      <p style={styles.desc}>{project.description}</p>
      <div style={styles.tech}>
        {project.tech.map((t) => <span key={t} style={styles.techBadge}>{t}</span>)}
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)';

  return (
    <section id="projects" style={{ ...styles.section, padding: isMobile ? '4rem 1.25rem' : '5.5rem 4rem' }}>
      <SectionHeader num="04" title="Projects" light />
      <div style={{ ...styles.grid, gridTemplateColumns: cols }}>
        {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--navy)' },
  grid: { display: 'grid', gap: '1.5rem' },
  card: { border: '1px solid', padding: '2rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.4s, transform 0.3s', cursor: 'default' },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'var(--gold)', transformOrigin: 'left' },
  num: { fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: '1.25rem' },
  title: { fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.75rem', lineHeight: 1.3 },
  desc: { fontSize: '0.875rem', color: 'rgba(245,242,235,0.5)', lineHeight: 1.75, marginBottom: '1.5rem' },
  tech: { display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem', marginBottom: '1.5rem' },
  techBadge: { fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.06em', color: 'var(--gold-light)', border: '1px solid rgba(184,150,62,0.3)', padding: '0.2rem 0.6rem' }
};
