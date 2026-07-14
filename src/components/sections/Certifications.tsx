import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { certifications } from '../../data/portfolio';
import type { Certification } from '../../types';

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: 'var(--gold)', flexShrink: 0 }}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const CertItem: React.FC<{ cert: Certification; index: number; isMobile: boolean }> = ({ cert, index, isMobile }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ ...styles.item, padding: isMobile ? '1rem 1rem' : '1.4rem 2rem' }}
      initial={{ opacity: 0, x: -10 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ background: 'var(--cream)' }}
    >
      <div style={styles.badge}><StarIcon /></div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={styles.name}>{cert.name}</div>
        {isMobile && <div style={styles.issuerMobile}>{cert.issuer}</div>}
      </div>
      {!isMobile && <div style={styles.issuer}>{cert.issuer}</div>}
    </motion.div>
  );
};

export const Certifications: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section id="certifications" style={{ ...styles.section, padding: isMobile ? '4rem 1.25rem' : '5.5rem 4rem' }}>
      <SectionHeader num="05" title="Credentials" />
      <div style={styles.list}>
        {certifications.map((cert, i) => (
          <CertItem key={cert.id} cert={cert} index={i} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--cream-dark)' },
  list: { display: 'flex', flexDirection: 'column' as const, border: '1px solid var(--border)' },
  item: { display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--border)', transition: 'background 0.2s', cursor: 'default' },
  badge: { width: 36, height: 36, minWidth: 36, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  name: { fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)', lineHeight: 1.4 },
  issuer: { fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--muted)', whiteSpace: 'nowrap' as const },
  issuerMobile: { fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--muted)', marginTop: '0.2rem' },
};
