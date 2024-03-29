import { useCallback, useState } from "react";

import { TETROMINOS, randomTetromino } from "@/components/Tetris/tetromino";
import { STAGE_WIDTH, checkCollision } from "@/components/Tetris/TetrisRule";

export const usePlayer = () => {
  // 設定遊戲區域初始值沒有方塊
  const [player, setPlayer] = useState({
    pos:{x:0, y:0},
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });
  // 俄羅斯方塊轉向
  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, index) => 
      matrix.map(col => col[index]),
      );
      // 去除原本的方塊重新排列成新的旋轉後的方塊
      if(dir > 0) return rotatedTetro.map(row => row.reverse())
      return rotatedTetro.reverse();
  }
  const playerRotate = (stage, dir) =>{
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
    //旋轉時不超出範圍且不覆蓋已經存在的方塊 
    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while(checkCollision(clonedPlayer, stage, {x:0, y:0})){
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length){
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }
  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev =>({
      ...prev,
      pos:{ x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }))
  }
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 -2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])
  return [player, updatePlayerPos, resetPlayer, playerRotate];
};