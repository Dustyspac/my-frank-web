import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <span style={{ fontWeight: 'bold', fontSize: '100px' }}>탕탕</span>
    </div>
  );
};

export default CustomCursor;
