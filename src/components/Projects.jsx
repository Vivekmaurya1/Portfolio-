import { Reveal } from './Utils';

const PROJECTS = [
    {
        num: '01', title: 'Career Planner AI',
        status: 'LIVE', statusColor: '#4fffb0',
        desc: 'Production-ready AI-powered career planning platform that generates personalised roadmaps based on user input, skill level, and career goals.',
        highlights: [
            'JWT authentication & role-based access',
            'Spring Boot layered architecture (Controller → Service → Repository)',
            'AI agent logic for roadmap generation',
            'Database query optimisation for performance',
        ],
        tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker', 'Vercel'],
        link: 'https://career-planner-agent-frontend.vercel.app/',
        accent: '#4fffb0',
    },
    {
        num: '02', title: 'AI Interview Simulator',
        status: 'IN PROGRESS', statusColor: '#f9ca24',
        desc: 'Intelligent platform providing real-time AI-based interview simulation, scoring, and in-depth performance evaluation powered by LLM integration.',
        highlights: [
            'Agent-based conversational backend',
            'Context-aware evaluation & scoring logic',
            'Real-time LLM response generation',
            'Performance tracking system',
        ],
        tech: ['Spring Boot', 'LLM Integration', 'AI Agents', 'REST API'],
        accent: '#f9ca24',
    },
    {
        num: '03', title: 'Graph Algorithm Visualizer',
        status: 'COMPLETED', statusColor: '#3d9eff',
        desc: 'Real-time visualisation and performance-comparison engine for advanced graph algorithms — DFS, BFS, Dijkstra, A*.',
        highlights: [
            'DFS, BFS, Dijkstra, A* fully implemented',
            'Real-time step-by-step execution visualisation',
            'Algorithm performance comparison engine',
        ],
        tech: ['JavaScript', 'React', 'Algorithms', 'Data Structures'],
        accent: '#3d9eff',
    },
];

const Projects = () => (
    <section id="projects" className="section">
        <div className="container">

            <Reveal>
                <div className="eyebrow">04 — Projects</div>
                <h2 className="heading" style={{ marginBottom: '3.5rem' }}>
                    System<br /><span className="hi">Implementations</span>
                </h2>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {PROJECTS.map((p, i) => (
                    <Reveal key={i} delay={i * 0.07}>
                        <div className="proj-card" style={{ '--card-accent': p.accent }}>

                            {/* Header row */}
                            <div style={{
                                display: 'flex', justifyContent: 'space-between',
                                alignItems: 'flex-start', gap: '1rem',
                                marginBottom: '1rem', flexWrap: 'wrap',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                    <span style={{
                                        fontFamily: 'var(--mono)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                                        fontWeight: 400, color: 'rgba(255,255,255,0.04)', lineHeight: 1,
                                    }}>{p.num}</span>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.3rem' }}>
                                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.statusColor, boxShadow: `0 0 7px ${p.statusColor}`, display: 'inline-block' }} />
                                            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.14em', color: p.statusColor }}>{p.status}</span>
                                        </div>
                                        <h3 style={{
                                            fontFamily: 'var(--display)', fontWeight: 700,
                                            fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
                                            color: 'var(--bright)', letterSpacing: '-0.02em',
                                        }}>{p.title}</h3>
                                    </div>
                                </div>

                                {p.link && (
                                    <a href={p.link} target="_blank" rel="noreferrer" style={{
                                        fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)',
                                        textDecoration: 'none', padding: '0.45rem 1rem',
                                        border: '1px solid rgba(79,255,176,0.2)', borderRadius: '2px',
                                        transition: 'border-color 0.3s, background 0.3s', flexShrink: 0,
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(79,255,176,0.07)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(79,255,176,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                                    >LIVE ↗</a>
                                )}
                            </div>

                            {/* Description */}
                            <p style={{ color: 'var(--muted)', lineHeight: 1.72, marginBottom: '1.4rem', fontSize: 'clamp(0.85rem, 1.5vw, 0.93rem)' }}>
                                {p.desc}
                            </p>

                            {/* Highlights + Tech — responsive grid */}
                            <div className="proj-details">
                                <div>
                                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.16em', color: 'var(--muted)', marginBottom: '0.65rem' }}>HIGHLIGHTS</p>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                        {p.highlights.map((h, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: 'clamp(0.78rem, 1.4vw, 0.82rem)', color: 'var(--text)', lineHeight: 1.55 }}>
                                                <span style={{ color: p.accent, flexShrink: 0 }}>▹</span>{h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.16em', color: 'var(--muted)', marginBottom: '0.65rem' }}>TECH STACK</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                                        {p.tech.map(t => (
                                            <span key={t} className="tag" style={{ borderColor: `${p.accent}28`, color: p.accent, background: `${p.accent}08` }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;