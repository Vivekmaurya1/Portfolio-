import { useEffect, useRef } from 'react';
import { Reveal } from './Utils';

/* ── Data ─────────────────────────────────────────────────────────────────── */
const ROW1 = [
    { name: 'Java', cat: 'LANG', color: '#7ee8fa' },
    { name: 'Spring Boot', cat: 'BACKEND', color: '#4fffb0' },
    { name: 'REST APIs', cat: 'BACKEND', color: '#4fffb0' },
    { name: 'JWT Auth', cat: 'SECURITY', color: '#ff6eb4' },
    { name: 'Microservices', cat: 'BACKEND', color: '#4fffb0' },
    { name: 'MySQL', cat: 'DATABASE', color: '#f9ca24' },
    { name: 'Hibernate', cat: 'DATABASE', color: '#f9ca24' },
    { name: 'Docker', cat: 'DEVOPS', color: '#a29bfe' },
    { name: 'React.js', cat: 'FRONTEND', color: '#3d9eff' },
    { name: 'System Design', cat: 'ARCH', color: '#4fffb0' },
    { name: 'Clean Code', cat: 'PRACTICE', color: '#8a9bb5' },
    { name: 'Spring Security', cat: 'SECURITY', color: '#ff6eb4' },
];

const ROW2 = [
    { name: 'JavaScript', cat: 'LANG', color: '#f9ca24' },
    { name: 'Python', cat: 'LANG', color: '#7ee8fa' },
    { name: 'C / C++', cat: 'LANG', color: '#8a9bb5' },
    { name: 'Git', cat: 'DEVOPS', color: '#a29bfe' },
    { name: 'Vercel', cat: 'DEVOPS', color: '#a29bfe' },
    { name: 'AI Agents', cat: 'AI', color: '#ff9a7b' },
    { name: 'LLM Integration', cat: 'AI', color: '#ff9a7b' },
    { name: 'DSA', cat: 'CS', color: '#7ee8fa' },
    { name: 'DB Optimization', cat: 'DATABASE', color: '#f9ca24' },
    { name: 'Perf Tuning', cat: 'PRACTICE', color: '#8a9bb5' },
    { name: 'IntelliJ IDEA', cat: 'DEVOPS', color: '#a29bfe' },
    { name: 'Agile / Scrum', cat: 'PRACTICE', color: '#8a9bb5' },
];

/* ── Strip component (RAF, no CSS keyframes) ─────────────────────────────── */
const Strip = ({ items, rtl = false, speed = 0.42 }) => {
    const trackRef = useRef(null);
    const xRef = useRef(0);
    const rafRef = useRef(null);
    const paused = useRef(false);
    // Quad-duplicate so loop is invisible
    const tiles = [...items, ...items, ...items, ...items];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        // One frame to measure then set start
        const id = requestAnimationFrame(() => {
            const half = track.scrollWidth / 2;
            xRef.current = rtl ? -half : 0;

            const tick = () => {
                if (!paused.current) {
                    xRef.current -= speed;
                    // Loop: shift back by half when we've scrolled one full copy
                    if (xRef.current <= -(track.scrollWidth / 2)) xRef.current = 0;
                    track.style.transform = `translate3d(${xRef.current}px,0,0)`;
                }
                rafRef.current = requestAnimationFrame(tick);
            };
            rafRef.current = requestAnimationFrame(tick);
        });

        return () => {
            cancelAnimationFrame(id);
            cancelAnimationFrame(rafRef.current);
        };
    }, [rtl, speed]);

    return (
        <div
            className="strip-wrap"
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
        >
            <div ref={trackRef} className="strip-track">
                {tiles.map((s, i) => (
                    <div
                        key={i}
                        className="skill-pill"
                        style={{
                            borderColor: `${s.color}22`,
                            background: `${s.color}08`,
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = `0 6px 22px ${s.color}30`;
                            e.currentTarget.style.borderColor = `${s.color}55`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = `${s.color}22`;
                        }}
                    >
                        <span className="skill-dot" style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }} />
                        <span className="skill-name">{s.name}</span>
                        <span className="skill-cat" style={{ color: s.color }}>{s.cat}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ── Section ─────────────────────────────────────────────────────────────── */
const Skills = () => (
    <section id="skills" style={{ padding: '9rem 0', position: 'relative', zIndex: 2, borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
        <div className="container" style={{ padding: '0 3rem', marginBottom: '4rem' }}>
            <Reveal>
                <div className="eyebrow">03 — Skills</div>
                <h2 className="heading">
                    Capability<br /><span className="hi">Matrix</span>
                </h2>
            </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <Strip items={ROW1} rtl={false} speed={0.45} />
            <Strip items={ROW2} rtl={true} speed={0.38} />
        </div>
    </section>
);

export default Skills;