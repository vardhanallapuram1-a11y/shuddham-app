import { useEffect, useRef } from "react";

export default function Cursor() {
  const small = useRef(null);
  const big = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const bigPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (small.current) {
        small.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const lerp = () => {
      bigPos.current.x += (pos.current.x - bigPos.current.x) * 0.12;
      bigPos.current.y += (pos.current.y - bigPos.current.y) * 0.12;
      if (big.current) {
        big.current.style.transform = `translate(${bigPos.current.x - 22}px, ${bigPos.current.y - 22}px)`;
      }
      raf.current = requestAnimationFrame(lerp);
    };
    raf.current = requestAnimationFrame(lerp);

    const over = (e) => {
      const hoverable = e.target.closest('a,button,.fl-card,.bento-card,.dc,.wc,.cpill');
      if (small.current) small.current.classList.toggle('big', !!hoverable);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={small} className="cur" style={{ transform: 'translate(-100px,-100px)' }} />
      <div ref={big} className="cur big" style={{ transform: 'translate(-100px,-100px)', transition: 'none' }} />
    </>
  );
}
