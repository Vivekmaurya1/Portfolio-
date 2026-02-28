import { Reveal, Typewriter } from './Utils';

const LINES = [
    '> init backend_engineer.java',
    '> Spring Boot      [loaded]',
    '> REST APIs        [loaded]',
    '> AI Agents        [loaded]',
    '> status: FULLY OPERATIONAL',
];

const Hero = () => {
    const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" style={{
            minHeight: '100svh',          /* safe on mobile browsers */
            display: 'flex', alignItems: 'center',
            padding: 'clamp(5rem, 12vw, 7rem) var(--px) 4rem',
            position: 'relative', zIndex: 2, overflow: 'hidden',
        }}>

            {/* Ghost number — hidden on small screens */}
            <span aria-hidden style={{
                position: 'absolute', right: '-1rem', top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'var(--mono)',
                fontSize: 'clamp(8rem, 22vw, 20rem)',
                fontWeight: 400, lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(79,255,176,0.055)',
                userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.06em',
                display: 'var(--ghost-display, block)',
            }}>01</span>

            <style>{`
        @media (max-width: 500px) {
          [data-ghost] { display: none !important; }
        }
      `}</style>

            <div style={{ maxWidth: '860px', width: '100%', position: 'relative' }}>

                {/* Status */}
                <Reveal>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        fontFamily: 'var(--mono)', fontSize: 'clamp(0.62rem, 1.5vw, 0.72rem)',
                        letterSpacing: '0.18em', color: 'var(--accent)',
                        marginBottom: '1.5rem',
                        flexWrap: 'wrap',
                    }}>
                        <span className="pulse" />
                        SYSTEM ONLINE — BACKEND ENGINEER @ INFOGAIN
                    </div>
                </Reveal>

                {/* Name */}
                <Reveal delay={0.08}>
                    <h1 style={{
                        fontFamily: 'var(--display)',
                        fontSize: 'clamp(3rem, 10vw, 7.8rem)',
                        fontWeight: 700, lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                        color: 'var(--bright)',
                        marginBottom: '1.5rem',
                    }}>
                        <span className="glitch" data-t="Anany">Anany</span>
                        <br />
                        <span style={{ WebkitTextStroke: '1px rgba(230,237,243,0.22)', color: 'transparent' }}>
                            Kumar
                        </span>
                        <br />
                        Maurya.
                    </h1>
                </Reveal>

                {/* Tagline */}
                <Reveal delay={0.16}>
                    <p style={{
                        fontFamily: 'var(--body)',
                        fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
                        color: 'var(--muted)', maxWidth: '560px',
                        lineHeight: 1.7, marginBottom: '2.25rem',
                    }}>
                        Building <span style={{ color: 'var(--accent)' }}>scalable backend systems</span> and
                        AI-driven platforms with Spring Boot. Architecting production-grade services at{' '}
                        <span style={{ color: 'var(--bright)', borderBottom: '1px solid rgba(230,237,243,0.18)' }}>
                            Infogain
                        </span>.
                    </p>
                </Reveal>

                {/* Terminal */}
                <Reveal delay={0.24}>
                    <div style={{
                        background: 'rgba(79,255,176,0.03)',
                        border: '1px solid rgba(79,255,176,0.1)',
                        borderRadius: '3px',
                        padding: 'clamp(1rem, 3vw, 1.4rem) clamp(1rem, 3vw, 1.75rem)',
                        marginBottom: '2.25rem',
                        maxWidth: '480px',
                    }}>
                        <div style={{ display: 'flex', gap: '6px', marginBottom: '0.85rem' }}>
                            {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                                <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.7 }} />
                            ))}
                        </div>
                        <Typewriter lines={LINES} />
                    </div>
                </Reveal>

                {/* CTAs */}
                <Reveal delay={0.32}>
                    <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                        <span className="btn btn-solid" onClick={() => go('projects')}>
                            View Work <span>→</span>
                        </span>
                        <a href="https://github.com/Vivekmaurya1" target="_blank" rel="noreferrer" className="btn btn-ghost">
                            GitHub
                        </a>
                        <span className="btn btn-ghost" onClick={() => go('contact')}>
                            Contact
                        </span>
                    </div>
                </Reveal>

                {/* Info strip — visible only on larger screens */}
                <Reveal delay={0.4}>
                    <div style={{
                        marginTop: '3rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex', gap: '2rem', flexWrap: 'wrap',
                    }}>
                        {[
                            ['vivekmaurya8273@gmail.com', 'MAIL'],
                            ['+91 9719930793', 'TEL'],
                            ['Greater Noida, India', 'LOC'],
                        ].map(([v, l]) => (
                            <div key={l}>
                                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--accent)', letterSpacing: '0.14em', marginBottom: '0.2rem' }}>{l}</p>
                                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>{v}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Hero;