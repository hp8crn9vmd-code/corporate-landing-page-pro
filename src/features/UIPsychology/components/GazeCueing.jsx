import React, { useState, useEffect, useRef } from 'react';

export const GazeCueing = () => {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate vector from eye center to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Calculate angle
      const angle = Math.atan2(deltaY, deltaX);

      // Limit pupil movement radius (eyeball constraint)
      const maxRadius = rect.width / 10; // Adjusted constraint based on logic
      const distance = Math.min(maxRadius, Math.hypot(deltaX, deltaY));

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      setPupilPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="flex gap-4 justify-center pointer-events-none">
      {/* Eyes Container */}
      {['left', 'right'].map((eye) => (
        <div
          key={eye}
          className="w-16 h-16 bg-white border-[3px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_black]"
        >
          <div
            className="w-6 h-6 bg-black rounded-full transition-transform duration-75 ease-out"
            style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
          />
        </div>
      ))}
    </div>
  );
};
