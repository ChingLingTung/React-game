import Display from '@/components/Tetris/Display';
import Stage from '@/components/Tetris/Stage';
import StartBtn from '@/components/Tetris/Start_btn';
import React, { useState, useEffect } from 'react';
import { StyledTetrisWrapper } from '@/styles/Tetris/Styled_tetris';
import { StyledTetris } from '@/styles/Tetris/Styled_tetris';
import { createStage, checkCollision } from './TetrisRule';
import usePlayer from '@/hooks/usePlayer';
import { TETROMINOS } from './tetromino';
import useStage from '@/hooks/useStage';
import { useInterval } from '@/hooks/useInterval';
import { useGameStatus } from '@/hooks/useGameStatus';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content' ;

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  // const [] = usePlayer({
  //   pos:{x:0, y:0},
  //   tetromino: TETROMINOS[0].shape,
  //   collided: false,
  // });
  const [stage, setStage, rowCleared] = useStage({player, resetPlayer, gameOver});
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowCleared);
  const Alert = withReactContent(Swal);
  useEffect(()=>{
    console.log('re-render');
  },[])
  
  // console.log(createStage());

  const movePlayer = dir => {
    // 避免方塊超出左右兩側範圍
    if(!checkCollision(player, stage, {x: dir, y: 0})){
      updatePlayerPos({ x:dir, y:0});
    }
  };
  const startGame = () => {
    // 重置
    setStage(createStage());
    // 遊戲開始時設定每秒掉落一格
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
    setStart(true);
    setPause(false);
  };
  const drop = () => {
    // 當玩家消除十列後增加level
    if(rows > (level + 1) * 10){
      setLevel(prev => prev + 1);
      // 同時增加下落速度
      setDropTime(1000 / (level + 1) + 100);

    }
    // 避免方塊超出底部範圍
    if(!checkCollision(player, stage, {x: 0, y: 1})){
      updatePlayerPos({ x:0, y:1, collided: false });
    }else{
      // 當方塊不能移動且與上方距離小於一時遊戲結束
      if(player.pos.y < 1){
        // console.log("Game Over!!!");
        setGameOver(true);
        setDropTime(null);
        setStart(false);
        return;
      }
      // 方塊抵達底部時按下面方向鍵不再移動
      updatePlayerPos({ x:0, y:0, collided: true });
    }
    
  };
// 遊戲進行中玩家按下面方向鍵會往下
  const keyUp = ({keyCode}) => {
    if(!gameOver){
      if(keyCode === 40){
        console.log('開始自動下落');
        setDropTime(1000 / (level + 1) + 100);
      }
    }
  } 
  const dropPlayer = () => {
    console.log('停止自動下落');
    setDropTime(null);
    drop();
  };
  const move = ({ keyCode }) => {
    if(!gameOver){
      // 使用者按左邊方向鍵
      if(keyCode === 37){
        movePlayer(-1);
        // 使用者按右邊方向鍵
      }else if(keyCode === 39){
        movePlayer(1);
        // 使用者按下面方向鍵
      }else if(keyCode === 40){
        dropPlayer();
        // 使用者按上面方向鍵，1是dir方向
      }else if(keyCode === 38){
        playerRotate(stage, 1);
      }
    }
  };
  useEffect(()=>{
    if(gameOver === true){
          Alert.fire({ 
          didOpen: () => { 
              Alert.fire({
                titleText: 'Game Over',
                text:'Reset the game and play again？',
                showCancelButton: true,
              }).then((check) => {
                if(check.isConfirmed){

                  startGame();
                }else{
                  return;
                }
              })
            }
          })
        }
  },[gameOver])

const pauseGame = () => {
    setPause(true);
    // console.log(pause, gameOver);
  }
  useInterval(()=>{
    if(!pause){
      drop();
    }
  }, [dropTime])
  const continueGame = () => {
    // 遊戲開始時設定每秒掉落一格
    setDropTime(1000);
    // resetPlayer();
    // setGameOver(false);
    // setScore(0);
    // setRows(0);
    // setLevel(0);
    setStart(true);
    setPause(false);
  };
  return (
          <StyledTetrisWrapper 
            role='button' 
            tabIndex='0' 
            onKeyDown={e => move(e)} 
            onKeyUp={keyUp}
          >
            <StyledTetris>
              <Stage stage={stage}/>
                <aside>
                  <div>
                    <Display text={`Score: ${score}`}/>
                    <Display text={`Rows: ${rows}`}/>
                    <Display text={`Level: ${level}`}/>
                  </div>
                  <StartBtn callback={startGame} start={start} pause={pause} pauseGame={pauseGame} continueGame={continueGame}/>
                </aside>
            </StyledTetris>
            
          </StyledTetrisWrapper>
  )
};
export default Tetris;