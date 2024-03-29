import React from 'react';
import { StyledCell } from '../../styles/Tetris/Styled_cell';
import { TETROMINOS } from './tetromino';

export default function Cell({type}) {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color} />
  )
}
