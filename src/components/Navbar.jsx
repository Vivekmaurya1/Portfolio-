import { useState, useEffect } from 'react';

const LINKS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

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

    const go = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <>
            <nav className="nav">
                <div className="nav-logo">AKM<span>.dev</span></div>

                {/* Desktop links */}
                <div className="nav-links">
                    {LINKS.map(l => (
                        <span key={l} className={`nav-item ${active === l ? 'active' : ''}`} onClick={() => go(l)}>
                            {l}
                        </span>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    className={`nav-burger ${open ? 'open' : ''}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* Mobile drawer */}
            <div className={`nav-drawer ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
                {LINKS.map(l => (
                    <span
                        key={l}
                        className={`nav-item ${active === l ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); go(l); }}
                    >
                        {l}
                    </span>
                ))}
            </div>
        </>
    );
};

export default Navbar;