import { Reveal, Typewriter } from './Utils';

const LINES = [
    '> init backend_engineer.java',
    '> Spring Boot      [loaded]',
    '> REST APIs        [loaded]',
    '> AI Agents        [loaded]',
    '> status: FULLY OPERATIONAL',
];

const Hero = () => {
    const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '0 3rem',
            position: 'relative', zIndex: 2,
        }}>
            {/* Large ghost number */}
            <span aria-hidden style={{
                position: 'absolute', right: '2rem', top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'var(--mono)',
                fontSize: 'clamp(10rem, 22vw, 20rem)',
                fontWeight: 400, lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(79,255,176,0.06)',
                userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.06em',
            }}>01</span>

            <div style={{ maxWidth: '860px', paddingTop: '6rem' }}>

                {/* Status line */}
                <Reveal>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        fontFamily: 'var(--mono)', fontSize: '0.7rem',
                        letterSpacing: '0.2em', color: 'var(--accent)',
                        marginBottom: '1.75rem',
                    }}>
                        <span className="pulse" />
                        SYSTEM ONLINE — BACKEND ENGINEER @ INFOGAIN
                    </div>
                </Reveal>

                {/* Name */}
                <Reveal delay={0.08}>
                    <h1 style={{
                        fontFamily: 'var(--display)',
                        fontSize: 'clamp(3.2rem, 10vw, 7.8rem)',
                        fontWeight: 700, lineHeight: 0.88,
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

                {/* Sub */}
                <Reveal delay={0.16}>
                    <p style={{
                        fontFamily: 'var(--body)',
                        fontSize: 'clamp(1rem, 2.4vw, 1.3rem)',
                        color: 'var(--muted)',
                        maxWidth: '580px', lineHeight: 1.65,
                        marginBottom: '2.5rem',
                    }}>
                        Building <span style={{ color: 'var(--accent)' }}>scalable backend systems</span> and
                        AI-driven platforms with Spring Boot.
                        Currently architecting production-grade services at{' '}
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
                        padding: '1.4rem 1.75rem',
                        marginBottom: '2.5rem',
                        maxWidth: '480px',
                    }}>
                        {/* Terminal top bar */}
                        <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem' }}>
                            {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                                <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                            ))}
                        </div>
                        <Typewriter lines={LINES} />
                    </div>
                </Reveal>

                {/* CTAs */}
                <Reveal delay={0.32}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
            </div>

            {/* Bottom-right info strip */}
            <div style={{
                position: 'absolute', right: '3rem', bottom: '3rem',
                display: 'flex', flexDirection: 'column', gap: '0.45rem', alignItems: 'flex-end',
            }}>
                {[
                    ['vivekmaurya8273@gmail.com', 'MAIL'],
                    ['+91 9719930793', 'TEL'],
                    ['Greater Noida, India', 'LOC'],
                ].map(([v, l]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--muted)' }}>{v}</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--accent)', letterSpacing: '0.1em', minWidth: '36px' }}>{l}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;