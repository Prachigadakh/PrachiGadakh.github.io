import React from 'react';
import { useIsMobile } from '../../hooks/useMediaQuery';

export const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <footer style={{
      ...styles.footer,
      padding: isMobile ? '2rem 1.25rem' : '2.5rem 4rem',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left',
      gap: isMobile ? '0.75rem' : '1rem',
    }}>
      <span style={styles.logo}>Prachi<span style={{ color: 'var(--gold)' }}>.</span>Gadakh</span>
      <p style={styles.text}>© 2026 Prachi Gadakh · Associate Software Engineer · Pune, India</p>
      <p style={styles.text}>PrachiGadakh.github.io</p>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: 'var(--navy)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    flexWrap: 'wrap' as const,
  },
  logo: { fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 300, color: 'rgba(245,242,235,0.6)' },
  text: { fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.08em', color: 'rgba(245,242,235,0.35)', textTransform: 'uppercase' as const },
};
