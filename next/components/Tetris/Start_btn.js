import { StyledStartBTN } from '@/styles/Tetris/Styled_startbtn';
import React from 'react';

export default function StartBtn({callback}) {
  return (
    <StyledStartBTN onClick={callback}>Start Game</StyledStartBTN>
  )
};
