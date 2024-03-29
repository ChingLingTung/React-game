import { useEffect, useState } from "react";
import { createStage } from "@/components/Tetris/TetrisRule";
// import { usePlayer } from "./usePlayer";
// import { TETROMINOS } from "@/components/Tetris/tetromino";

export default function useStage(props){
  const [stage, setStage] = useState(createStage());
  const [rowCleared, setRowCleared] = useState(0);
  // const [resetPlayer] = usePlayer();
  // const [player] = usePlayer({
  //   pos:{x:0, y:0},
  //   tetromino: TETROMINOS[0].shape,
  //   collided: false,
  // });
  // useEffect(()=>{
  //   setRowCleared(0);
  // },[])
  // useEffect(()=>{

  // },[player, resetPlayer, stage])
  useEffect(()=>{
    setRowCleared(0);
    // 消除完整的一列方塊
    const sweepRows = newStage =>
    newStage.reduce((ack, row) =>{
      if(row.findIndex(cell => cell[0] === 0) === -1){
        setRowCleared(prev => prev + 1);
        // 在上面新增一排灰方塊
        ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
        return ack;
      }
      ack.push(row);
      return ack;
    },[])
    const updateStage = prevStage => {
      // 參tetrisRule的架構
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === 'clear'? [0, 'clear'] : cell))
        );
        // 建構俄羅斯方塊
        if(props.player.pos.y < 1){
          props.gameOver === true;
        }
        if(!props.gameOver){
          props.player.tetromino.forEach((row, y) => {
          row.forEach((value, x)=>{
            if(value !== 0){
              newStage[y + props.player.pos.y][x + props.player.pos.x] = [
                value,
                `${props.player.collided? 'merged' : 'clear'}`,
              ];
            }
          });
        });
        }
        
        if(props.player.collided){
          props.resetPlayer();
          return sweepRows(newStage);
        }
        return newStage;
    };
    setStage((prev) => updateStage(prev));
  },[props.player, props.resetPlayer])
  return [stage, setStage, rowCleared];
}