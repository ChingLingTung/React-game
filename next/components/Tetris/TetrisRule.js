export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// 用灰色小方塊排列成區域背景
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), ()=>
    new Array(STAGE_WIDTH).fill([0,'clear'])
  )
// 判斷方塊移動的位置
  export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for(let y = 0; y < player.tetromino.length; y += 1){
      for(let x = 0; x < player.tetromino[y].length; x += 1){
        // 判斷是否在俄羅斯方塊所在位置，等於0的方塊是背景
        if(player.tetromino[y][x] !== 0){
          if(
            // 判斷方塊移動範圍是否在限定遊戲區域的高度內
            !stage[y + player.pos.y + moveY] ||
            // 判斷方塊移動範圍是否在限定遊戲區域的寬度內
            !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
            // 正在移動的方塊不能被clear
            stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
          ){
            return true;
          }
        }
      }
    }
  }