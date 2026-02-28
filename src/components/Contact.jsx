import { Reveal, RevealLeft, RevealRight } from './Utils';

const INFO = [
    { label: 'EMAIL', val: 'vivekmaurya8273@gmail.com', href: 'mailto:vivekmaurya8273@gmail.com' },
    { label: 'PHONE', val: '+91 9719930793', href: 'tel:+919719930793' },
    { label: 'GITHUB', val: 'github.com/Vivekmaurya1', href: 'https://github.com/Vivekmaurya1' },
    { label: 'LOCATION', val: 'Greater Noida, India', href: null },
];

const Contact = () => (
    <section id="contact" className="section">
        <div className="container">

            <Reveal>
                <div className="eyebrow">05 — Contact</div>
                <h2 className="heading" style={{ marginBottom: '1rem' }}>
                    Initiate<br /><span className="hi">Connection</span>
                </h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.7, maxWidth: '480px', marginBottom: '4rem' }}>
                    Open to product-based company opportunities and high-impact backend engineering roles.
                </p>
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                {/* Form */}
                <RevealLeft>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                        <input className="field" type="text" placeholder="// YOUR_NAME" />
                        <input className="field" type="email" placeholder="// YOUR_EMAIL" />
                        <textarea className="field" rows={5} placeholder="// MESSAGE.toString()" />
                        <button className="btn btn-solid" style={{ justifyContent: 'center', marginTop: '0.25rem' }}>
                            TRANSMIT MESSAGE <span>→</span>
                        </button>
                    </div>
                </RevealLeft>

                {/* Info */}
                <RevealRight delay={0.12}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {INFO.map(({ label, val, href }) => (
                            <div key={label} style={{ paddingBlock: '1.6rem', borderBottom: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--accent)' }}>{label}</span>
                                {href ? (
                                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                                        style={{ fontFamily: 'var(--body)', fontWeight: 600, fontSize: '0.98rem', color: 'var(--bright)', textDecoration: 'none', transition: 'color 0.25s' }}
                                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                        onMouseLeave={e => e.target.style.color = 'var(--bright)'}
                                    >{val}</a>
                                ) : (
                                    <span style={{ fontFamily: 'var(--body)', fontWeight: 600, fontSize: '0.98rem', color: 'var(--bright)' }}>{val}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </RevealRight>

            </div>
        </div>
    </section>
);

export default Contact;