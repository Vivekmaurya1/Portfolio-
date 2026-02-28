import { Reveal, RevealLeft, RevealRight, Counter } from './Utils';

const STRENGTHS = [
    'Advanced DSA', 'Spring Boot',
    'System Design', 'JWT / Security',
    'DB Optimization', 'Clean Architecture',
    'Docker / DevOps', 'AI Integration',
];

const About = () => (
    <section id="about" className="section">
        <div className="container">

            <Reveal>
                <div className="eyebrow">01 — About</div>
                <h2 className="heading" style={{ marginBottom: '4.5rem' }}>
                    System<br /><span className="hi">Architecture</span>
                </h2>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                {/* Bio */}
                <RevealLeft>
                    <div style={{ lineHeight: 1.85, fontSize: '1.02rem', color: 'var(--muted)' }}>
                        <p style={{ marginBottom: '1.4rem' }}>
                            I'm a <strong style={{ color: 'var(--bright)', fontWeight: 600 }}>Backend Engineer at Infogain</strong> (April 2025 – Present),
                            building production-grade systems with Java and Spring Boot.
                        </p>
                        <p style={{ marginBottom: '1.4rem' }}>
                            My focus is <strong style={{ color: 'var(--accent)' }}>system thinking</strong> — not just shipping features.
                            I architect REST APIs that scale, write optimised queries that perform in milliseconds,
                            and integrate AI agent logic into robust backend platforms.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Semi-finalist at <strong style={{ color: 'var(--bright)' }}>Smart India Hackathon</strong>.
                            Computer Engineering graduate with CGPA 8.05.
                        </p>
                        <blockquote style={{
                            borderLeft: '2px solid var(--accent)',
                            paddingLeft: '1.25rem',
                            fontFamily: 'var(--mono)',
                            fontSize: '0.78rem',
                            color: 'var(--text)',
                            fontStyle: 'italic',
                            lineHeight: 1.9,
                        }}>
                            "I don't just build features.<br />
                            I build systems that scale,<br />
                            perform, and stay maintainable."
                        </blockquote>
                    </div>
                </RevealLeft>

                {/* Skills grid + stats */}
                <RevealRight delay={0.12}>
                    <div>
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '1.25rem' }}>
                            &gt; CORE_STRENGTHS
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                            {STRENGTHS.map(s => (
                                <div key={s} className="card" style={{ padding: '0.8rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text)' }}>{s}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
                            {[['3', '+', 'Projects'], ['8.05', '', 'CGPA'], ['1', '', 'Company']].map(([n, s, l]) => (
                                <div key={l} className="stat">
                                    <div className="stat-num"><Counter target={parseFloat(n)} suffix={s} /></div>
                                    <div className="stat-label">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealRight>

            </div>
        </div>
    </section>
);

export default About;