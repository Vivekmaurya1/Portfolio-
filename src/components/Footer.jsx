const LINKS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Footer = () => {
    const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return (
        <footer className="footer">
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                © 2025 ANANY KUMAR MAURYA — ALL SYSTEMS OPERATIONAL
            </span>
            <div style={{ display: 'flex', gap: '2rem' }}>
                {LINKS.map(l => (
                    <span key={l} className="nav-item" onClick={() => go(l)} style={{ fontSize: '0.62rem' }}>{l}</span>
                ))}
            </div>
        </footer>
    );
};

export default Footer;