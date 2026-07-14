import React from 'react';

interface SectionHeaderProps {
  num: string;
  title: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ num, title, light = false }) => (
  <div style={styles.header}>
    <span style={{ ...styles.num, color: light ? 'var(--gold-light)' : 'var(--gold)' }}>{num}</span>
    <h2 style={{ ...styles.title, color: light ? 'var(--cream)' : 'var(--navy)' }}>{title}</h2>
    <div style={{ ...styles.line, background: light ? 'rgba(245,242,235,0.12)' : 'var(--border)' }} />
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  header: { display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' },
  num: { fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.1em', flexShrink: 0 },
  title: { fontFamily: 'var(--serif)', fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', fontWeight: 300, lineHeight: 1.15, flexShrink: 0 },
  line: { flex: 1, height: 1, minWidth: 20 },
};
