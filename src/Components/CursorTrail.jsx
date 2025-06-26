import { useState, useEffect, useRef } from 'react';

export default function CursorTrail() {
  const [bubbles, setBubbles] = useState([]);
  const angleRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const amplitude = 10; // wave height
      const frequency = 0.2; // how fast the wave oscillates
      const angle = angleRef.current;

      const offsetX = Math.sin(angle) * amplitude;
      const offsetY = Math.cos(angle) * amplitude;

      const bubble = {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        id: Math.random(),
        size: Math.random() * 6 + 4,
        life: 1,
      };

      setBubbles((prev) => [...prev.slice(-50), bubble]); // limit bubbles
      angleRef.current += frequency;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev
          .map((b) => ({ ...b, life: b.life - 0.02 }))
          .filter((b) => b.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background: `radial-gradient(circle, rgba(255,255,255,${b.life}) 0%, rgba(0,200,255,${b.life * 0.5}) 70%, transparent 100%)`,
            transform: 'translate(-50%, -50%)',
            opacity: b.life,
            filter: 'blur(1.5px)',
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
}
