import React from 'react'
import Square from './Square'
import styles from '@/styles/OX/board.module.css'

export default function Board({squares, onClick}) {
  return (
    <div className={styles.board}>
    {squares.map((square, i) => {
      return(
        <Square key={i} value={square} onClick={()=>onClick(i)}/>
      )
    })}
    </div>
  )
}
