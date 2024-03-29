import { useEffect, useState } from "react";
import { createStage } from "@/components/Tetris/TetrisRule";
import { usePlayer } from "./usePlayer";

export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  const [rowCleared, setRowCleared] = useState(0);
  const [player, resetPlayer] = usePlayer();
  useEffect(()=>{
    setRowCleared(0);
  },[])
  
  useEffect(()=>{
    
    
  },[player, resetPlayer, stage])

  useEffect(()=>{
    // 消除完整的一列方塊
    const sweepRows = newStage =>
    newStage.reduce((ack, row) =>{
      if(row.findIndex(cell => cell[0] === 0) === -1){
        setRowCleared(prev => prev + 1);
        ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
        return ack;
      }
      ack.push(row);
      return ack;
    },[])
    const updateStage = prevStage => {
      // 參tetrisRule的架構
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear'? [0, 'clear'] : cell)),
        );
        // 建構俄羅斯方塊
        player.tetromino.forEach((row, y) => {
          row.forEach((value, x)=>{
            if(value !== 0){
              newStage[y + player.pos.y][x + player.pos.x] = [
                value,
                `${player.collided? 'merged' : 'clear'}`,
              ];
            }
          });
        });
        if(player.collided){
          resetPlayer();
          return sweepRows(newStage);
        }
        return newStage;
    };
    setStage(prev => updateStage(prev));
  },[player])
  return [stage, setStage, rowCleared];
}