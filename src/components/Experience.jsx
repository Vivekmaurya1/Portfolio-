import { Reveal, RevealLeft, RevealRight } from './Utils';

const DUTIES = [
    'Architecting scalable backend services using Spring Boot',
    'Designing production-grade REST APIs with optimised response times',
    'Implementing JWT-based authentication and role-based access control',
    'Handling large datasets with optimised query strategies',
    'Contributing to performance tuning in an Agile enterprise environment',
];

const STACK = [
    { cat: 'BACKEND', items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JWT Auth'] },
    { cat: 'FRONTEND', items: ['React.js', 'JavaScript', 'HTML / CSS'] },
    { cat: 'DATABASE', items: ['MySQL', 'Hibernate / JPA'] },
    { cat: 'DEVOPS', items: ['Docker', 'Git', 'Vercel', 'IntelliJ IDEA'] },
    { cat: 'LANGUAGES', items: ['Java', 'JavaScript', 'Python', 'C / C++'] },
];

const Experience = () => (
    <section id="experience" className="section">
        <div className="container">

            <Reveal>
                <div className="eyebrow">02 — Experience</div>
                <h2 className="heading" style={{ marginBottom: '3.5rem' }}>
                    Professional<br /><span className="hi">Timeline</span>
                </h2>
            </Reveal>

            <div className="two-col">

                {/* Timeline entry */}
                <RevealLeft>
                    <div className="tl-item">
                        <div className="tl-dot" />
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                            APR 2025 – PRESENT
                        </p>
                        <h3 style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: 'var(--bright)', marginBottom: '0.2rem' }}>
                            Software Engineer
                        </h3>
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                            Infogain · Full-Time
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {DUTIES.map((d, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: 'clamp(0.83rem, 1.5vw, 0.88rem)', color: 'var(--muted)', lineHeight: 1.6 }}>
                                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.12rem' }}>▹</span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievement badge */}
                    <div style={{
                        marginTop: '0.5rem', padding: '1.1rem 1.4rem',
                        background: 'rgba(79,255,176,0.03)',
                        border: '1px solid rgba(79,255,176,0.12)',
                        borderRadius: '3px',
                        display: 'flex', alignItems: 'center', gap: '1rem',
                    }}>
                        <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>🏆</span>
                        <div>
                            <p style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--bright)' }}>SIH Semi-Finalist</p>
                            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)' }}>Smart India Hackathon</p>
                        </div>
                    </div>
                </RevealLeft>

                {/* Tech stack */}
                <RevealRight delay={0.1}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '2rem' }}>
                        &gt; TECH_STACK
                    </p>
                    {STACK.map(({ cat, items }) => (
                        <div key={cat} style={{ marginBottom: '1.4rem' }}>
                            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.16em', marginBottom: '0.55rem' }}>{cat}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                                {items.map(i => <span key={i} className="tag">{i}</span>)}
                            </div>
                        </div>
                    ))}
                </RevealRight>

            </div>
        </div>
    </section>
);

export default Experience;