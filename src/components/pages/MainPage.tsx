import React from 'react';
import CustomCursor from '../atoms/CustomCursor';
import AnimatedText from '../organisms/AnimatedText';
import { useCursorStore } from '../../store';

const MainPage: React.FC = () => {
  const { setCursorText } = useCursorStore();

  const handleMouseEnter = () => {
    setCursorText('탕탕');
  };

  const handleMouseLeave = () => {
    setCursorText('');
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CustomCursor />
      <AnimatedText />
    </div>
  );
};

export default MainPage