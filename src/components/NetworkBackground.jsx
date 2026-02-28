import { useEffect, useRef } from 'react';

const NetworkBackground = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        let raf;
        let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
        let cx = tx, cy = ty;

        const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
        window.addEventListener('mousemove', onMove, { passive: true });

        const tick = () => {
            // Lerp for silky smooth follow
            cx += (tx - cx) * 0.06;
            cy += (ty - cy) * 0.06;
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(calc(${cx}px - 50%), calc(${cy}px - 50%), 0)`;
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div className="grid-overlay" />
            <div className="grain" />
            <div ref={glowRef} className="cursor-glow" />
        </>
    );
};

export default NetworkBackground;