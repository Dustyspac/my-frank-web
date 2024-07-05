import React, { useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';

const AnimatedText: React.FC = () => {
  const { x, y } = useMousePosition();
  const [texts, setTexts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const id = Date.now();
    setTexts((prev) => [...prev, { id, x, y }]);
    const timer = setTimeout(() => {
      setTexts((prev) => prev.filter((text) => text.id !== id));
    }, 2000);

    return () => clearTimeout(timer);
  }, [x, y]);

  return (
    <div>
      {texts.map((text) => (
        <div
          key={text.id}
          style={{
            fontSize: '32px',
            color: 'black',
            position: 'fixed',
            top: `${text.y}px`,
            left: `${text.x}px`,
            animation: 'fall 2s forwards',
          }}
        >
          🍡후루후루🍡
        </div>
      ))}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;