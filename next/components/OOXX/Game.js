import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './OOXXRule';
import styles from '@/styles/OX/game.module.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content' 

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const Alert = withReactContent(Swal);
  const handleClick = (i) =>{
    const boardData = [...board];
    // 使用者點選已有符號的格子或贏家出現
    if(winner || boardData[i]) return;
    // 點擊時要放X還是O
    boardData[i] = xIsNext? 'X' : 'O';
    setBoard(boardData);
    setXIsNext(!xIsNext);
  }
  const jumpTo = () =>{
    
  }
  const renderMoves = () =>{
    return (
      <button
      onClick={()=>setBoard(Array(9).fill(null))}>
      Start Again
      </button>
    )
    
  }
  if(winner){
    Alert.fire({ 
                didOpen: () => { 
                    Alert.fire({
                      titleText: winner + ' WIN',
                      text:'Reset the game and play again？',
                      showCancelButton: true,
                    }).then((check) => {
                      if(check.isConfirmed){
                        setBoard(Array(9).fill(null));
                        setXIsNext(true);
                      }else{
                        return
                      }
                    })
                  }
                })
  }
  return (
    <>
      <Board squares={board} onClick={handleClick}/>
      <>
        <p className={styles.text}>
        {winner? 'Winner : ' : 'Next Player : ' }
        {winner? <span className={styles.point}>{winner}</span> : <span className={styles.point}>{xIsNext? 'X' : 'O'}</span>}
        </p>
        <button className={styles.reset}
          onClick={()=>setBoard(Array(9).fill(null))}>
          Start Again
        </button>
      </>
    </>
  )
}
