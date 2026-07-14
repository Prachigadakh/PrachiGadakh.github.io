import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { stats } from '../../data/portfolio';
import type { Stat } from '../../types';

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={styles.statCard}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ background: 'var(--cream-dark)' }}
    >
      <div style={styles.statNum}>
        {stat.num}{stat.suffix && <span style={styles.statSuffix}>{stat.suffix}</span>}
      </div>
      <div style={styles.statLabel}>{stat.label}</div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const isMobile = useIsMobile();
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" style={{ ...styles.section, padding: isMobile ? '4rem 1.25rem' : '5.5rem 4rem' }}>
      <SectionHeader num="01" title="About" />
      <div style={{ ...styles.grid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2.5rem' : '5rem' }}>
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, x: -20 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={styles.para}>
            I'm an Associate Software Engineer at <strong>Worldline Global Services</strong>, specializing 
            in developing and enhancing European payment solutions such as PayLater, TWINT, BLIK, and PostFinance Pay. With a B.Tech in Electronics and Telecomminucation
            from PCCOE Pune, I combine engineering fundamentals with deep fintech domain knowledge.
          </p>
          <p style={styles.para}>
            My expertise includes building scalable backend services using <strong>ASP.NET Core Web API</strong>, designing and 
            maintaining microservices, developing <strong>Angular-based applications</strong>, and optimizing database interactions 
            using <strong>Entity Framework Core</strong> and <strong>SQL</strong>. I contribute to secure and reliable <strong>payment processing</strong> workflows,merchant onboarding solutions,
            and payment invoice modules.
          </p>
          <p style={styles.para}>
            I am passionate about building <strong>impactful software solutions</strong>, exploring <strong>modern technologies</strong>, 
            and solving complex engineering challenges.
          </p>
        </motion.div>

        <div style={styles.statsGrid}>
          {stats.map((stat, i) => <StatCard key={stat.num + stat.label} stat={stat} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: { background: 'var(--cream)' },
  grid: { display: 'grid', alignItems: 'start' },
  para: { color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' },
  statCard: { background: 'var(--cream)', padding: '1.75rem', transition: 'background 0.4s', cursor: 'default' },
  statNum: { fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--navy)', lineHeight: 1, marginBottom: '0.4rem' },
  statSuffix: { color: 'var(--gold)', fontSize: '1.2rem' },
  statLabel: { fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--muted)' },
};
