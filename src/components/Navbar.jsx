import { useState, useEffect } from 'react';

const LINKS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Navbar = () => {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            for (const id of LINKS) {
                const el = document.getElementById(id);
                if (!el) continue;
                const r = el.getBoundingClientRect();
                if (r.top <= 130 && r.bottom >= 130) { setActive(id); break; }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <nav className="nav">
            <div className="nav-logo">AKM<span>.dev</span></div>
            <div className="nav-links">
                {LINKS.map(l => (
                    <span key={l} className={`nav-item ${active === l ? 'active' : ''}`} onClick={() => go(l)}>
                        {l}
                    </span>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;