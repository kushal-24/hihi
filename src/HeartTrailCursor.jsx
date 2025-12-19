import React, { useState, useEffect, useRef } from 'react';

const TRAIL_CONFIG = {
  HEARTS_PER_FRAME: 1, 
  MAX_TRAIL_SIZE: 30,
  FADE_DURATION: 1.5,
};

function HeartTrailCursor() {
  const [trail, setTrail] = useState([]);
  const trailRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let newTrail = [];

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const timestamp = Date.now();

        for (let i = 0; i < TRAIL_CONFIG.HEARTS_PER_FRAME; i++) {
          newTrail.push({
            id: timestamp + i,
            x: e.clientX + Math.random() * 5 - 2.5,
            y: e.clientY + Math.random() * 5 - 2.5,
            timestamp: timestamp,
          });
        }

        const cutoffTime = timestamp - TRAIL_CONFIG.FADE_DURATION * 1000;
        newTrail = newTrail.filter(heart => heart.timestamp > cutoffTime);

        if (newTrail.length > TRAIL_CONFIG.MAX_TRAIL_SIZE) {
          newTrail.shift();
        }

        setTrail([...newTrail]);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      // CRITICAL STYLES FOR VISIBILITY AND INTERACTION
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-9999" 
      ref={trailRef}
    >
      {trail.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-xl select-none" // select-none prevents highlighting
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            opacity: 1 - (Date.now() - heart.timestamp) / (TRAIL_CONFIG.FADE_DURATION * 1000),
            transition: 'opacity 0.2s linear, transform 0.2s ease-out',
            transform: `scale(${1 - (1 - heart.opacity) * 0.5})`,
            color: '#ff7aa7',
          }}
        >
          {'🎀'} 
        </div>
      ))}
    </div>
  );
}

export default HeartTrailCursor;