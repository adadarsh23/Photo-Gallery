import { useState, useEffect } from 'react';

export default function CursorTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setTrails((prev) => [
        ...prev,
        { x, y, id: Math.random(), life: 1 },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((trail) => ({ ...trail, life: trail.life - 0.02 }))
          .filter((trail) => trail.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Starry Tail */}
      {trails.map((trail, index) => {
        const nextTrail = trails[index + 1];
        if (!nextTrail) return null;

        const length = Math.sqrt(
          Math.pow(trail.x - nextTrail.x, 2) + Math.pow(trail.y - nextTrail.y, 2)
        );
        const angle =
          (Math.atan2(trail.y - nextTrail.y, trail.x - nextTrail.x) * 180) /
          Math.PI;

        return (
          <div
            key={trail.id}
            className="absolute"
            style={{
              width: `${length}px`,
              height: `${length}px`,
              background: 'transparent',
              opacity: trail.life,
              transform: `rotate(${angle}deg)`,
              transformOrigin: 'left center',
              left: `${nextTrail.x}px`,
              top: `${nextTrail.y}px`,
            }}
          >
            {/* Star-shaped trail */}
            <div
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-red-500 rounded-full opacity-75 animate-ping"
              style={{
                left: `${length / 2 - 1}px`,
                top: `${length / 2 - 1}px`,
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
