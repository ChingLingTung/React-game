import { StyledStartBTN } from '@/styles/Tetris/Styled_startbtn';
import React from 'react';

export default function StartBtn({start, gameOver, callback, pauseGame, pause, continueGame, keyCode}) {
  if(start && !gameOver && !pause){
    return(
      <StyledStartBTN onClick={pauseGame} keyCode={keyCode}>Pause Game</StyledStartBTN>
    )
  }
  else if(!start || gameOver){
    return (
      <StyledStartBTN onClick={callback}>Start Game</StyledStartBTN>
    )
  }
  else{
    return (
      <StyledStartBTN onClick={continueGame}>Continue Game</StyledStartBTN>
    )
  }
};
