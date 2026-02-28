import { useEffect, useRef, useState, useCallback } from 'react';

/* ── useReveal — attach to any element, adds .visible when in viewport ─── */
export const useReveal = (threshold = 0.12) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return ref;
};

/* ── Reveal wrapper components ──────────────────────────────────────────── */
export const Reveal = ({ children, delay = 0, className = '', style = {} }) => {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={{ transitionDelay: `${delay}s`, ...style }}
        >
            {children}
        </div>
    );
};

export const RevealLeft = ({ children, delay = 0, style = {} }) => {
    const ref = useReveal();
    return (
        <div ref={ref} className="reveal-left" style={{ transitionDelay: `${delay}s`, ...style }}>
            {children}
        </div>
    );
};

export const RevealRight = ({ children, delay = 0, style = {} }) => {
    const ref = useReveal();
    return (
        <div ref={ref} className="reveal-right" style={{ transitionDelay: `${delay}s`, ...style }}>
            {children}
        </div>
    );
};

/* ── Animated counter ────────────────────────────────────────────────────── */
export const Counter = ({ target, suffix = '' }) => {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            obs.disconnect();
            let start = 0;
            const step = Math.ceil(target / 45);
            const id = setInterval(() => {
                start += step;
                if (start >= target) { setVal(target); clearInterval(id); }
                else setVal(start);
            }, 30);
        }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [target]);
    return <span ref={ref}>{val}{suffix}</span>;
};

/* ── Terminal typewriter ─────────────────────────────────────────────────── */
export const Typewriter = ({ lines }) => {
    const [rows, setRows] = useState([]);
    const [li, setLi] = useState(0);
    const [ci, setCi] = useState(0);

    useEffect(() => {
        if (li >= lines.length) return;
        if (ci <= lines[li].length) {
            const t = setTimeout(() => {
                setRows(prev => { const c = [...prev]; c[li] = lines[li].slice(0, ci); return c; });
                setCi(n => n + 1);
            }, 32);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => { setLi(n => n + 1); setCi(0); }, 180);
        return () => clearTimeout(t);
    }, [li, ci, lines]);

    return (
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', lineHeight: 1.9 }}>
            {lines.map((line, i) => {
                const colors = ['var(--accent)', 'var(--text)', 'var(--accent2)', 'var(--text)', 'var(--accent)'];
                return (
                    <div key={i} style={{ color: colors[i % colors.length], opacity: rows[i] !== undefined ? 1 : 0 }}>
                        {i < li ? line : (rows[i] || '')}
                        {i === li && <span className="cursor">▌</span>}
                    </div>
                );
            })}
        </div>
    );
};