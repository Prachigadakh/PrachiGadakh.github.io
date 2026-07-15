import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavScroll } from '../../hooks/useNavScroll';
import { useIsMobile } from '../../hooks/useMediaQuery';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Navbar: React.FC = () => {
  const scrolled = useNavScroll();
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  const hPad = isMobile ? '1.25rem' : scrolled ? '0.8rem 4rem' : '1.25rem 4rem';

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'rgba(245,242,235,0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(13,27,42,0.12)',
        }}
        animate={{
          padding: isMobile
            ? (scrolled ? '0.85rem 1.25rem' : '1.1rem 1.25rem')
            : (scrolled ? '0.8rem 4rem' : '1.25rem 4rem'),
        }}
        transition={{ duration: 0.3 }}
      >
        <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} style={styles.logo}>
          Prachi<span style={{ color: 'var(--gold)' }}>.</span>Gadakh
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={styles.navLinks}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}><NavLink href={href} label={label} /></li>
            ))}
            <li>
              <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} style={styles.navCta}>
                Contact
              </a>
            </li>
          </ul>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button onClick={() => setMobileOpen(true)} style={styles.hamburger} aria-label="Open menu">
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
          </button>
        )}
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={styles.mobileOverlay}
          >
            <button onClick={() => setMobileOpen(false)} style={styles.mobileClose}>✕ Close</button>
            {[...NAV_LINKS, { href: '#contact', label: 'Contact' }].map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => { scrollTo(e, href); setMobileOpen(false); }}
                style={styles.mobileLink}
                whileHover={{ color: 'var(--gold)' }}
                whileTap={{ scale: 0.97 }}
              >
                {label}
              </motion.a>
            ))}
            <a
              href="/Prachi_Gadakh_Resume.pdf"
              download="Prachi_Gadakh_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              style={styles.mobileResume}
            >
              ↓ Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={(e) => scrollTo(e, href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...styles.navLink, color: hovered ? 'var(--navy)' : 'var(--muted)', position: 'relative' }}
    >
      {label}
      <motion.span
        style={styles.navUnderline}
        animate={{ right: hovered ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </a>
  );
};

const styles: Record<string, React.CSSProperties> = {
  logo: {
    fontFamily: 'var(--serif)', fontSize: '1.35rem', fontWeight: 500,
    color: 'var(--navy)', textDecoration: 'none', letterSpacing: '0.01em',
  },
  navLinks: { display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' },
  navLink: {
    fontFamily: 'var(--mono)', fontSize: '0.7rem', fontWeight: 400, textDecoration: 'none',
    letterSpacing: '0.08em', textTransform: 'uppercase' as const, transition: 'color 0.2s',
  },
  navUnderline: { position: 'absolute', bottom: -3, left: 0, height: 1, background: 'var(--gold)' },
  navCta: {
    fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, color: 'var(--navy)', textDecoration: 'none',
    border: '1px solid rgba(13,27,42,0.22)', padding: '0.45rem 1.2rem',
  },
  hamburger: {
    display: 'flex', flexDirection: 'column' as const, gap: 5,
    cursor: 'pointer', background: 'none', border: 'none', padding: '4px 0',
  },
  hamburgerLine: { display: 'block', width: 24, height: 1.5, background: 'var(--navy)' },
  mobileOverlay: {
    position: 'fixed', inset: 0, background: 'var(--cream)', zIndex: 99,
    display: 'flex', flexDirection: 'column' as const,
    justifyContent: 'center', alignItems: 'center', gap: '2rem',
  },
  mobileClose: {
    position: 'absolute' as const, top: '1.5rem', right: '1.5rem',
    fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.1em',
    textTransform: 'uppercase' as const, color: 'var(--muted)',
    background: 'none', border: 'none', cursor: 'pointer',
  },
  mobileLink: {
    fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 300,
    color: 'var(--navy)', textDecoration: 'none', letterSpacing: '0.02em',
  },
  mobileResume: {
    fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em',
    textTransform: 'uppercase' as const, color: 'var(--gold)', textDecoration: 'none',
    marginTop: '0.5rem',
  },
};
