import { StyledDisplay } from '@/styles/Tetris/Styled_display';
import React from 'react';

export default function Display({gameOver, text}) {
  return (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  )
}
